
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Colors } from '../Styles/Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          key:props.id,
          expanded : false,
        }
    }
  
  render() {
    return (
       <View style={{paddingTop: 20,paddingLeft:10,paddingRight:10,}} key={this.props.id}>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                
                <Icon name={this.state.expanded ? 'keyboard-arrow-down' : 'keyboard-arrow-left'} size={30} color={Colors.WHITE} />
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
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
        color: Colors.WHITE,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
         borderRadius: 10,
       // backgroundColor: Colors.CGRAY,
        backgroundColor: '#006749',
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    child:{
        backgroundColor: Colors.LIGHTGRAY,
        padding:16,
    }
    
});