import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';

export default function FilesButton() {
  async function pickFile() {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
        allowMultiSelection: false,
      });
      const file = result[0] as DocumentPickerResponse;
      console.log('\n','File uri: ', file.uri,'\n','File type: ', file.type,'\n','File name: ', file.name,'\n','File size: ', file.size);

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
