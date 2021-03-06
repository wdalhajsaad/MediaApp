import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity,Linking } from "react-native";
import Styles from "../Styles/Styles";
import MenuStyle from "../Styles/MenuStyle";
import Fonts from '../Styles/Fonts'
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
        <Swiper showsButtons={false}
      dot={<View style={{backgroundColor: 'rgba(255,255,255,.8)',  width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#006749', width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 7
          }}
        >
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
                <Text style={MenuStyle.TextFont}>الخدمات الالكترونية</Text>
                </TouchableOpacity>
              </View>
            
              <View style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('Enquire',{title: ']الرئيسية < الخدمات الإلكترونية['})}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/followup.png")}
                />
                <Text style={MenuStyle.TextFont}> متابعة الطلب</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={MenuStyle.SwpperRow}>
              <View
                style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('Tecket')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/info.png")}
                />
                <Text style={MenuStyle.TextFont}> الدعم الفني</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => this.props.navigation.navigate('ChanalList')}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/play.png")}
                />
                <Text style={MenuStyle.TextFont}> البث المباشر</Text>
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
                <Text style={MenuStyle.TextFont}> الاخبار</Text>
                </TouchableOpacity>
              </View>
            </View>
         
          </View>
         
          <View style={MenuStyle.swipperMainView}>
            <View  style={MenuStyle.SwpperRow} >
              <View style={MenuStyle.MenuImage}
              >
               <TouchableOpacity style={{alignItems:'center'}}
              onPress={() => Linking.openURL("https://lcsys.gov.sa/gcam-licenses/new")}
              >
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../assets/reg.png")}
                />
                <Text style={MenuStyle.TextFont}>  تسجيل الاعلاميين</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage} >
               <TouchableOpacity style={{alignItems:'center'}}
               onPress={() => this.props.navigation.navigate('WassRss')}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/spalogo.png")}
                />
                <Text style={MenuStyle.TextFont}>  وكالة الانباء السعودية</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={MenuStyle.SwpperRow}>
              <View style={MenuStyle.MenuImage}>
               <TouchableOpacity style={{alignItems:'center'}}
                onPress={() => this.props.navigation.navigate('Tweet')}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/twitter.png")}
                />
                <Text style={MenuStyle.TextFont}>  وزارة الاعلام</Text>
                </TouchableOpacity>
              </View>
              <View style={MenuStyle.MenuImage}>
               <TouchableOpacity style={{alignItems:'center'}}
                  onPress={() => this.props.navigation.navigate('Faaliat')}>
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
                <Text style={MenuStyle.TextFont}> المعرض الرقمي</Text>
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
//getPhote(item){
  //if (item)
//}
  renderNews(){
    const fdata = this.state.NewsList.filter(function(item){ 
      
    
     
         return item.id !=2652 && item.id!=2651 && item.id!=2647 && item.id!=2645 ;
       }
        // return item.id!=2652||item.id!=2651||item.id!=2647||item.id!=2645;
      
    )
     const swiperItems = fdata.slice(0,4).map(item=> {
      
            return(
              <View style={{flex:1,backgroundColor:'#006749',flexDirection: 'column',}} key={item.id}>
                  <View style={{flex:1,width: '100%', height: '70%'}} >
                   <Image 
                      source={{uri :"https://www.media.gov.sa/"+item.photo}}
                      style={{width: '100%', height: '100%',}}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={{height: '20%'}}>
                   <Text style={Fonts.SwiperTitle}>{item.title}</Text>
                  </View>
                    
                     {/* <View style={{position: 'absolute', top:0, left: 0, right: 0, bottom:0, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(52, 52, 52, 0.4)",}}>
                  <Text style={Fonts.SwiperTitle}>{item.title}</Text>
                   
                   <Text style={Fonts.SwiperTitle}>{item.title}</Text>
                  
                   </View>*/}
                   </View>
            )
        })

    return(
      
     <View style={{ backgroundColor: "#006749", height: hp("60%") }}>
     
      <Swiper
       key={this.state.NewsList.length}
       showsButtons={false}
        dot={<View style={{backgroundColor: 'rgba(255,255,255,.8)',  width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#006749', width: 8, height: 8, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 7
          }}
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
