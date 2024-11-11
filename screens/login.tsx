import React from 'react';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Header from '../components/header';
import RectangularButton from '../components/rectangularButton';

export default function Login() {
  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data); // Handle form data here
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.canvas}>
        <Controller
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Username"
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
              placeholder="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <RectangularButton text={'Login'} onPress={handleSubmit(onSubmit)} />
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
  },
});
