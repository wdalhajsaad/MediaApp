import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,Image,Dimensions,ScrollView,TouchableOpacity,Alert  } from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import { Colors } from '../Styles/Colors';
import MenuStyle from "../Styles/MenuStyle";
import * as rssParser from 'react-native-rss-parser';
import Styles from "../Styles/Styles";
import { FlatGrid } from 'react-native-super-grid';
import Constants from 'expo-constants';
import WebView from "react-native-webview"
import * as API from '../API/API'
const deviceWidth = Dimensions.get('window').width;
import Modal from "react-native-modal";
   var initial=[
       {link:'https://www.youtube.com/feeds/videos.xml?channel_id=UC2mWeEHv9IY6i74okFMkGPw',id:1},
       {link:'https://www.youtube.com/feeds/videos.xml?channel_id=UC2mWeEHv9IY6i74okFMkGPw',id:1},
       {link:'https://www.youtube.com/feeds/videos.xml?channel_id=UCfG0mfIwxrZn1MjsA994oAg',id:2},
       {link:'https://www.youtube.com/feeds/videos.xml?channel_id=UCos52azQNBgW63_9uDJoPDA',id:3},
       {link:'https://www.youtube.com/feeds/videos.xml?channel_id=UCV01ajGl6nt09h40iDoHDNg',id:4},
       {link:'https://www.youtube.com/feeds/videos.xml?channel_id=UCqmGb1txpWAdX2fwF1_IXMw',id:5}
     ]
class ChanalList extends Component {
  
   static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'البث المباشر',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  });
  constructor(props) {
    super(props);
    this.state = {
      //isVisible:false,
      churl:'',
      data:[],
      ListChanales:[
             { name: 'القناة الاولى', code: '#fff', pic:require('../ChanalsAssest/channel-1.jpg'),url:'NZL0nawCUco'}, 
             { name: 'الرياضية', code: '#fff',pic:require('../ChanalsAssest/channel-2.jpg'),url:'No' },
             { name: 'SBC', code: '#fff' ,pic:require('../ChanalsAssest/channel-3.jpg'),url:'https://www.youtube.com/channel/UCfG0mfIwxrZn1MjsA994oAg/videos'},
             { name: 'القران الكريم', code: '#fff' ,pic:require('../ChanalsAssest/channel-5.jpg'),url:'No'},
             { name: 'الإخبارية', code: '#fff',pic:require('../ChanalsAssest/channel-6.jpg'),url:'No' },
             { name: ' فعاليات', code: '#fff',pic:require('../ChanalsAssest/channel-7.jpg') ,url:'No'},
        
      ],
      //imageuri: '',
      ModalVisibleStatus: false,
    };
  }

   componentDidMount() {

  
     
     initial.forEach(element => {
        this.GetchanallsData(element.link,element.id);
       // alert(element.id + ' '+ element.name)
     });
  

  }

GetchanallsData(Link,Id){

/**
const url='https://www.youtube.com/feeds/videos.xml?channel_id=UC2mWeEHv9IY6i74okFMkGPw';
  const url1='https://www.youtube.com/feeds/videos.xml?channel_id=UCos52azQNBgW63_9uDJoPDA';
  //const url 2 ='https://www.youtube.com/feeds/videos.xml?channel_id=UCLo2xigvxv9ksxp78AyCBTw'
 const url2='https://www.youtube.com/feeds/videos.xml?channel_id=UCfG0mfIwxrZn1MjsA994oAg';
 
 */
  
   fetch(Link)
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
   
    this.setState({
      data:rss.items
    });
    //var res =rss.items;
    //alert(res[0].title)
     // alert("good")
  for (let i = 0; i < this.state.data.length; i++) {
   //alert(this.state.data[i].title);
  if(this.state.data[i].title.includes('بث مباشر')|| this.state.data[i].title.includes('Live Stream'))
  {
    var re =this.state.data[i].id.split(":");
    //alert(re[2] +'  '+i);
    //Listch[0][2]='url:'+re[2]
    this.changeDesc( this.state.ListChanales[Id].name, re[2] ) 
    break;
    
  }
  }
  }).catch(error=> {
       // this.setState({ error, loading: false });
        console.log(error);
        throw error;
      })
   console.log(this.state.ListChanales);
  }
  HandelClick=(visible,url)=>{
  //  alert(url);
    //this.setState({isVisible:true});
    if(url==='No'){
        Alert.alert(" ","لا يوجد بث مباشر الان !! حاول في وقت اخر ");
    }
    else{
       this.setState({
     ModalVisibleStatus: visible,
      churl: url,
 
    });
    }
   
  }
