import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';

export default function FilesButton() {
  async function pickFile() {
    try {
      const doc = await DocumentPicker.pick();
      console.log(doc);
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
      <TouchableOpacity
        style={[styles.button, styles.circle]}
        onPress={pickFile}
      />
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
