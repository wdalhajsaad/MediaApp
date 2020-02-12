import React, { Component } from 'react';
import { View, Text,FlatList,Image } from 'react-native';
import * as API from '../API/API'
import Fonts from '../Styles/Fonts'
export default class Faaliat extends Component {
     static navigationOptions = {
    headerStyle: { backgroundColor: "#006749"}
    
  };
 constructor(props) {
    super(props);
    this.state = {
        data:{}
    };
  }
   componentDidMount() {
  API.GetFaaliat().then((res)=>{
    //alert(JSON.stringify(res.Data))
 
     this.setState({data:res.Data});
     // this.state.data.map((u,i)=>{
   // alert(u.Title)});
  })

  }

  render() {
    return (
      <View>
        <Text> الاخبار </Text>
         <FlatList
              data={this.state.data}
              //ListEmptyComponent={this._listEmpty}
              renderItem={({ item,rowMap }) => (
              <View style={{flexDirection: 'row',}} >
              <View>
              <Image source={{uri : item.Logo}} style={{width:100,height:100, borderRadius: 3,marginTop: 5,}} />
              </View>
              <View style={{flex:1,alignContent: 'center',justifyContent:'center'}}>
              <Text style={Fonts.NewsTitleList}>{item.Title}</Text>
              </View>
              </View>
              )}
              
              
               />
      </View>
    );
  }
}

 
