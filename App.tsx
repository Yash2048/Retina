import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  return (
    <SafeAreaView style={styles.superContainer}>
      <Header/>
      <ScrollView style={styles.canvas}/>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#ff3636'
  },
  superContainer: {
    flex: 1,
    backgroundColor: '#80a4b5',

  },
});

export default App;
