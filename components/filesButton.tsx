import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Alert, Image} from 'react-native';
import DocumentPicker, {DocumentPickerResponse} from 'react-native-document-picker';
import {API_URL} from '@env';

import {selectContext} from '../context/selectedContext';

interface FilesButtonProps {
  setFileName: (name: string | null) => void;
  setVideo: (video: DocumentPickerResponse | null) => void;
  video: DocumentPickerResponse | null;
}
export default function FilesButton({setFileName, setVideo, video}: FilesButtonProps) {
  const context = useContext(selectContext);
  //console.log(context);

  if (!context) {
    throw new Error('SelectComponent must be used within a SelectProvider');
  }

  const {isSelected, selectActive} = context;
  const FolderIcon = isSelected ? require('../assests/upload_icon.png') : require('../assests/folder_icon.png');

  async function selectVideo() {
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
      setVideo(file);
      setFileName(file.name);
      selectActive();
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User closed the file picker');
      } else {
        console.log(error);
      }
    }
  }

  async function uploadVideo() {
    try {
      const formData = new FormData();

      if (video) {
        formData.append('video', {
          uri: video.uri,
          name: video.name,
          type: video.type,
        });
      }
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

      Alert.alert('Upload complete', 'The video has been uploaded successfully.');
      setVideo(null);
      return;
    } catch (error) {
      console.log(error);
      selectActive();
      setFileName('');
    }
  }

  return (
    <View style={[styles.circle]}>
      <TouchableOpacity style={[styles.button, styles.circle]} onPress={isSelected ? uploadVideo : selectVideo}>
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
