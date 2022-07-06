import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Splash from './src/screens/Splash';


import Registration from './src/screens/Registration';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 2000);
  }, [])

  return (
    <>
      {
        showSplash && <Splash />
      }
      
    </>
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
