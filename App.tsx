import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import {SelectProvider} from './context/selectedContext';

import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  return (
    <SelectProvider>
      <SafeAreaView style={styles.superContainer}>
        <Header />
        <ScrollView style={styles.canvas} />
        <Footer />
      </SafeAreaView>
    </SelectProvider>
  );
};

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#ff3636',
  },
  superContainer: {
    flex: 1,
  },
});

export default App;
