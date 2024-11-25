import React, {createContext, ReactNode, useState, useContext, useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
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
};

const authContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    console.log('isLoggedIn state changed:', isLoggedIn);
  }, [isLoggedIn]);

  const login = (data: SignUpFormData) => {
    console.log('\nProcessing');
    Auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('User account signed in!');
        console.log('isLoggedIn', isLoggedIn);
        setIsLoggedIn(true);
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          console.log('Wrong password!');
        }

        if (error.code === 'auth/user-not-found') {
          console.log('User not found!');
        }

        console.error(error);
      });
  };

  const signup = (data: SignUpFormData, reset: UseFormReset<SignUpFormData>) => {
    console.log('\nProcessing');
    Auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('User account created & signed in!');
        reset();
        setIsLoggedIn(true);
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
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
