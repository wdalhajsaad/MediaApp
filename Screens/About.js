import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";
import { Colors } from "../Styles/Colors";
import AboutAccordian from "../Components/AboutAccordian";
import Icon from "react-native-vector-icons/MaterialIcons";
import Styles from "../Styles/Styles";
import AboutMedia from "../AboutParts/AboutMedia"


export default class About extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: "#006749" }
  };

  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <View >
      
        <AboutMedia />
      
      </View>
        
        
     
    );
  }

  renderAccordians = () => {
    return <AboutAccordian />;
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    //fontWeight: "bold",
    flex:1,
    color: Colors.WHITE,
    fontFamily:'Montserrat',
   
   
   
  },
  row: {
    flexDirection: "row",
   // justifyContent: "space-between",
     //justifyContent:'flex-end',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    borderRadius: 10,
    // backgroundColor: Colors.CGRAY,
    backgroundColor: "#006749"
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: "100%"
    // height:'100%'
  },
  child: {
    backgroundColor: Colors.LIGHTGRAY,
    // padding: 16,
    paddingBottom: 0
    //flexDirection:'column',
    //alignContent:'stretch'
  }
});
