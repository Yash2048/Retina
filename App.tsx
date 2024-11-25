import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SelectProvider} from './context/selectedContext';
import {AuthProvider, useAuth} from './context/authContext';

import {Home, Login, SignUp, Dashboard} from './screens';
const Stack = createNativeStackNavigator();

const AppProviders = ({children}: {children: ReactNode}) => (
  <AuthProvider>
    <SelectProvider>{children}</SelectProvider>
  </AuthProvider>
);

const AppNavigation = () => {
  const {isLoggedIn} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      )}

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <AppProviders>
        <AppNavigation />
      </AppProviders>
    </NavigationContainer>
  );
};
export default App;
