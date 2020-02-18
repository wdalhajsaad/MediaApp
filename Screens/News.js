import React, { Component } from 'react';
import { View, Text,FlatList,Image ,TouchableOpacity} from 'react-native';
import * as API from '../API/API'
import Styles from "../Styles/Styles";
import Fonts from '../Styles/Fonts'
import {Header}  from 'react-navigation';
import {SwipeListView} from 'react-native-swipe-list-view'
class News extends Component {
    static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'الرئيسية-> الاخبار   ',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });
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
      <View style={{flex:1, padding:10,},Styles.statusBar}>
       
         <FlatList
              data={this.state.data}
              //ListEmptyComponent={this._listEmpty}
              renderItem={({ item,rowMap }) => (
                 <TouchableOpacity
                      onPress={() =>  this.props.navigation.navigate('NewsDetails',{Item:item})}
                    >
              <View style={{flexDirection: 'row',}} >
              
              <View>
              <Image source={{uri :"https://www.media.gov.sa/" + item.photo}} style={{width:100,height:100, borderRadius: 3,marginTop: 5,}} />
              </View>
              <View style={{flex:1,alignContent: 'center',justifyContent:'center'}}>
              <Text style={Fonts.NewsTitleList}>{item.title}</Text>
              </View>
              
                  
              </View>  
              </TouchableOpacity>
              )}
              
              
               />
      </View>
    );
  }
}

export default News;
