import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Header from '../components/header';
import RectangularButton from '../components/rectangularButton';

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <Header />
      <ScrollView style={styles.canvas} contentContainerStyle={styles.contentContainerStyle}>
        <RectangularButton text={'Login'} onPress={() => navigation.navigate('Login')} />
        <RectangularButton text={'SignUp'} onPress={() => navigation.navigate('SignUp')} />
      </ScrollView>
    </>
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
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
