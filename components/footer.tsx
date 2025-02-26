import {View, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {DocumentPickerResponse} from 'react-native-document-picker';

import {TextField, FilesButton, LoadingBar} from '../components';

export default function Footer() {
  //dynamic styling
  const {height, width} = useWindowDimensions();
  const passedHeight = height > width ? height * 0.1 : width * 0.09;
  const styles = dynamicSytles(passedHeight);

  //states and shit
  const [video, setVideo] = useState<DocumentPickerResponse | null>(null);
  const [fileName, setFileName] = useState<string | null>('');
  const [uploading, setUploading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  return (
    <View style={styles.container}>
      {uploading ? <LoadingBar percentage={percentage} /> : null}
      <View style={styles.footer}>
        <TextField fileName={fileName} setFileName={setFileName} setVideo={setVideo} />
        <FilesButton
          setPercentage={setPercentage}
          setUploading={setUploading}
          setFileName={setFileName}
          setVideo={setVideo}
          video={video}
        />
      </View>
    </View>
  );
}

const dynamicSytles = (height: number) =>
  StyleSheet.create({
    footer: {
      flexDirection: 'row',
      backgroundColor: '#023047',
      height: height,
      margin: 0,
    },
    container: {},
  });
