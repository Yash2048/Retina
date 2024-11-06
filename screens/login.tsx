import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import Header from '../components/header';
export default function Login() {
  return (
    <SafeAreaView style={styles.superContainer}>
      <Header />
      <ScrollView style={styles.canvas} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#caf0f8',
  },
  superContainer: {
    flex: 1,
  },
});
