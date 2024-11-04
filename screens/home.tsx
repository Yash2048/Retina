import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
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
