'use strict';
import React, {Component, PropTypes} from 'react';
import {requireNativeComponent, View, WebView} from 'react-native';

const androidPDFViewUriPrefix = 'http://docs.google.com/gview?embedded=true&url='

class PdfView extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  onLoadComplete = () => {
    this.props.onLoadComplete && this.props.onLoadComplete();
  }

  isRemoteFile = src => {
    if (!src) return false
    return src.startsWith("http://") || src.startsWith("https://")
  }


  render() {
    if (this.isRemoteFile(src)) {
      return (
        <WebView
          source={{ uri: `${androidPDFViewUriPrefix}${src}` }}
          scalesPageToFit
          javaScriptEnabled
          domStorageEnabled
          onLoadEnd={() => this.onLoadComplete()}
          {...this.props}
        />
      )
    }
    return (
      <PdfViewAndroid
        ref={ref => this._root = ref}
        onChange={this.onLoadComplete}
        {...this.props}
      />)
  }
}

PdfView.propTypes = {
  ...View.propTypes,
  src: PropTypes.string.isRequired,
  onLoadComplete: PropTypes.func
};

const PdfViewAndroid = requireNativeComponent('RCTPDFViewAndroid', PdfView, {
  nativeOnly: {onChange: true}
});

export default PdfView;
