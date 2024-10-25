import React, { useContext } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DocumentPickerResponse} from 'react-native-document-picker';



import {selectContext} from '../context/selectedContext';
const CrossIcon = require('../assests/cross_icon.png');

interface TextFieldProps {
  fileName: string | null;
  setFileName: (name: string | null) => void;
  setVideo: (video: DocumentPickerResponse | null) => void;
}

export default function TextField({fileName, setFileName, setVideo}: TextFieldProps) {
  const context = useContext(selectContext);


  const {isSelected, selectActive} = context;

  async function fun() {
    setFileName('');
    selectActive();
    setVideo(null);
  }

  return (
    <View style={styles.field}>
      <Text style={styles.text}>{fileName}</Text>
     { isSelected && <TouchableOpacity style={styles.button} onPress={fun}>
        <Image source={CrossIcon} style={styles.image} />
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    height: '65%',
    borderColor: '#b0b0b0',
    borderWidth: 1.2,
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.83)',
    borderCurve: 'circular',
    borderRadius: 6,
  },
  text: {
    color: 'rgb(0, 0, 0)',
    borderColor: '#b0b0b0',
    borderWidth: 1.2,
    marginLeft: 5,
    textAlign: 'left',
    marginVertical: 'auto',

  },
  button: {
    marginVertical: 'auto',
    marginRight: 5,
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'red',
  },
  image: {
    width: 30,
    height: 30,
  },
});