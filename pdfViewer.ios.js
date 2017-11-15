'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, WebView} from 'react-native';

class PdfView extends Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.src}}
        scalesPageToFit
        domStorageEnabled
        javaScriptEnabled
        {...this.props}
      />
    )
  }
}

PdfView.propTypes = {
  ...View.propTypes,
  src: PropTypes.string.isRequired,
  onLoadComplete: PropTypes.func
};

PdfView.defaultProps = {
  onLoadComplete: null
}

export default PdfView;
