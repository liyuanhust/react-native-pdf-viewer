
# react-native-pdf-viewer  
**This is a simple pdf viewer with react native.**

On IOS it just use native `Webview` for both local and remote pdf file.   
On Android, it base on [barteksc/AndroidPdfViewer](https://github.com/barteksc/AndroidPdfViewer) for Local file. It use `Webview` for remote file. Native android `Webview` do not support pdf, so add uri 'http://docs.google.com/gview?embedded=true&url=' as prefix to display pdf by googledoc. 

## Getting started  

`$ npm install react-native-pdf-viewer --save`

### Mostly automatic installation

`$ react-native link react-native-pdf-viewer`

### Manual installation


#### iOS

No IOS native code

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNPdfViewerPackage;` to the imports at the top of the file
  - Add `new RNPdfViewerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-pdf-viewer'
  	project(':react-native-pdf-viewer').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-pdf-viewer/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-pdf-viewer')
  	```


## Usage

  
