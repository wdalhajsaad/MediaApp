import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Screens/Main';
import Test from './Screens/Test';
import Gallery from './Screens/Gallery'
import TestAccordian from './Screens/TestAccordian'
import TestNews from './Screens/TestNews'
import Services from './Screens/Services'
import Tecket from './Screens/Tecket'
//import  * from '../co'

export default function App() {
  return (
    //<Services />
   // <Tecket />
   <Main />
  //<Test />
  //<Gallery />
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
