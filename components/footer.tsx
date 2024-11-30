import {View, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import FilesButton from './filesButton';
import TextField from './textField';
import {DocumentPickerResponse} from 'react-native-document-picker';

export default function Footer() {
  const {height, width} = useWindowDimensions();
  const passedHeight = height > width ? height * 0.1 : width * 0.09;
  const styles = dynamicSytles(passedHeight);

  const [video, setVideo] = useState<DocumentPickerResponse | null>(null);
  const [fileName, setFileName] = React.useState<string | null>('');

  return (
    <View style={styles.footer}>
      <TextField fileName={fileName} setFileName={setFileName} setVideo={setVideo} />
      <FilesButton setFileName={setFileName} setVideo={setVideo} video={video} />
    </View>
  );
}

const dynamicSytles = (height: number) =>
  StyleSheet.create({
    footer: {
      flexDirection: 'row',
      backgroundColor: '#023047',
      height: height,
    },
  });
