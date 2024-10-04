import React from 'react';
import {StyleSheet, View, TouchableOpacity, Alert, Image} from 'react-native';
import DocumentPicker, {
} from 'react-native-document-picker';
import {API_URL} from '@env';

const FolderIcon = require('../assests/folder_icon.png');

export default function FilesButton() {
  async function pick() {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.video],
      });
      console.log(
        '\n',
        'File uri: ',
        file.uri,
        '\n',
        'File type: ',
        file.type,
        '\n',
        'File name: ',
        file.name,
        '\n',
        'File size: ',
        file.size,
      );

      const formData = new FormData();

      formData.append('video', file);
      const url = API_URL;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const resultJson = await response.json();
      console.log('Response from server:', resultJson);

      Alert.alert(
        'Upload complete',
        'The video has been uploaded successfully.',
      );
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the upload');
      } else {
        console.log(error);
      }
    }
  }

  return (
    <View style={[styles.circle]}>
      <TouchableOpacity style={[styles.button, styles.circle]} onPress={pick}>
        <Image source={FolderIcon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    margin: 'auto',
    backgroundColor: '#ffffff',
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  button: {
    flex: 1,
  },
  image: {
    width: 56,
    height: 56,
  },
});

// circle's radius should change according to the parent height.
