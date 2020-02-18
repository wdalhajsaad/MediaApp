import React, { Component } from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';

import SideMenuStyle from '../Styles/SideMenuStyle'
import { Colors } from "../Styles/Colors";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";


class LinkCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     
        <Collapse>
            <CollapseHeader style={styles.row}>
                <Text style={styles.title}>عن وزارة الإعلام </Text>
            </CollapseHeader>
            <CollapseBody style={{backgroundColor:Colors.LIGHTGRAY,marginTop:5,flex:1,backgroundColor:'red',flexDirection:'column'}}>
            <View style={{flex:1,flexDirection:'column'}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'red'}}>
              <Text >   البيانات المفتوحة </Text>
            </TouchableOpacity>

             <TouchableOpacity style={{flex:1,backgroundColor:'red'}}>
              <Text >   البيانات الجديد </Text>
            </TouchableOpacity>
           
            </View>
            
             
           
            </CollapseBody>
          </Collapse>
       
     
    );
  }
}

export default LinkCollapse;

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

