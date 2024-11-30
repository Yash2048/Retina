import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import React from 'react';

export default function Footer() {
  const {height, width} = useWindowDimensions();
  const passedHeight = height > width ? height * 0.1 : width * 0.08;
  const styles = dynamicSytles(passedHeight);
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Retina</Text>
    </View>
  );
}

const dynamicSytles = (height: number) =>
  StyleSheet.create({
    header: {
      backgroundColor: '#023047',
      height: height,
    },
    title: {
      color: 'white',
      margin: 'auto',
      fontSize: 38,
      fontFamily: 'OpenSans-Light',
    },
  });
