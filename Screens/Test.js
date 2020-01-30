import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Styles from "../Styles/Styles";

class Test extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  renderMenu() {
    return (
      <View style={{ backgroundColor: "blue", height: "30%" }}>
        <View
          style={{
            backgroundColor: "black",
            height: "50%",
            flexDirection: "row",
             justifyContent: 'space-between',
          }}
        >
          <View
            style={{ backgroundColor: "green", width: "29%", height: "100%",  borderRadius:10, }}>
          </View>
          <View
            style={{
              backgroundColor: "yellow",
              width: "39%",
              height: "100%",
              borderRadius:10,
            }}
          ></View>
          <View
            style={{ backgroundColor: "green", width: "29%", height: "100%",borderRadius:10, }}
          ></View>
        </View>
        <View  >
        
        <View>
      </View>
    );
  }

  render() {
    return (
      <View style={Styles.Maincontainer}>
        <View style={{ backgroundColor: "red", height: "70%" }}>
          <Text> here is tetst</Text>
        </View>
        {this.renderMenu()}
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
