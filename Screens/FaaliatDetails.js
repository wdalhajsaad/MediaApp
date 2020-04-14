
import React, { Component } from 'react';
import { View, Text,Image,ScrollView ,TouchableOpacity,Share,Linking} from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import Styles from "../Styles/Styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";


class FaaliatDetails extends Component {
       static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:' التفاصيل',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });

  constructor(props) {
    super(props);
    this.state = {
     Item:this.props.navigation.state.params.Item,
    };
  }
 GetDate(data){
   var i=0;
   var res=data[0]+"/"+data[1]+"/"+data[2]
   return res ;

 }


 componentDidMount() {
     

    // alert(this.state.Item);
 }
  render() {
    return (
        <View style={{flex: 1,marginBottom:15}}>
      <ScrollView style={Styles.statusBar}>
        <Text style={{ fontFamily:'FontBold',paddingLeft: 15,paddingRight: 20,marginTop:10,textAlign:'right'}}> {this.state.Item.Title} </Text>
         <Image
              source={{
                uri:  this.state.Item.Logo
              }}
              style={{ width: wp('90%'), height: hp('40%'),alignSelf: 'center',marginTop:15,marginBottom:15,borderRadius:5, }}
              resizeMode='cover'
            />
            <Text style={{ fontFamily:'Almarai',paddingRight: 15,paddingLeft: 15,}}>
            {this.state.Item.content}
            </Text>
            <View style={{flexDirection: 'row',justifyContent:'flex-end',height:30,paddingRight:15}}>
           
           <Text style={{ fontFamily:'Almarai'}}> الى تاريخ {this.GetDate(this.state.Item.EndDate)}</Text>
           <Text style={{ fontFamily:'Almarai'}}> من تاريخ  {this.GetDate(this.state.Item.StartDate)}</Text>
            <Text style={{paddingLeft:5}}>تاريخ  الفعالية:</Text>
           </View>
            <View style={{flexDirection: 'row',justifyContent:'flex-end',height:30,paddingRight:15}}>
           <Text style={{ fontFamily:'Almarai'}}>{this.state.Item.EventTypeName}</Text>
            <Text style={{paddingLeft:5}}>نوع الفعالية: </Text>
           </View>
            <View style={{flexDirection: 'row',justifyContent:'flex-end',height:30,paddingRight:15}}>
           <Text style={{ fontFamily:'Almarai'}}>{this.state.Item.CityName}</Text>
             <Text style={{paddingLeft:5}}>المديـنة:</Text>
           </View>
            <View style={{flexDirection: 'row',justifyContent:'flex-end',height:30,paddingRight:15}}>
           <Text style={{ fontFamily:'Almarai'}}>{this.state.Item.EntityName}</Text>
             <Text style={{paddingLeft:5}}>الجهــــة:</Text>
           </View>
            <TouchableOpacity style={FormsStyle.buttonContainer1}
                onPress={() =>Linking.openURL("https://faaliat.sa/Events/E/"+this.state.Item.Id)}
            >
                <Text style={FormsStyle.buttonText} > الذهاب الى الفعالية  </Text>
            </TouchableOpacity>
           
      </ScrollView>
      </View>
    );
  }
}


export default FaaliatDetails;
