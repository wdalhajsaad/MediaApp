import React, { Component } from 'react';
import { View, Text,FlatList,Image } from 'react-native';
import * as API from '../API/API'
import Fonts from '../Styles/Fonts'
import Spinner from '../Components/Spinner';
import Styles from "../Styles/Styles";
export default class Faaliat extends Component {
       static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:' فعاليات',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });
 constructor(props) {
    super(props);
    this.state = {
        data:{},
        Loading:true

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
    RenderSpinner() {

    if (this.state.Loading) {
      return (
        <Spinner SizeSpinner='large' />
      );
    }
  }

  render() {
    return (
      <View style={Styles.statusBar}>
       <Spinner SizeSpinner='large' />
        {this.RenderSpinner()}
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

 
