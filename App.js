import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/Splash';

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
      {
        !showSplash &&
        <View style={styles.container}>
          <Text>I am react App</Text>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    border: '10px solid red'
  },
});
