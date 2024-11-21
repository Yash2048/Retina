import React from 'react';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useAuth} from '../context/authContext';

import Header from '../components/header';
import RectangularButton from '../components/rectangularButton';

interface SignUpFormData {
  email: string;
  password: string;
}
export default function Login() {
  const {control, handleSubmit} = useForm<SignUpFormData>();
  const {login} = useAuth();

  return (
    <>
      <Header />
      <ScrollView style={styles.canvas}>
        <Controller
          name="email"
          control={control}
          rules={{required: 'Email is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholderTextColor={'#000000'}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{required: 'Password is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholderTextColor={'#000000'}
              placeholder="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <RectangularButton text={'Login'} onPress={handleSubmit(login)} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#caf0f8',
    padding: 16,
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginBottom: 12,
    color: '#000000',
  },
});
