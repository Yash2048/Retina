import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Retina</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#023047',
    height: '9%',
  },
  title: {
    color: 'white',
    margin: 'auto',
    fontSize: 38,
    fontFamily:'OpenSans-Light',
  },
});
