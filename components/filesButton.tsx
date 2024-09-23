import React from 'react';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {API_URL} from '@env';

export default function FilesButton() {
  async function pick() {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
        allowMultiSelection: false,
      });

      const file = result[0] as DocumentPickerResponse;
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

      formData.append('video', {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
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
      <TouchableOpacity style={[styles.button, styles.circle]} onPress={pick} />
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
});

// circle's radius should change according to the parent height.
