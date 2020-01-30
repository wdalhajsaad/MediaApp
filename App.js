import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Screens/Main';
import Test from './Screens/Test'

export default function App() {
  return (
  // <Main />
  <Test />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
