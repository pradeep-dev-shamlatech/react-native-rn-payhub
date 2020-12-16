package com.reactlibrary;

import android.webkit.WebView;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.gateway.sdk.exception.ApplicationError;
import com.gateway.sdk.payment.PaymentFactory;

public class RnPayhubModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RnPayhubModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;

        //TODO: Test code please remove
        WebView webView = new WebView(getCurrentActivity());
        try {
            PaymentFactory.newInstance().renderIFrameIntoWebView(webView, "");
        } catch (ApplicationError applicationError) {
            applicationError.printStackTrace();
        }
    }

    @Override
    public String getName() {
        return "RnPayhub";
    }

    @ReactMethod
    public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
        // TODO: Implement some actually useful functionality
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }
}
