import React, { Component } from 'react';
import { StyleSheet, Text, View,I18nManager } from 'react-native';
//import {Localization} from 'expo';
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
import * as Localization from 'expo-localization';
import Main from './Screens/Main';
import Test from './Screens/Test';
import Social  from './Screens/Social'
import Gallery from './Screens/Gallery'
import TestAccordian from './Screens/TestAccordian'
import TestNews from './Screens/TestNews'
import Services from './Screens/Services'
import Tecket from './Screens/Tecket'
import Chanals from './Screens/Chanals'
import * as Font from "expo-font";
import About from './Screens/About'
import ChanalList from './Screens/ChanalList'
import WassRss from './Screens/WassRss'
import Tweet from './Screens/Tweet'
import LinkCollapse from './AboutParts/LinkCollapse'
import TestCollapse from './Testing/TestCollapse'
import TryShare from './Testing/TryShare'
//import  * from '../co'

export default class App extends Component {
  
  state = {
    loaded: false
  };
// create a helper function to load the font 
  _loadFontsAsync = async () => {
    await Font.loadAsync({
      // add as many fonts as you want here .... 
      Montserrat: require("./assets/fonts/Almarai-Regular.ttf"),
      Almarai: require("./assets/fonts/Almarai-Light.ttf"),
      FontBold: require("./assets/fonts/Almarai-Bold.ttf")
    });
    this.setState({ loaded: true });
  };

  componentDidMount() {
    this._loadFontsAsync();
    //var lang=Localization.isRTL;
    //alert(lang)
  }
  render() {
    if(this.state.loaded==true){
      return (
    //<Services />
   //<Social />
   //<Chanals />
  // <ChanalList />
   //<AccordionTest />
   //<AccordionAbout />
   //<WassRss />
   //<LinkCollapse />
   <Main />
  //<Test />
  //<Gallery />
  );
  }
  else{
     return (

       <View><Text>No font</Text>
       </View>
     )

  }

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
