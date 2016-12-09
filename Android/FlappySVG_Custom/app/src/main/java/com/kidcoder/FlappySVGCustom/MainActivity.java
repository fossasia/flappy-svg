package com.kidcoder.FlappySVGCustom;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends Activity {

    /*Constants*/

    private static final String MAIN_GAME_PAGE = "file:///android_asset/flappy-svg-gh-pages/main_menu.html";

    /*Methods*/

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        WebView gameView = new WebView(this);
        gameView.getSettings().setJavaScriptEnabled(true);
        setContentView(gameView);

        AudioPlayer audioPlayer = new AudioPlayer(this);
        gameView.addJavascriptInterface(audioPlayer, "audioPlayer");

        gameView.loadUrl(MAIN_GAME_PAGE);
    }
}
