import React, { Component } from "react";
import { View, Text,StyleSheet } from "react-native";
import Styles from "../Styles/Styles";
class Services extends Component {
     static navigationOptions = {
    headerStyle: { backgroundColor: "#006749"}
    
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{justifyContent:'center',flex:1,alignContent: 'center', }}>
        <View>
          <Text style={Styles.BaseText}>Service Page  </Text>
          <Text style={(Styles.BaseText, Styles.TextTite)}>Service Page </Text>
        </View>
      </View>
    );
  }
}

export default Services;
