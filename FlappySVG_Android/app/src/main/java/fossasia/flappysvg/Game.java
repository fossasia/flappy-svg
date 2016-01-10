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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_game);

        myWebView = (WebView) findViewById(R.id.webView);
        WebSettings webSettings = myWebView.getSettings();

        myWebView.setWebViewClient(new WebViewClient());
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccess(true);

        //Path where the game html page is saved(locally)
        String local_game_path = "file:///" + getCacheFolder(this).getPath() + File.separator + game_folder_name + "/index.html";

        //Checking network connection. If there is connection, it downloads the game to use later locally.
        if(isNetworkAvailable()){
            myWebView.loadUrl(game_web_url);
            new DownloadTask().execute(download_file_path);
        }
        else {
            Log.d("Loading Game", local_game_path);
            myWebView.loadUrl(local_game_path);
        }

    }

    private class DownloadTask extends AsyncTask<String,Void,Exception> {
        @Override
        protected void onPreExecute() {
            //Put here, alert messages(on download starts)
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
            if ( result == null ) { return; }
            // something went wrong, post a message to user - you could use a dialog here or whatever
            //Toast.makeText(Game.this, result.getLocalizedMessage(), Toast.LENGTH_LONG).show();
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
}




