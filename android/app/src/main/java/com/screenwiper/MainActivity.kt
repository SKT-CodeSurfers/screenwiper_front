package com.screenwiper

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen
import android.webkit.WebView

class MainActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this)
        super.onCreate(savedInstanceState)

        WebView.setWebContentsDebuggingEnabled(true)
    }

    override fun getMainComponentName(): String {
        return "ScreenWiper"
    }
}
