import {ScrollView, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';

import Header from '../components/header';
export default function Dashboard() {
  return (
    <SafeAreaView style={styles.superContainer}>
      <Header />
      <ScrollView style={styles.canvas}>
        <TextInput style={styles.text} />
        <TextInput style={styles.text} />
      </ScrollView>
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
  text: {
    borderWidth: 2,
    borderColor: '#aaaaaa',
    backgroundColor: '#rgb(59, 98, 102)',
  },
});
