import {} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SelectProvider} from './context/selectedContext';
import Home from './screens/home';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <SelectProvider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          <stack.Screen name="Home" component={Home} />
        </stack.Navigator>
      </NavigationContainer>
    </SelectProvider>
  );
};

export default App;
