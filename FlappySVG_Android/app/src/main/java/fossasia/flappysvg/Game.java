/*
This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.
To view a copy of this license, visit
 http://creativecommons.org/licenses/by-nc/4.0/.
 */

package fossasia.flappysvg;

import android.app.Activity;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.Window;
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

public class Game extends Activity {
    private WebView myWebView;

    //URL of online game page.
    private final String game_web_url = "http://fossasia.github.io/flappy-svg/";

    //URL of the packaged game.
    private final String download_file_path = "https://github.com/fossasia/flappy-svg/archive/gh-pages.zip";

    //Name of the root folder inside the packaged game.
    private final String game_folder_name = "flappy-svg-gh-pages";

    private String local_game_path;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_game);

        myWebView = (WebView) findViewById(R.id.webView);
        WebSettings webSettings = myWebView.getSettings();

        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccess(true);

        myWebView.setWebViewClient(new WebViewClient());

        //Path where the game html page is saved(locally)
        local_game_path = getCacheFolder(this).getPath() + File.separator + game_folder_name + "/index.html";

        //Checking network connection. If there is connection, it downloads the game to use later locally.
        if(isNetworkAvailable()){
            myWebView.loadUrl(game_web_url);
            new DownloadTask().execute(download_file_path);
        }
        else {
            if (isThereAPreviousVersion()) {
                Log.d("Loading Game", local_game_path);
                myWebView.loadUrl("file:///" + local_game_path);
            }
            else
                Toast.makeText(Game.this, "Please, connect to internet", Toast.LENGTH_LONG).show();
        }
    }

    private class DownloadTask extends AsyncTask<String,Void,Exception> {
        boolean isFirstTime = !isThereAPreviousVersion();
        @Override
        protected void onPreExecute() {
            if(isFirstTime) {
                Toast.makeText(Game.this, "Downloading game", Toast.LENGTH_LONG).show();
            }
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
            if(isFirstTime){
                if ( result == null )
                    Toast.makeText(Game.this, "Game downloaded", Toast.LENGTH_LONG).show();
                else {
                    Toast.makeText(Game.this, "A problem occurs, trying again", Toast.LENGTH_LONG).show();
                    new DownloadTask().execute(download_file_path);
                }
            }
        }
    }

    private void downloadAssets(String url) {
        try{
            URL gameURL = new URL(url);
            URLConnection connection = gameURL.openConnection();
            InputStream inputStream = new BufferedInputStream(gameURL.openStream(), 10240);
            File cacheDir = getCacheFolder(Game.this);
            File cacheFile = new File(cacheDir, "game.zip");
            FileOutputStream outputStream = new FileOutputStream(cacheFile);

            byte buffer[] = new byte[1024];
            int dataSize;
            int loadedSize = 0;
            while ((dataSize = inputStream.read(buffer)) != -1) {
                loadedSize += dataSize;
                outputStream.write(buffer, 0, dataSize);

                //Progress bar code here(use loaded size)
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
}




