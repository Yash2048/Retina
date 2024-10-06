import React from 'react';
import {StyleSheet, Text, View} from 'react-native';




export default function TextField({fileName}:{fileName:string|null}) {
  return (
    <View style={styles.field}>
      <Text style={styles.text}>{fileName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
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
    textAlign: 'left',
    marginVertical: 'auto',
    paddingLeft: 5,
  },
});
