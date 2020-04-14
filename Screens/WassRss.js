import React, { Component } from 'react';
import { View, Text,TouchableOpacity,FlatList,Image,Linking } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import Fonts from '../Styles/Fonts'
import Styles from "../Styles/Styles";
import Spinner from '../Components/Spinner';
import { WebView } from 'react-native-webview';
import * as Help from '../API/Help'
class WassRss extends Component {
      static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    //title:'وكالة الانباء   ',
     headerTitle: (
         <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
      <Image style={{ width: 55, height: 40 }} source={require("../assets/waslogo.png")}/>
      </View>
  ),
    headerTitleStyle : { alignSelf: 'center',justifyContent:'center' },
    headerTitleAlign: 'center'
  
  });
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        Loading:true
    };
  }
   
 componentDidMount() {
  // const date ='Mon, 24 Feb 2020 10:12:19 +0300';
   

 return fetch('https://www.spa.gov.sa/rss.xml')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    //alert(rss.items[1].title);
   // console.log(rss.items[1].title)
  //alert(JSON.stringify(rss.items[0].published))
    this.setState({
      data:rss.items,
      Loading:false
      });

  }).catch(error=> {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
      this.state.data.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});
 }
  RenderSpinner() {

    if (this.state.Loading) {
      return (
        <Spinner SizeSpinner='large' />
      );
    }
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
 HandelClick=(url)=>{
//const c =urlظظalert(date[0]);
Linking.openURL(url)
//alert(JSON.stringify(url));

 }
 GetDate=(date)=>{
  // alert(date.substring(4,6));
   //  alert(date.substring(7,9));
   
   return date.substring(4,16);
 }
  render() {
    return (
      
      <View style={{flex:1, padding:10,},Styles.statusBar}>
      {this.RenderSpinner()}
      
         <FlatList
              data={this.state.data}
               ItemSeparatorComponent = { this.FlatListItemSeparator }
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
              <View style={{flexDirection: 'row',justifyContent:'flex-end'}} >
              
             {/** <View>
              <Image source={require("../assets/spalogo.png")} style={{width:100,height:100, borderRadius: 3,marginTop: 5,}} />
              </View> */

             }
              <View style={{paddingLeft:5,paddingRight:5}}>
                 <Text  adjustsFontSizeToFit style={Fonts.NewsTitleList}>{item.title}</Text>
                 <View style={{flexDirection:'row',flexWrap: 'wrap',width:'100%'}}>
                 <View style={{width:'50%'}}>
                 <Text style={{alignSelf: 'flex-start', textAlign:"left", color:'#C7C7C7',paddingLeft: 5,}}>  {Help.GetDateString(item.published)[1]}</Text>
                 </View>
                 <View style={{width:'50%'}}>
                  <Text style={{ alignSelf: 'flex-end',textAlign:"right", color:'#C7C7C7',paddingRight:5,}}>  {Help.GetDateString(item.published)[0]}</Text>
                 </View >
  
                  
                   
                  </View>
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
