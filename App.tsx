import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import {SelectProvider} from './context/selectedContext';

import Home from './screens/home';

const App = () => {
  return (
    <SelectProvider>
      <SafeAreaView style={styles.superContainer}>
      <Home/>
      </SafeAreaView>
    </SelectProvider>
  );
};

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#caf0f8',
  },
  superContainer: {
    flex: 1,
  },
});

export default App;
