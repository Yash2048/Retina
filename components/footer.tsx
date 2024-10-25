import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import FilesButton from './filesButton';
import TextField from './textField';
import {DocumentPickerResponse} from 'react-native-document-picker';


export default function Footer() {
  const [video, setVideo] = useState<DocumentPickerResponse | null>(null);
  const [fileName, setFileName] = React.useState<string|null>('');

  return (
    <View style={styles.footer}>
      <TextField fileName={fileName} setFileName={setFileName} setVideo={setVideo} />
      <FilesButton setFileName={setFileName} setVideo={setVideo} video={video} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection:'row',
    backgroundColor: '#79b3ef',
    height: '9%',
  },
});
