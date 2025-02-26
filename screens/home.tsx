import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import {Header, Footer} from '../components';
export default function Home() {
  return (
    <SafeAreaView style={styles.superContainer}>
      <Header />
      <ScrollView style={styles.canvas} />
      <Footer />
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
