import React, { Component } from 'react';
import { View, Text,FlatList,Image ,TouchableOpacity} from 'react-native';
import * as API from '../API/API'
import Styles from "../Styles/Styles";
import Fonts from '../Styles/Fonts'
import {Header}  from 'react-navigation';
import Spinner from '../Components/Spinner';
import {SwipeListView} from 'react-native-swipe-list-view'
class News extends Component {
    static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'الاخبار',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        Loading: true,
    };
  }
   _listEmpty = () => {

    return (
      <View style={{ justifyContent:'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 15, fontWeight: 'bold', borderColor: 'black', color: '#4a90e2', textAlign: 'center' }}>لا يوجد بيانات</Text>
      </View>)
  }
  FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#C7C7C7",
      }}
    />
  );
}
  componentDidMount() {
  API.GetNews().then((res)=>{
    //alert(res)
 
     this.setState({data:res, Loading:false,});
      // this.state.NewsList.map((u,i)=>{
   // alert(u.title)});
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
      <View style={{flex:1, marginLeft:15,marginRight: 15,},Styles.statusBar}>
      {this.RenderSpinner()}
          
         <FlatList
              data={this.state.data}
               ItemSeparatorComponent = { this.FlatListItemSeparator }
              //ListEmptyComponent={this._listEmpty}
              renderItem={({ item,rowMap }) => (
                 <TouchableOpacity style={{marginRight: 10,marginLeft: 10,}}
                      onPress={() =>  this.props.navigation.navigate('NewsDetails',{Item:item})}
                    >
              <View style={{flexDirection: 'row',}} >
              
              <View>
              <Image source={{uri :"https://www.media.gov.sa/" + item.photo}} style={{width:100,height:100, borderRadius: 5,marginTop: 5,marginBottom:5,paddingBottom: 5,}} />
              </View>
              <View style={{flex:1,alignContent: 'center',justifyContent:'center'}}>
              <Text style={{flexShrink: 1 },Fonts.NewsTitleList}>{item.title}</Text>
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
