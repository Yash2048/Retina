import React, {createContext, ReactNode, useState, useContext, useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UseFormReset} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (data: SignUpFormData) => void;
  signup: (data: SignUpFormData, reset: UseFormReset<SignUpFormData>) => void;
}
interface SignUpFormData {
  email: string;
  password: string;
}
type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
};

const authContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user is already logged in when the app starts
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
        navigation.navigate('Home');
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const login = async (data: SignUpFormData) => {
    console.log('\nProcessing');
    try {
      const userCredential = await Auth().signInWithEmailAndPassword(data.email, data.password);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      console.log('User account created & signed in!', idToken);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', idToken);
      navigation.navigate('Home');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    }
  };

  const signup = async (data: SignUpFormData, reset: UseFormReset<SignUpFormData>) => {
    console.log('\nProcessing');
    try {
      const userCredential = await Auth().createUserWithEmailAndPassword(data.email, data.password);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      console.log('User account created & signed in!', idToken);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', idToken);
      reset();
      navigation.navigate('Home');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken'); // Remove the token
    setIsLoggedIn(false);
    navigation.navigate('Dashboard');
  };
  return <authContext.Provider value={{isLoggedIn, login, signup}}>{children}</authContext.Provider>;
};

const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
