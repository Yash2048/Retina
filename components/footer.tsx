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
    backgroundColor: 'hsl(210, 27.80%, 14.10%)',
    height: '7.3%',
    flex: 0.1,
    padding: 10,
    // borderTopWidth: 3,
    // borderTopColor: '#353434',
  },
});
