package fossasia.flappysvg;

import android.app.ProgressDialog;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

import fossasia.flappysvg.util.DecompressZip;

public class GameActivity extends AppCompatActivity {

    private WebView myWebView;

    //URL of online game page.
    private final String game_web_url = "http://fossasia.github.io/flappy-svg/";

    //URL of the packaged game.
    private final String download_file_path = "https://github.com/fossasia/flappy-svg/archive/gh-pages.zip";

    //Name of the root folder inside the packaged game.
    private final String game_folder_name = "flappy-svg-gh-pages";

    private String local_game_path;
    private boolean isUpdating;

    private ProgressDialog progress;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game_activity);

        myWebView = (WebView) findViewById(R.id.webView);
        WebSettings webSettings = myWebView.getSettings();

        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccess(true);

        myWebView.setWebViewClient(new WebViewClient());

        //Path where the game html page is saved(locally)
        local_game_path = getCacheFolder(this).getPath() + File.separator + game_folder_name + "/index.html";
        LoadGame();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_game, menu);
        return super.onCreateOptionsMenu(menu);
    }

    void LoadGame(){
        if (isThereAPreviousVersion()) {
            Log.d("Loading Game", local_game_path);
            myWebView.loadUrl("file:///" + local_game_path);
        }
        else{
            if(isNetworkAvailable()){
                new DownloadTask().execute(download_file_path);
            }
            else
                Toast.makeText(GameActivity.this, "Please, connect to internet to download the game", Toast.LENGTH_LONG).show();

        }
    }

    private class DownloadTask extends AsyncTask<String,Void,Exception> {
        boolean isFirstTime = !isThereAPreviousVersion();

        @Override
        protected void onPreExecute() {
            if(isFirstTime) {
                Toast.makeText(GameActivity.this, "Downloading game", Toast.LENGTH_LONG).show();
            }

            progress = new ProgressDialog(GameActivity.this);
            progress.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
            progress.setIndeterminate(false);
            progress.setProgress(0);

            if(isUpdating) {
                progress.setMessage("Updating game");
            }
            else
                progress.setMessage("Downloading game");
                progress.show();

        }

        @Override
        protected Exception doInBackground(String... params) {
            String url = params[0];
            try {
                downloadAssets(url);
            } catch ( Exception e ) { return e; }

            return null;
        }

        @Override
        protected void onPostExecute(Exception result) {
            if (progress.isShowing()) {
                progress.dismiss();
            }

            if(isFirstTime){
                if ( result == null )
                    Toast.makeText(GameActivity.this, "Game downloaded", Toast.LENGTH_LONG).show();
                else {
                    Toast.makeText(GameActivity.this, "A problem occurs, connect to internet and use Update button", Toast.LENGTH_LONG).show();
                }
            }
            if(result == null){
                myWebView.loadUrl("file:///" + local_game_path);
                if(isUpdating){
                    Toast.makeText(GameActivity.this, "Game updated", Toast.LENGTH_LONG).show();
                    isUpdating = false;
                }
            }
        }
    }

    private void downloadAssets(String url) {
        try{
            URL gameURL = new URL(url);
            URLConnection connection = gameURL.openConnection();
            InputStream inputStream = new BufferedInputStream(gameURL.openStream(), 10240);
            File cacheDir = getCacheFolder(GameActivity.this);
            File cacheFile = new File(cacheDir, "game.zip");
            FileOutputStream outputStream = new FileOutputStream(cacheFile);

            byte buffer[] = new byte[1024];
            int fileLength = connection.getContentLength();
            int dataSize;
            int loadedSize = 0;
            while ((dataSize = inputStream.read(buffer)) != -1) {
                loadedSize += dataSize;
                outputStream.write(buffer, 0, dataSize);
                if(fileLength > 0)
                    progress.setProgress(loadedSize * 100 / fileLength);

            }

            outputStream.close();
            unzipFile(cacheFile,cacheDir);
        }

        catch (Exception exp){
            throw new RuntimeException(exp);
        }
    }

    protected void unzipFile( File zipFile, File destination ) {
        DecompressZip decomp = new DecompressZip( zipFile.getPath(),
                destination.getPath() + File.separator );
        decomp.unzip();
    }

    private boolean isNetworkAvailable() {
        ConnectivityManager connectivityManager
                = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }

    public File getCacheFolder(Context context) {
        File cacheDir = null;
        if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)) {
            cacheDir = new File(Environment.getExternalStorageDirectory(), "cachefolder");
            if(!cacheDir.isDirectory()) {
                cacheDir.mkdirs();
            }
        }

        if(!cacheDir.isDirectory()) {
            cacheDir = context.getCacheDir(); //get system cache folder
        }

        return cacheDir;
    }

    boolean isThereAPreviousVersion(){
        File file = new File(local_game_path);
        return file.exists();
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.update_button) {
            if(!isNetworkAvailable()) {
                Toast.makeText(GameActivity.this, "Could not update game", Toast.LENGTH_LONG).show();
                return true;
            }

            Toast.makeText(GameActivity.this,"Updating game", Toast.LENGTH_SHORT).show();
            isUpdating = true;
            new DownloadTask().execute(download_file_path);
            return true;
        }

        if (id == R.id.restart_button) {
            LoadGame();
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
