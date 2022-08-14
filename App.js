import React from 'react';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from './src/pages/Welcome';
import Round1 from './src/pages/Round1'

const App = () => {

  const Stack = createNativeStackNavigator()

  return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Welcome' component={ Welcome } />
          <Stack.Screen name='Round1' component={ Round1 } />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
