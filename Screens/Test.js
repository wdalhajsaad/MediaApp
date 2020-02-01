import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../Styles/Styles";
import MenuStyle from "../Styles/MenuStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
//import { Card,} from 'react-native-elements'
import Swiper from "react-native-swiper";
import * as API from '../API/API'
//var {GetNews} = require('')
//import SvgUri from 'react-native-svg-uri';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {

        NewsList: [],
    };
  }
  componentDidMount() {
  API.GetNews().then((res)=>{
 
     this.setState({NewsList:res});
      // this.state.NewsList.map((u,i)=>{
   // alert(u.title)});
  })
   
   

   
  }

  renderMenu() {
    return (
      <View
        style={MenuStyle.container}
      >
        <Swiper showsButtons={false}>
          <View style={MenuStyle.swipperMainView}>
            <View  style={MenuStyle.SwpperRow} >
              <View style={MenuStyle.MenuImage}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/services.png")}
                />
                <Text>الخدمات الالكترونية</Text>
              </View>
              <View style={MenuStyle.MenuImage}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/followup.png")}
                />
                <Text> متابعة الطلب</Text>
              </View>
            </View>
            <View style={MenuStyle.SwpperRow}>
              <View
                style={MenuStyle.MenuImage}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/info.png")}
                />
                <Text> الدعم الفني</Text>
              </View>
              <View style={MenuStyle.MenuImage}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/play.png")}
                />
                <Text> البث المباشر</Text>
              </View>
              <View style={MenuStyle.MenuImage}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/news.png")}
                />
                <Text> الاخبار</Text>
              </View>
            </View>
         
          </View>
         
          <View style={MenuStyle.swipperMainView}>
            <Text>Hello Swiper</Text>
          </View>
        </Swiper>
      </View>
    );
  }
  renderPage(index){
    return (<Text>{index.title}</Text>)
}
  renderNews(){
     const swiperItems = this.state.NewsList.map(item => {
            return(
              <View style={{flex:1,backgroundColor:'white'}}>
                  
                     <Image 
                      source={{uri :"https://www.media.gov.sa/"+item.photo}}
                      style={{width: '100%', height: '100%'}}
                    />
                     <View style={{position: 'absolute', top:50, left: 0, right: 0, bottom:50, justifyContent: 'center', alignItems: 'center'}}>
                   <Text>{item.title}</Text>
                   </View>
                   </View>
            )
        })

    return(
      
     <View style={{ backgroundColor: "red", height: hp("70%") }}>
     
      <Swiper
       key={this.state.NewsList.length}
       showsButtons={false}
       >
    {swiperItems}
    

     
      </Swiper>
         
        </View>
    )
  }
  render() {
    return (
      <View style={Styles.Maincontainer}>
        {this.renderNews()}
        {this.renderMenu()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Test;
