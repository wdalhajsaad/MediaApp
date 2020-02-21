/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
import * as API from '../API/API'
import Styles from "../Styles/Styles";
import FormsStyle from '../Styles/FormsStyle';
import Spinner from '../Components/Spinner';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
  Button,
  TouchableOpacity,

} from 'react-native';
import Modal from "react-native-modal";
//import all the components we will need
import FastImage from 'react-native-fast-image';
export default class Gallery extends Component {
   static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:' المعرض الرقمي',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontWeight:'normal' },
    headerTitleAlign: 'center'
  });
  constructor() {
    super();
    this.state = {
      dataSource: [],
      imageuri: '',
      ModalVisibleStatus: false,
      Loading:true
    };
  }
  componentDidMount() {
    //var that = this;
    //let items = Array.apply(null, Array(60)).map((v, i) => {
    //  return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
   // });
    API.GetGallery().then((res)=>{
       // alert(res);
    this.setState({
      //Setting the data source
      
      dataSource: res,
      Loading:false
    });
  })
  }
   RenderSpinner() {

    if (this.state.Loading) {
      return (
        <Spinner SizeSpinner='large' />
      );
    }
  }
   ShowModalFunction(visible, imageURL) {
    //handler to handle the click on image of Grid
    //and close button on modal
    //alert(visible);
   this.setState({
     ModalVisibleStatus: visible,
      imageuri: imageURL,
 
    });
  // alert('here we are !'+imageURL+visible);
  }
  render() {  
      
    return (
        
      <View style={styles.MainContainer,Styles.statusBarChanal}>
      {this.RenderSpinner()}
       <Modal isVisible={this.state.ModalVisibleStatus}>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.fullImageStyle}
              source={{ uri: this.state.imageuri }}
              //resizeMode={FastImage.resizeMode.contain}
            />
            <TouchableOpacity  onPress={() => {this.ShowModalFunction(false,''); }} style={{flexDirection:'center'},FormsStyle.buttonContainer1} >
            <Text  style={{flexDirection:'center',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf: 'center',},FormsStyle.buttonText} >
              اغلاق
            </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      
      
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
             
                <TouchableOpacity
                  key={item.id}
                  style={{ flex: 1 }}
                  onPress={() => {
                    this.ShowModalFunction(true, item.imageBig);
                  }}>
                   <Image style={styles.imageThumbnail} source={{ uri: item.imageBig }} />
                  </TouchableOpacity>
            </View>
          )}
          // onPress={() => {
               //     this.ShowModalFunction(true, item.imageBig);
               //   }}
          //Setting the number of column
           numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
    }
  }


const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
   containerStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    height:300,
    width:300,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,0.2)',
  },
  closeButtonStyle: {
    width: 40,
    height: 40,
  alignSelf: 'center',
    position: 'absolute',
  },
});
