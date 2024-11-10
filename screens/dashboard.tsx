import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Header from '../components/header';
import RectangualarButton from '../components/rectangularButton';

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.superContainer}>
      <Header />
      <ScrollView style={styles.canvas} contentContainerStyle={styles.contentContainerStyle}>
        <RectangualarButton text={'Login'} onPress={() => navigation.navigate('Login')} />
        <RectangualarButton text={'SignUp'} onPress={() => navigation.navigate('SignUp')} />
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
  button: {
    width: '60%',
    height: 50,

    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 5,

    borderColor: '#dbfeb8',
    backgroundColor: '#2dc653',
    alignSelf: 'center',

    display: 'flex',
    position: 'relative',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 'auto',
    color: '#dbfeb8',
  },

  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, // Optional padding around the content
  },
});
