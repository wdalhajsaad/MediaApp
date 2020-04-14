
import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,Image,Dimensions,ScrollView,TouchableOpacity,Linking } from 'react-native';
import Styles from "../Styles/Styles";
import { FlatGrid } from 'react-native-super-grid';
class Social extends Component {
     static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'  تواصل معنا ',
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
        
             { name: 'يوتيوب', code: '#fff', pic:require('../Social/youtube.png'),url:'https://www.youtube.com/channel/UCriBeG1oMYlyJOrUsIy9rdg'}, 
             { name: 'تويتر ', code: '#fff',pic:require('../Social/facebook.png'),url:'https://www.facebook.com/moci.ksa/' },
             { name: 'فيسبوك', code: '#fff' ,pic:require('../Social/twitter.png'),url:'https://twitter.com/media_ksa'},
             { name: ' انستقرام', code: '#fff' ,pic:require('../Social/instagram-sketched.png'),url:'https://www.instagram.com/media_ksa/'},
            
    ];
    return (
      <View style={Styles.statusBarChanal}>
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
          onPress={() =>  Linking.openURL(item.url)}
          >
          <Image
          source={item.pic}
         style={{width:165,height:100,marginTop:15,marginBottom: 5,}}
         resizeMode='contain'
          />
          <View style={{flex:1,backgroundColor:'#006749',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.itemName}>{item.name}</Text>
           </View>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    marginTop:15,
    justifyContent: 'flex-end',
    borderRadius: 5,
    alignItems:'center',
    //padding: 10,
    height: 170,
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
export default Social;
