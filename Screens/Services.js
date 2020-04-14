import React, { Component } from "react";
import { View, Text,FlatList,Image ,TouchableOpacity,StyleSheet,ScrollView,Linking} from 'react-native';
import Styles from "../Styles/Styles";
import { FlatGrid } from 'react-native-super-grid';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import * as API from '../API/API'
export default class Services extends Component {
    static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'الخدمات',
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
   HandelClick=(Item)=>{
     //alert(Item)
     this.props.navigation.navigate('SevicesDeatails',{Item:Item})
  
  }

componentDidMount() {
  API.GetServices().then((res)=>{
    //alert(res)
 
     this.setState({data:res, Loading:false,});
      // this.state.NewsList.map((u,i)=>{
   // alert(u.title)});
  })

  }
  render() {
     const items = [
        
         { 
               name: ' نظام فسوحات الكتب والمطبوعات',//اسم الخدمة 
               Icon: 'book', 
               rate:'3.3',
               url:'https://booksys.media.gov.sa/',//رابط الخدمة 
               SupportUrl:'https://booksys.media.gov.sa/menu/contactus' ,
               Min :"10/1 أيام"// متوسط تنفيذ الخدمة
               }, 


                { 
               name: ' نظام رفع الدعاوى الإعلامية',//اسم الخدمة 
               Icon: 'gavel', 
               rate:'3.2',
               url:'https://claiments.media.gov.sa/',//رابط الخدمة 
               SupportUrl:'https://www.media.gov.sa/contactus' ,
               Min :"5/1 أيام"// متوسط تنفيذ الخدمة
               }, 
                { 
               name: ' نظام ضبط المخالفات الإعلامية',//اسم الخدمة 
               Icon: 'toggle-on', 
               rate:'3.2',
               url:'https://www.media.gov.sa/forms/contactus/activity-control',//رابط الخدمة 
               SupportUrl:'https://www.media.gov.sa/forms/contactus/activity-control' ,
               Min :"2/1 أيام"// متوسط تنفيذ الخدمة
               }, 
                { 
               name: ' خدمات حجب ورفع الحجب',//اسم الخدمة 
               Icon: 'toggle-off', 
               rate:'3.2',
               url:'https://www.media.gov.sa/forms/contactus/sitefilter',//رابط الخدمة 
               SupportUrl:'https://www.media.gov.sa/contactus' ,
               Min :"3/1 أيام"// متوسط تنفيذ الخدمة
               }, 
                { 
               name: ' خدمةالمؤتمرات والندوات',//اسم الخدمة 
               Icon: 'file-video-o', 
               rate:'3.4',
               url:'http://media.gov.sa/confandsems',//رابط الخدمة 
               SupportUrl:'https://www.media.gov.sa/contactus' ,
               Min :"فوري"// متوسط تنفيذ الخدمة
               }, 
                { 
               name: ' إستعلام عن معاملة',//اسم الخدمة 
               Icon: 'calendar', 
               rate:'3.3',
               url:'https://www.media.gov.sa/forms/inquiry',//رابط الخدمة 
               SupportUrl:'https://www.media.gov.sa/contactus' ,
               Min :"فوري"// متوسط تنفيذ الخدمة
               }, 
                { 
               name: ' نظام التراخيص الموحد',//اسم الخدمة 
               Icon: 'id-card-o', 
               rate:'3.5',
               url:'http://lcsys.gov.sa/',//رابط الخدمة 
               SupportUrl:'https://booksys.media.gov.sa/menu/contactus' ,
               Min :"25/1 يوم"// متوسط تنفيذ الخدمة
               }, 
            
    ];
    return (
     <ScrollView style={Styles.statusBarChanal}>
      
         <FlatGrid
        itemDimension={150}
        items ={this.state.data}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <View style={[styles.itemContainer, { backgroundColor: "#fff" }]}>
         
          <View style={{alignItems:'center',marginTop:5}}>
         
           <FontAwesome size={ 50 } name={item.icon.substring(6)}   style={{color:'#006749'}}/>
          </View>

          <View style={{flexDirection: 'row',justifyContent:'space-between',height:30}}>
          {/*<TouchableOpacity style={styles.Support}  onPress={() => Linking.openURL(item.SupportUrl)}>
          <Text style={{color:'#fff', fontFamily:'Montserrat',}}> الدعم الفني </Text>
          </TouchableOpacity>*/}
         {/** <TouchableOpacity style={styles.BottomGoTo} onPress={() => Linking.openURL(item.url)}>
          <Text style={{color:'#fff', fontFamily:'Montserrat'}}>الدخول  للخدمة </Text>
          </TouchableOpacity> */} 
          </View>

           <View>
           <StarRating
        disabled={true}
        style={{marginTop:5}}
        maxStars={5}
        starSize={20}
        rating={item.rating}
        fullStarColor='#FFD700'
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
        <Text style={{alignSelf:'center'}}> {item.rating}</Text>
          </View>

          <View style={{flex:1,alignItems:'center',marginLeft: 15,marginRight:20}}>
            <Text style={styles.itemName}>{item.period}
            </Text>
           </View>
          <View style={{width:'100%', backgroundColor:'#006749',alignItems:'center',borderTopLeftRadius: 0,borderTopRightRadius:0,borderRadius: 5,height:50,}}>
        <Text style={styles.FooterText}> {item.title.replace(/[<br>]/g, " ")}</Text>
           </View>

          </View>
          </TouchableOpacity>
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
    height: 250,
    width:'100%'
  },
  itemName: {
    fontSize: 16,
    color: '#006749',
     fontFamily:'Montserrat',
     textAlign:'center'
    //fontWeight: '600',
  },
   FooterText: {
    fontSize: 16,
    color: '#fff',
     fontFamily:'Montserrat',
    //fontWeight: '600',
    textAlign:'center'
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
  BottomGoTo:{
     height:30,
    backgroundColor:'#D0D2D1',
    fontFamily:'Montserrat',
    marginRight: 5,
    marginBottom: 5,
    justifyContent:'center',
    borderRadius:5
  },
  Support:{
    height:30,
    backgroundColor:'green',
    fontFamily:'Montserrat',
    marginRight: 5,
    marginBottom: 5,
    borderRadius:5
    }
});
