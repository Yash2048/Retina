import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
export default function home() {
  return (
    <>
      <Header />
      <ScrollView style={styles.canvas} />
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
    canvas: {
      backgroundColor: '#caf0f8',
    },
  });
