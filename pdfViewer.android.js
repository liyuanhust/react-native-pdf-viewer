import React, { Component } from 'react'
import { requireNativeComponent, View, WebView } from 'react-native'
import PropTypes from 'prop-types'

const androidPDFViewUriPrefix = 'http://docs.google.com/gview?embedded=true&url='

class PdfView extends Component {

  onLoadEnd = () => {
    this.props.onLoadEnd && this.props.onLoadEnd()
  }

  setNativeProps(nativeProps) {
    this.pdfview.setNativeProps(nativeProps)
  }


  isRemoteFile = src => {
    if (!src) return false
    return src.startsWith('http://') || src.startsWith('https://')
  }


  render() {
    const { src } = this.props
    if (this.isRemoteFile(src)) {
      return (
        <WebView
          source={{ uri: `${androidPDFViewUriPrefix}${src}` }}
          scalesPageToFit
          javaScriptEnabled
          domStorageEnabled
          onLoadEnd={() => this.onLoadEnd()}
          {...this.props}
        />
      )
    }
    return (
      <PdfViewAndroid
        ref={ref => { this.pdfview = ref }}
        onChange={this.onLoadEnd}
        {...this.props}
      />)
  }
}

PdfView.propTypes = {
  ...View.propTypes,
  src: PropTypes.string.isRequired,
  onLoadEnd: PropTypes.func,
}

PdfView.defaultProps = {
  onLoadEnd: null,
}


const PdfViewAndroid = requireNativeComponent('RCTPDFViewAndroid', PdfView, {
  nativeOnly: { onChange: true },
})

export default PdfView
