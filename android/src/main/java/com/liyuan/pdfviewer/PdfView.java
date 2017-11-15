package com.liyuan.pdfviewer;

import android.content.Context;
import android.util.AttributeSet;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.github.barteksc.pdfviewer.PDFView;
import com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener;

import java.io.File;

/**
 * Created by ywli on 08/11/2017.
 */

public class PdfView extends PDFView implements OnLoadCompleteListener {
    private int pageNumber = 1;
    private String src;

    public PdfView(Context context, AttributeSet set) {
        super(context, set);
    }

    @Override
    public void loadComplete(int pageCount) {
        WritableMap event = Arguments.createMap();
        event.putString("message", String.valueOf(pageCount));
        ReactContext reactContext = (ReactContext) this.getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                this.getId(),
                "topChange",
                event
        );
    }

    public void load() {
        if (src != null) {
            this.fromFile(new File(src))
                    .defaultPage(pageNumber)
                    .onLoad(this)
                    .load();
        }
    }

    public void setSource(String src) {
        this.src = src;
    }
}
