import React from 'react'
import PropTypes from 'prop-types'
import { View, WebView } from 'react-native'


const PdfView = props => (
  <WebView
    source={{ uri: props.src }}
    scalesPageToFit
    domStorageEnabled
    javaScriptEnabled
    {...props}
  />
)

PdfView.propTypes = {
  ...View.propTypes,
  src: PropTypes.string.isRequired,
  onLoadComplete: PropTypes.func,
}

PdfView.defaultProps = {
  onLoadComplete: null,
}

export default PdfView
