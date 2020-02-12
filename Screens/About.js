
import React, {Component} from 'react';
import { StyleSheet, View,ScrollView} from 'react-native';
import { Colors } from '../Styles/Colors';
import AboutAccordian from '../Components/AboutAccordian'

export default class About extends Component {
   static navigationOptions = {
    headerStyle: { backgroundColor: "#006749"}
    
  };

  constructor(props) {
    super(props);
    this.state = {
       expanded : false,
     
     }
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        { this.renderAccordians() }
      </ScrollView>
    );
  }

  renderAccordians=()=> {
   return(

<AboutAccordian />
   )
}
}

const styles = StyleSheet.create({
  container: {
   //flex:1,

   paddingTop:100,
   backgroundColor:"green",
  // paddingBottom:100,
   
  }
});