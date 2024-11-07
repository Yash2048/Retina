import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SelectProvider} from './context/selectedContext';
import {AuthProvider, useAuth} from './context/authContext';

import {Home, Login, Dashboard} from './screens';
const Stack = createNativeStackNavigator();

const AppProviders = ({children}: {children: ReactNode}) => (
  <AuthProvider>
    <SelectProvider>{children}</SelectProvider>
  </AuthProvider>
);

const AppNavigation = () => {
  const {isLoggedIn} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Dashboard'} screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <AppProviders>
      <AppNavigation />
    </AppProviders>
  );
};
export default App;
