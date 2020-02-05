import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity, } from "react-native";
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

class Home extends Component {
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
              <View style={MenuStyle.MenuImage}>
              <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('Services')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/services.png")}
                />
                <Text>الخدمات الالكترونية</Text>
                </TouchableOpacity>
              </View>
            
              <View style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('News')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/followup.png")}
                />
                <Text> متابعة الطلب</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={MenuStyle.SwpperRow}>
              <View
                style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('News')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/info.png")}
                />
                <Text> الدعم الفني</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('News')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/play.png")}
                />
                <Text> البث المباشر</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage}>
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('News')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/news.png")}
                />
                <Text> الاخبار</Text>
                </TouchableOpacity>
              </View>
            </View>
         
          </View>
         
          <View style={MenuStyle.swipperMainView}>
            <View  style={MenuStyle.SwpperRow} >
              <View style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('News')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/chat.png")}
                />
                <Text> المحادثات الفورية</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage} >
               <TouchableOpacity style={{alignItems:'center'}}
               onPress={() => this.props.navigation.navigate('News')}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/spalogo.png")}
                />
                <Text>  واس</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={MenuStyle.SwpperRow}>
              <View style={MenuStyle.MenuImage}>
               <TouchableOpacity style={{alignItems:'center'}}
                onPress={() => this.props.navigation.navigate('News')}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/twitter.png")}
                />
                <Text>  التغريدات</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage}>
               <TouchableOpacity style={{alignItems:'center'}}
                  onPress={() => this.props.navigation.navigate('News')}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/faaliat.png")}
                />
                <Text>  فعاليات</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage}>
               <TouchableOpacity style={{alignItems:'center'}}
               onPress={() => this.props.navigation.navigate('Gallery')}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/gallery.png")}
                />
                <Text> المعرض الرقمي</Text>
                </TouchableOpacity>
              </View>
            </View>
         
          </View>
        </Swiper>
      </View>
    );
  }
  renderPage(index){
    return (<Text>{index.title}</Text>)
}
  renderNews(){
     const swiperItems = this.state.NewsList.map(item=> {
            return(
              <View style={{flex:1,backgroundColor:'white'}} key={item.id}>

                     <Image 
                      source={{uri :"https://www.media.gov.sa/"+item.photo}}
                      style={{width: '100%', height: '100%'}}
                    />
                     <View style={{position: 'absolute', top:0, left: 0, right: 0, bottom:0, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(52, 52, 52, 0.4)",}}>
                   <Text style={{fontWeight: 'bold',color:'white', fontSize: 20,paddingRight: 5,}}>{item.title}</Text>
                   <Text style={{paddingRight: 5,color:'white'}}>{item.content.substr(0,150)}</Text>
                   </View>
                   </View>
            )
        })

    return(
      
     <View style={{ backgroundColor: "#006749", height: hp("60%") }}>
     
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

export default Home;
