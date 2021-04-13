import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Profile, Camera} from './src/pages'

const Stack = createStackNavigator();

const ModuleApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options = {{headerShown: false}}/>
        <Stack.Screen 
          name="Profile"
          component={Profile} 
          options = {{headerShown: true}}/>
        <Stack.Screen 
          name="Camera"
          component={Camera} 
          options = {{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ModuleApp;