changeDesc( value, uri ) {
   //alert(value);
   for (var i in this.state.ListChanales) {
     if (this.state.ListChanales[i].name == value) {
      console.log(this.state.ListChanales[i].name);
        this.state.ListChanales[i].url = uri;
         //alert(this.state.ListChanales[i].url);
        break; //Stop this loop, we found it!
     }
   }

}


  render() {
      const items = this.state.ListChanales;
const radois=[
      { name: 'إذاعة الرياض', code: '#fff',pic:require('../ChanalsAssest/radio-1.jpg'),url:'http://live.badrshfaqah.sa:8234/stream?type=http&nocache=303005' },
      { name: 'إذاعة جدة ', code: '#fff' ,pic:require('../ChanalsAssest/radio-2.jpg'),url:'http://live.badrshfaqah.sa:8509/stream?type=http&nocache=303150'},
      { name: 'إذاعة القران الكريم', code: '#fff',pic:require('../ChanalsAssest/radio-3.jpg'),url:'http://live2.badrshfaqah.sa:8027/stream?type=http&nocache=726569' }, 
      { name: 'إذاعة السعودية', code: '#fff' ,pic:require('../ChanalsAssest/radio-4.jpg'),url:'http://live2.badrshfaqah.sa:8021/stream?type=http&nocache=725433'},
      { name: 'إذاعة نداء الاسلام  ', code: '#fff' ,pic:require('../ChanalsAssest/radio-5.jpg'),url:'http://live.badrshfaqah.sa:8348/stream?type=http&nocache=303268'},
     ]
 
 
        
    
         return (
    
      <ScrollView style={Styles.statusBarChanal}>
        <Modal 
        
        isVisible={this.state.ModalVisibleStatus}
        >
          <View style={{ flex: 1,alignContent:'center' }}>
            <WebView
              javaScriptEnabled={true}
              style={{borderWidth:1, height:100, width:"100%"}}
              source={{
                uri: "https://lcsys-dev.media.gov.sa/test-v?video_id="+this.state.churl
              }}
            />
            <TouchableOpacity  onPress={() => { this.HandelClick(!this.state.ModalVisibleStatus, '');}} style={{backgroundColor:'red'},FormsStyle.buttonContainer1} >
            <Text  style={FormsStyle.buttonText} >
              اغلاق
            </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      <View><Text style={{marginRight:10, fontFamily:'FontBold', textAlign: 'right'}}> قنوات التلفزيون</Text></View>
       <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity
          onPress={() => this.HandelClick(true,item.url)}
          >
          <Image
          source={item.pic}
         style={{width:165,height:120,}}
         resizeMode='contain'
          />
          <View style={{flex:1,backgroundColor:'#006749',alignItems:'center'}}>
            <Text style={styles.itemName}>{item.name}</Text>
           </View>
            </TouchableOpacity>
          </View>
        )}
      />


 <View><Text style={{marginRight:10,fontFamily:'FontBold',textAlign: 'right'}}>القنوات الاذاعية</Text></View>
      <FlatGrid
        itemDimension={130}
        items={radois}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity
           onPress={() => this.HandelClick(true,item.url)}
          >
          <Image
          source={item.pic}
         style={{width:165,height:120,}}
         resizeMode='contain'
          />
          <View style={{flex:1,backgroundColor:'#006749',alignItems:'center'}}>
            <Text style={styles.itemName}>{item.name}</Text>
           </View>
            </TouchableOpacity>
          </View>
        )}
      />

     
      </ScrollView>
  
    );
      }
   
  
}



const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    alignItems:'center',
    //padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
     fontFamily:'Montserrat'
    //fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
   containerStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
  },

  modelStyle: {
    //flex: 1,
    height:'50%',
    width:'50%',
    alignSelf: 'center',
    paddingTop: '20%',
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 40,
    height: 40,
    top: 9,
    right: 9,
    position: 'absolute',
  },
});
export default ChanalList;
