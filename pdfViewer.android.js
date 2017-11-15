import React, { Component } from 'react'
import { requireNativeComponent, View, WebView } from 'react-native'
import PropTypes from 'prop-types'

const androidPDFViewUriPrefix = 'http://docs.google.com/gview?embedded=true&url='

class PdfView extends Component {

  onLoadComplete = () => {
    if (this.props.onLoadComplete !== null) {
      this.props.onLoadComplete()
    }
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
          onLoadEnd={() => this.onLoadComplete()}
          {...this.props}
        />
      )
    }
    return (
      <PdfViewAndroid
        ref={ref => { this.pdfview = ref }}
        onChange={this.onLoadComplete}
        {...this.props}
      />)
  }
}

PdfView.propTypes = {
  ...View.propTypes,
  src: PropTypes.string.isRequired,
  onLoadComplete: PropTypes.func,
}

PdfView.defaultProps = {
  onLoadComplete: null,
}


const PdfViewAndroid = requireNativeComponent('RCTPDFViewAndroid', PdfView, {
  nativeOnly: { onChange: true },
})

export default PdfView
