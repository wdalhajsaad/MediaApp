import React, { Component } from 'react';
import { View, Text,TouchableOpacity,FlatList,Image,Linking } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import Fonts from '../Styles/Fonts'
import Styles from "../Styles/Styles";
import Spinner from '../Components/Spinner';
class WassRss extends Component {
      static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'وكالة الانباء   ',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
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
 return fetch('https://www.spa.gov.sa/rss.xml')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    //alert(rss.items[1].title);
   // console.log(rss.items[1].title);
    this.setState({data:rss.items,Loading:false});
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
//const c =url;
Linking.openURL(url)
//alert(JSON.stringify(url));

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
              <View style={{flexDirection: 'row',}} >
              
              <View>
              <Image source={require("../assets/spalogo.png")} style={{width:100,height:100, borderRadius: 3,marginTop: 5,}} />
              </View>
              <View style={{alignContent: 'center',justifyContent:'center',width:250,}}>
              
              <Text  adjustsFontSizeToFit style={Fonts.NewsTitleList}>{item.title}</Text>
                 <Text>{item.pubDate}</Text>
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
