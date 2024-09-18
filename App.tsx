import {Text, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import Footer from './components/footer';

const App = () => {
  return (
    <SafeAreaView style={styles.superContainer}>
      <ScrollView style={styles.canvas}>
        <Text>hfsjfasvj</Text>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  canvas: {
    borderBottomColor: '#074867',
    borderBottomWidth: 1.5,
  },
  superContainer: {
    flex: 1,
    backgroundColor: '#80a4b5',

  },
});

export default App;
