import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Screens/Main';
import Test from './Screens/Test';
import Gallery from './Screens/Gallery'
import TestAccordian from './Screens/TestAccordian'
import TestNews from './Screens/TestNews'
import Services from './Screens/Services'
import Tecket from './Screens/Tecket'
import Chanals from './Screens/Chanals'
import * as Font from "expo-font";
//import  * from '../co'

export default class App extends Component {
  
  state = {
    loaded: false
  };
// create a helper function to load the font 
  _loadFontsAsync = async () => {
    await Font.loadAsync({
      // add as many fonts as you want here .... 
      Montserrat: require("./assets/fonts/Almarai-Regular.ttf")
    });
    this.setState({ loaded: true });
  };

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
  return (
    //<Services />
   // <Tecket />
  // <Chanals />
   <Main />
  //<Test />
  //<Gallery />
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
