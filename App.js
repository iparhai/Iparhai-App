import './src/Ignore_Warnings/ignoreWarnings';
import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native';

import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import Courses from './src/screens/Courses/Courses';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login existed user' }}
        />
        <Stack.Screen
          name='Registration'
          component={Registration}
          options={{ title: 'Register a new user' }}
        />
        <Stack.Screen
          name='Courses'
          component={Courses}
          options={{ title: 'Courses' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: '10px solid red'
  },
});
