import * as React from 'react';
import * as ReactNative from 'react-native';

interface Props {
  style?: ReactNative.ViewStyle,
  src?: string,
  onLoadComplete?: () => void,
}

declare class PDFView extends React.Component<Props, any> {}

export default PDFView;
