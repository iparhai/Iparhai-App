import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Courses from '../screens/Courses';
import Otp from '../screens/otp';
import Forgetpw from '../screens/forgotpw';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
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
           <Stack.Screen
            name='Otp'
            component={Otp}
            options={{ title: 'Otp' }}
          />
           <Stack.Screen
            name='forgetpw'
            component={Forgetpw}
            options={{ title: 'forgetpw' }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
  const NavigationProvider = () => {
    return <AuthStack />;
  };
  export default NavigationProvider;