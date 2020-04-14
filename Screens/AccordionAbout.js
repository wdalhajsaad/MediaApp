import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import Accordian from '../Components/Accordian'
import AboutMinister from '../Components/AboutMinister'
import MinistryWork from '../Components/MinistryWork'
import MinistryHestory from '../Components/MinistryHestory' 
import { Colors } from '../Styles/Colors';
import Styles from "../Styles/Styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class AccordionAbout extends Component {
    static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:' عن وزارة الإعلام',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });
  constructor(props) {
    super(props);
     this.state = {
   
     }
  } 

 
  render() {
    return (
      <View style={{ height:hp('100%'),},Styles.statusBar}>
      <ScrollView style={styles.container}>
             <Accordian/>
             <AboutMinister/>
             <MinistryWork />
             <MinistryHestory />
      </ScrollView>   
      </View>
       );
  }
}
const styles = StyleSheet.create({
  container: {
   flex:1,
 
   paddingTop:30,
   paddingBottom: 10,
  // backgroundColor:Colors.PRIMARY,
   
  }
});
export default AccordionAbout;
