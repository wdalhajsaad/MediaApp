import React, { Component } from 'react';
import { View, Text,Image,ScrollView ,TouchableOpacity,Share} from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import Styles from "../Styles/Styles";
import { Colors } from '../Styles/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";


class SevicesDeatails extends Component {
       static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'تفاصيل الخدمة',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal' },
    headerTitleAlign: 'center'
  
  });

  constructor(props) {
    super(props);
    this.state = {
          Item:this.props.navigation.state.params.Item,
    };
  }
componentDidMount() {

    // alert(this.state.Item.name);
 }

  render() {
    return (
      <View style={{flex: 1,marginBottom:15}}>
      <ScrollView style={{ backgroundColor:Colors.LIGHTGRAY},Styles.statusBar}>
        <Text style={{ fontFamily:'FontBold',paddingLeft: 15,paddingRight: 20,}}> {this.state.Item.name} </Text>
         <Image
              source={this.state.Item.pic}
              style={{ width: wp('90%'), height: hp('40%'),alignSelf: 'center',marginTop:15,marginBottom:15,borderRadius:5, }}
              resizeMode='contain'
            />
            <View style={{ borderRadius: 10,paddingTop: 10}}>
            <Text style={{ fontFamily:'FontBold',paddingLeft: 15,paddingRight: 20,}}> عن {this.state.Item.name} </Text>
             <Text style={{ fontFamily:'FontBold',paddingLeft: 15,paddingRight: 20,color:'#c5b358',}}> اسم النشاط في وزارة التجارة </Text>
            <Text style={{ fontFamily:'Almarai',paddingRight: 20,paddingLeft: 15,}}>
           اسم النشاط في وزارة التجارة
            </Text>
             <Text style={{ fontFamily:'FontBold',paddingLeft: 15,paddingRight: 20,color:'#c5b358',}}> الفئة المستهدفة  </Text>
              <TouchableOpacity style={FormsStyle.buttonShareing}
                onPress={() =>this.onShare(this.state.Item.id)}
            >
                <Text style={FormsStyle.buttonText} > الذهاب الى الخدمة </Text>
            </TouchableOpacity>
            </View>
      </ScrollView>
      </View>
    );
  }
}

export default SevicesDeatails;
