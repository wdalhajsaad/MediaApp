import React, { Component } from 'react';
import { View, Text,TouchableOpacity,FlatList,Image,Linking } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import Fonts from '../Styles/Fonts'
import Styles from "../Styles/Styles";
class WassRss extends Component {
      static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'الرئيسية-> واس   ',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    };
  }
 componentDidMount() {
 return fetch('https://www.spa.gov.sa/rss.xml')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    //alert(rss.items[1].title);
   // console.log(rss.items[1].title);
    this.setState({data:rss.items});
  }).catch(error=> {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
 }
 HandelClick=(url)=>{
//const c =url;
Linking.openURL(url)
//alert(JSON.stringify(url));

 }
  render() {
    return (
      <View style={{flex:1, padding:10,},Styles.statusBar}>
       
         <FlatList
              data={this.state.data}
              //ListEmptyComponent={this._listEmpty}
              renderItem={({ item,rowMap }) => (
                  
                 <TouchableOpacity
                      onPress={() =>  {
                          //const li ={item.link};
                          this.HandelClick(item.links[0].url)
                          //this.HandelClick(item)
                         // Linking.openURL(item.guid)
                          }}
                    >
              <View style={{flexDirection: 'row',}} >
              
              <View>
              <Image source={require("../assets/spalogo.png")} style={{width:100,height:100, borderRadius: 3,marginTop: 5,}} />
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

export default WassRss;
