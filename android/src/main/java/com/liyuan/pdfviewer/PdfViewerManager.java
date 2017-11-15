package com.liyuan.pdfviewer;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class PdfViewerManager extends SimpleViewManager<PdfView> {

    @Override
    public String getName() {
        return "RCTPDFViewAndroid";
    }

    @Override
    public PdfView createViewInstance(ThemedReactContext context) {
        return new PdfView(context,null);
    }

    @ReactProp(name = "src")
    public void setPath(PdfView pdfView, String src) {
        pdfView.setSource(src);
    }

    @Override
    public void onAfterUpdateTransaction(PdfView pdfView) {
        super.onAfterUpdateTransaction(pdfView);
        pdfView.load();
    }
}
