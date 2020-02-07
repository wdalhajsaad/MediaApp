import React, { Component } from 'react';
import { View, Text,FlatList,Image ,TouchableOpacity} from 'react-native';
import * as API from '../API/API'
import {SwipeListView} from 'react-native-swipe-list-view'
class News extends Component {
   static navigationOptions = {
    headerStyle: { backgroundColor: "#006749"}
    
  };
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    };
  }
   _listEmpty = () => {

    return (
      <View style={{ justifyContent:'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 15, fontWeight: 'bold', borderColor: 'black', color: '#4a90e2', textAlign: 'center' }}>لا يوجد بيانات</Text>
      </View>)
  }
  componentDidMount() {
  API.GetNews().then((res)=>{
    //alert(res)
 
     this.setState({data:res});
      // this.state.NewsList.map((u,i)=>{
   // alert(u.title)});
  })

  }

  render() {
    return (
      <View style={{flex:1, padding:10,}}>
        <Text> الاخبار </Text>
         <FlatList
              data={this.state.data}
              //ListEmptyComponent={this._listEmpty}
              renderItem={({ item,rowMap }) => (
              <View style={{flexDirection: 'row',}} >
              <View>
              <Image source={{uri :"https://www.media.gov.sa/" + item.photo}} style={{width:100,height:100}} />
              </View>
              <View style={{flex:1,}}>
              <Text style={{ textAlign: 'right',fontSize: 16, }}>{item.title}</Text>
               <Text style={{ textAlign: 'right' }}>{item.content.substr(0,100)+'....'}</Text>
              </View>
              </View>
              )}
              
              
               />
      </View>
    );
  }
}

export default News;
