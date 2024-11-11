import {StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle, GestureResponderEvent} from 'react-native';
import React from 'react';

import {rectangularButtonStyle} from '../styles/deafultStyles';
const {button, buttonText} = rectangularButtonStyle;
interface RectangularButtonProps {
  buttonstyles?: StyleProp<ViewStyle>;
  textstyles?: StyleProp<TextStyle>;
  text?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function RectangularButton({buttonstyles, textstyles, text, onPress}: RectangularButtonProps) {
  return (
    <TouchableOpacity style={[buttonstyles, button]} onPress={onPress}>
      <Text style={[textstyles, buttonText]}>{text || ''}</Text>
    </TouchableOpacity>
  );
}
