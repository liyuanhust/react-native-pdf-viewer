import * as React from 'react';
import * as ReactNative from 'react-native';

interface Props {
  style?: ReactNative.ViewStyle,
  src?: string,
  onLoadEnd?: () => void,
}

declare class PDFView extends React.Component<Props, any> {}

export default PDFView;
