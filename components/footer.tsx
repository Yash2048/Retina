import {View, StyleSheet} from 'react-native';
import React from 'react';
import FilesButton from './filesButton';
import TextField from './textField';

export default function Footer() {

  const [fileName, setFileName] = React.useState<string|null>('');

  return (
    <View style={styles.footer}>
      <TextField fileName={fileName} setFileName={setFileName} />
      <FilesButton setFileName={setFileName}/>
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
