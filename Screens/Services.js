import React, { Component } from "react";
import { View, Text,FlatList,Image ,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import Styles from "../Styles/Styles";
import { FlatGrid } from 'react-native-super-grid';
export default class Services extends Component {
    static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'الخدمات',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  });
  constructor(props) {

    super(props);
    this.state = {};
  }
   HandelClick=(Item)=>{
     //alert(Item)
     this.props.navigation.navigate('SevicesDeatails',{Item:Item})
  
  }


  render() {
     const items = [
        
             { 
               name: ' الخدمة الاولى',//اسم الخدمة 
               code: '#fff', 
               pic:require('../assets/play.png'),//صورة او شعار الخدمة
               url:'https://www.Media.gov.sa/ ..........',//رابط الخدمة 
               about :'so and so ............',
               Image:'https://www.........',// صورة للخدمة
               ServiceName:'Like so',//اسم النشاط في وزارة التجارة ان وجد
               Target :"target on , target " ,// الفئة المستهدفة 
               Min :"10-1 أيام"// متوسط تنفيذ الخدمة
               }, 

             { 
               name: 'الخدمة الثانية', 
               code: '#fff',pic:require('../assets/play.png'),
               url:'https://www.youtube.com/embed/GPhLOf0Nm2s' 
               },

             { name: 'الخدمة الثالثة', code: '#fff' ,pic:require('../assets/play.png'),url:'https://www.youtube.com/embed/GPhLOf0Nm2s'},
             { name: 'الخدمة الرابعة', code: '#fff' ,pic:require('../assets/play.png'),url:'https://www.youtube.com/embed/GPhLOf0Nm2s'},
             { name: 'الخدمة الخامسة', code: '#fff',pic:require('../assets/play.png'),url:'https://www.youtube.com/embed/GPhLOf0Nm2s' },
             { name: ' الخدمة السادسة', code: '#fff',pic:require('../assets/play.png') ,url:'https://www.youtube.com/embed/GPhLOf0Nm2s'},
        
    ];
    return (
     <ScrollView style={Styles.statusBarChanal}>
      
       <FlatList
         
          
          data={items}
          renderItem={({ item }) => (
            <View style={{  flexDirection: 'column', marginRight:5,marginBottom: 5, marginLeft:5 ,marginTop: 5,}}>
             
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity
          onPress={() => this.HandelClick(item)}
          >
          <Image
          source={item.pic}
         style={{width:110,height:80}}
         resizeMode='contain'
          />
          <View style={{backgroundColor:'white',alignItems:'center'}}>
            <Text style={styles.itemName}>{item.name}</Text>
           </View>
            </TouchableOpacity>
          </View>
            </View>
          )}
          // onPress={() => {
               //     this.ShowModalFunction(true, item.imageBig);
               //   }}
          //Setting the number of column
           numColumns={3}
          keyExtractor={(item, index) => index}
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
    justifyContent: 'center',
    borderRadius: 5,
    alignItems:'center',
    //padding: 10,
    height: 150,
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
