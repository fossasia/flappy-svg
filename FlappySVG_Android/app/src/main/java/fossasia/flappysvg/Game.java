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
import android.util.Log;
import android.view.Window;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.File;

import fossasia.flappysvg.util.DecompressZip;
import fossasia.flappysvg.util.DownloadFile;
import fossasia.flappysvg.util.ExternalStorage;

public class Game extends Activity {
    private WebView myWebView;

    private final String download_file_path = "https://github.com/fossasia/flappy-svg/archive/gh-pages.zip";
    private final String game_folder_name = "flappy-svg-gh-pages";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_game);

        myWebView = (WebView) findViewById(R.id.webView);
        myWebView.setWebViewClient(new WebViewClient());
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccess(true);

        if(isNetworkAvailable()){
            myWebView.loadUrl("http://fossasia.github.io/flappy-svg/");
            new DownloadTask().execute(download_file_path);
        }
        else {
            Log.d("Loading Game", ExternalStorage.getSDCacheDir(this, game_folder_name + "/index.html").getAbsolutePath());
            myWebView.loadUrl("file:///" + ExternalStorage.getSDCacheDir(this, game_folder_name + "/index.html").getPath());
        }

    }
    private boolean isNetworkAvailable() {
        ConnectivityManager connectivityManager
                = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }

    private class DownloadTask extends AsyncTask<String,Void,Exception> {

        @Override
        protected void onPreExecute() {

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
            Toast.makeText(Game.this, result.getLocalizedMessage(), Toast.LENGTH_LONG).show();
        }
    }

    private void downloadAssets(String url) {
        // Temp folder for holding asset during download
        File zipDir =  ExternalStorage.getSDCacheDir(this, "tmp");
        // File path to store .zip file before unzipping
        File zipFile = new File( zipDir.getPath() + "/temp.zip" );
        // Folder to hold unzipped output
        File outputDir = ExternalStorage.getSDCacheDir(this, "");

        try {
            DownloadFile.download(url, zipFile, zipDir);
            unzipFile( zipFile, outputDir );
        } finally {
            zipFile.delete();
        }
    }


    protected void unzipFile( File zipFile, File destination ) {
        DecompressZip decomp = new DecompressZip( zipFile.getPath(),
                destination.getPath() + File.separator );
        decomp.unzip();
    }

}







