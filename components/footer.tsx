import {View, StyleSheet} from 'react-native';
import React from 'react';
import FilesButton from './filesButton';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <FilesButton />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#79b3ef',
    height: '9%',
  },
});
