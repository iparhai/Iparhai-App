import './src/Ignore_Warnings/ignoreWarnings';
import React from 'react';
import NavigationProvider from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

store.subscribe(() => console.log(store.getState()))

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationProvider />
      </SafeAreaProvider>
    </Provider>
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
