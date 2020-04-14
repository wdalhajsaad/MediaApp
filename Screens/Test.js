import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../Styles/Styles";
import MenuStyle from "../Styles/MenuStyle";
import { WebView } from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//import { Card,} from 'react-native-elements'
import Swiper from "react-native-swiper";
import * as API from '../API/API'
//var {GetNews} = require('')
//import SvgUri from 'react-native-svg-uri';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {

        NewsList: [],
    };
  }
  componentDidMount() {
  API.GetNews().then((res)=>{
 
     this.setState({NewsList:res});
      // this.state.NewsList.map((u,i)=>{
   // alert(u.title)});
  })
   
   

   
  }

  
  render() {
    return (
     
     <View style={{flex: 1}}>
    <WebView
        source={{ html: "<p style='text-align: justify;  font-size: 50px;'>Justified text here</p>" }}
    />
</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Test;
