import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image} from "react-native";
import { Colors } from '../Styles/Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
export default class AboutMinister extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {

    return (
       <View  >
            <TouchableOpacity style={FormsStyle.AccordionHeader} onPress={()=>this.toggleExpand()}>
             <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.GRAY} style={{alignSelf:'flex-end'}} />
                <Text style={FormsStyle.buttonText }> وزار الاعلام</Text>
               
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
               
                  <Image
                  source={{
                   uri: "https://www.media.gov.sa/theme/moci_v3/img/moci1.jpg?v14"
                   }}
              style={{ width: 300, height: 150,alignSelf: 'center', }}
             // resizeMode='stretch'
            />
             <Text style={{flexWrap: 'wrap',padding:10, fontFamily:'Montserrat',}} >
              صدر الأمر الملكي الكريم لخادم الحرمين الشريفين الملك سلمان
               بن عبدالعزيز بتعيين معالي الأستاذ تركي بن عبدالله الشبانة وزيراً للإعلام.
            </Text>
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
         //alignSelf:'baseline',
       // backgroundColor: Colors.LIGHTGRAY
        paddingLeft:25,
       paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    parentHr:{
        height:5,
        color: Colors.WHITE,
        width:'100%'
    },
    child:{
      //alignSelf:'baseline',
      justifyContent:'center',
      //paddingBottom: 50,
      marginHorizontal:10,
       // marginLeft:10,
     
        backgroundColor: Colors.LIGHTGRAY,
        //padding:16,
    }
    
});
