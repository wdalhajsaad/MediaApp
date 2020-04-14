import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,Image,Dimensions,ScrollView,TouchableOpacity,Linking} from 'react-native';
import Styles from "../Styles/Styles";
import { FlatGrid } from 'react-native-super-grid';
import Constants from 'expo-constants';
import WebView from "react-native-webview"
const deviceWidth = Dimensions.get('window').width;
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Regulations extends Component {
   static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'اللوائح والانظمة',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
       const items = [
        
             { name: ' السياسة الاعلامية في المملكة العربية السعودية', url:'https://www.media.gov.sa/media/1/media/9775973977.pdf'}, 
             { name: 'اللائحة التنفيذية لنظام المؤسسات الصحفية',url:'https://www.media.gov.sa/media/1/media/6239412492.pdf'},
             { name: ' نظام المؤسسات الصحفية', url:'https://www.media.gov.sa/media/1/media/6749580683.pdf'},
             { name: 'نظام المطبوعات والنشر',url:'https://www.media.gov.sa/media/1/media/1546979825.pdf' },
             { name: ' اللائحة التنفيذية لنظام المطبوعات والنشر ', url:'https://www.media.gov.sa/media/1/media/3047892952.pdf'},
              { name: 'ضوابط مزاولة الانشطة الإعلامية', url:'https://www.media.gov.sa/page/91'},
       ]
    return (
    <ScrollView style={Styles.statusBarChanal}>
       
      
       <FlatGrid
        itemDimension={300}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: "#fff" }]}>
          <TouchableOpacity
          onPress={() => Linking.openURL(item.url)}
          >
          <View style={{alignItems:'center'}}>
           <FontAwesome size={ 100 } name='book'   style={{color:'#006749'}}/>
          </View>
           
          
          <View style={{flex:1,alignItems:'center',flexWrap: 'wrap',}}>
            <Text style={{flexWrap: 'wrap'},styles.itemName}>{item.name}</Text>
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
    flex:1,
    justifyContent: 'flex-end',
    borderRadius: 5,
    alignItems:'center',
    //padding: 10,
    height: 150,
    width:'100%'
  },
  itemName: {
    fontSize: 16,
    color: '#006749',
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
export default Regulations;
