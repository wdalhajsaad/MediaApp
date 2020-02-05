/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
import * as API from '../API/API'
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
//import all the components we will need
import FastImage from 'react-native-fast-image';
export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      imageuri: '',
      ModalVisibleStatus: false,
    };
  }
  componentDidMount() {
    //var that = this;
    //let items = Array.apply(null, Array(60)).map((v, i) => {
    //  return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
   // });
    API.GetGallery().then((res)=>{
        alert(res);
    this.setState({
      //Setting the data source
      
      dataSource: res,
    });
  })
  }
   ShowModalFunction(visible, imageURL) {
    //handler to handle the click on image of Grid
    //and close button on modal
   this.setState({
     ModalVisibleStatus: visible,
      imageuri: imageURL,
    });
  // alert('here we are !'+imageURL+visible);
  }
  render() {
       if (this.state.ModalVisibleStatus) {
      return (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={() => {
            this.ShowModalFunction(!this.state.ModalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <Image
              style={styles.fullImageStyle}
              source={{ uri: this.state.imageuri }}
              //resizeMode={FastImage.resizeMode.contain}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                this.ShowModalFunction(!this.state.ModalVisibleStatus, '');
              }}>
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{ width: 35, height: 35, marginTop: 16 }}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      );
    } else {
    return (
        
      <View style={styles.MainContainer}>
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
});
