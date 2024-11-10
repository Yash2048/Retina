import {ScrollView, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';

import RectangularButton from '../components/rectangularButton';
import Header from '../components/header';
import {textInput} from '../stylesheets/defaultStyles';
export default function Login() {
  return (
    <SafeAreaView style={styles.superContainer}>
      <Header />
      <ScrollView style={styles.canvas}>
        <TextInput style={textInput} />
        <RectangularButton style={styles.button} text={'SignUp'} />
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
  button: {},
});
