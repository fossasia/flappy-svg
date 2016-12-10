package com.kidcoder.FlappySVGCustom;

import android.media.SoundPool;
import android.webkit.JavascriptInterface;
import android.app.Activity;
import android.content.res.AssetManager;


public class AudioPlayer {

    /*Constants*/

    private static final String GAME_OVER_SOUND = "game_over.mp3";
    private static final String FLAP_SOUND = "flappy.mp3";

    /*Members*/

    private final SoundPool player;

    private int gameOverSoundID;
    private int flapSoundID;

    /*Constructors*/

    public AudioPlayer(Activity activity) {
        player = buildSoundPool();

        AssetManager assets = activity.getAssets();

        try {
            gameOverSoundID = player.load(assets.openFd(GAME_OVER_SOUND), 1);
            flapSoundID = player.load(assets.openFd(FLAP_SOUND), 1);
        }
        catch(java.io.IOException exception) {
            android.util.Log.e("EXCEPTION", exception.getMessage());
        }
    }

    /*Methods*/

    private SoundPool buildSoundPool() {
        return new SoundPool(2, android.media.AudioManager.STREAM_MUSIC, 0);
    }

    @JavascriptInterface
    public void playGameOver() {
        player.play(gameOverSoundID, 1.0f, 1.0f, 1, 0 , 1.0f);
    }

    @JavascriptInterface
    public void playFlap() {
        player.play(flapSoundID, 1.0f, 1.0f, 1, 0, 1.0f);
    }

}
