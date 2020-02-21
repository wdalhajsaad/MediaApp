import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,Image,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import { Colors } from '../Styles/Colors';
import MenuStyle from "../Styles/MenuStyle";
import Styles from "../Styles/Styles";
import { FlatGrid } from 'react-native-super-grid';
import Constants from 'expo-constants';
import WebView from "react-native-webview"
const deviceWidth = Dimensions.get('window').width;
import Modal from "react-native-modal";

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
      //imageuri: '',
      ModalVisibleStatus: false,
    };
  }
  HandelClick=(visible,url)=>{
  //  alert(url);
    //this.setState({isVisible:true});
    this.setState({
     ModalVisibleStatus: visible,
      churl: url,
 
    });
  }

  render() {
      const items = [
        
             { name: 'القناة الاولى', code: '#fff', pic:require('../ChanalsAssest/channel-1.jpg'),url:'https://www.youtube.com/embed/GPhLOf0Nm2s'}, 
             { name: 'الرياضية', code: '#fff',pic:require('../ChanalsAssest/channel-2.jpg'),url:'https://www.youtube.com/embed/bsK4QmZafpA' },
             { name: 'SBC', code: '#fff' ,pic:require('../ChanalsAssest/channel-3.jpg'),url:'https://www.youtube.com/embed/A1YYkWPAwY0'},
             { name: 'القران الكريم', code: '#fff' ,pic:require('../ChanalsAssest/channel-5.jpg'),url:'https://www.youtube.com/embed/NbMWqsjUS_c'},
             { name: 'الإخبارية', code: '#fff',pic:require('../ChanalsAssest/channel-6.jpg'),url:'https://www.youtube.com/embed/SzJXaV2Rjog' },
             { name: ' فعاليات', code: '#fff',pic:require('../ChanalsAssest/channel-7.jpg') ,url:'https://www.youtube.com/embed/9PajE4zKx1o'},
        
    ];
const radois=[
     { name: 'إذاعة الرياض', code: '#fff',pic:require('../ChanalsAssest/radio-1.jpg') },
       { name: 'إذاعة جدة ', code: '#fff' ,pic:require('../ChanalsAssest/radio-2.jpg')},
      { name: 'إذاعة القران الكريم', code: '#fff',pic:require('../ChanalsAssest/radio-3.jpg') }, 
      { name: 'إذاعة السعودية', code: '#fff' ,pic:require('../ChanalsAssest/radio-4.jpg')},
       { name: 'إذاعة نداء الاسلام  ', code: '#fff' ,pic:require('../ChanalsAssest/radio-5.jpg')},
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
                uri: this.state.churl
              }}
            />
            <TouchableOpacity  onPress={() => { this.HandelClick(!this.state.ModalVisibleStatus, '');}} style={{backgroundColor:'red'},FormsStyle.buttonContainer1} >
            <Text  style={FormsStyle.buttonText} >
              اغلاق
            </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      
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

      <View><Text style={{fontFamily:'Almarai'}}>القنوات الاذاعية</Text></View>
      <FlatGrid
        itemDimension={130}
        items={radois}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity>
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
    marginTop: 20,
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
