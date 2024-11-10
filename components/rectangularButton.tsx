import {StyleSheet, TouchableOpacity, Text, StyleProp, TextStyle, GestureResponderEvent} from 'react-native';
import React from 'react';

export default function RectangualarButton({
  text,
  style,
  onPress,
}: {
  text?: string;
  style?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text || ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: 50,

    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5,

    borderColor: '#dbfeb8',
    backgroundColor: '#2dc653',
    alignSelf: 'center',

    display: 'flex',
    position: 'relative',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 'auto',
    color: '#dbfeb8',
  },
});
