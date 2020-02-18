
import React, { Component } from 'react';
import { View, Text,Image,ScrollView ,TouchableOpacity,Share} from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import Styles from "../Styles/Styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class NewsDetails extends Component {
        static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'الأخبار-> التفاصيل',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal' },
    headerTitleAlign: 'center'
  
  });

  constructor(props) {
    super(props);
    this.state = {
     Item:this.props.navigation.state.params.Item,
    };
  }

 onShare = async (Link) => {
  // alert(Link)
    try {
      const result = await Share.share({
       message: "https://www.media.gov.sa/news/"+ Link,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

 componentDidMount() {

     //alert(this.state.Item.title);
 }
  render() {
    return (
        <View style={{flex: 1,marginBottom:15}}>
      <ScrollView style={Styles.statusBar}>
        <Text style={{ fontFamily:'FontBold',paddingLeft: 15,paddingRight: 20,}}> {this.state.Item.title} </Text>
         <Image
              source={{
                uri: "https://www.media.gov.sa/" + this.state.Item.photo
              }}
              style={{ width: wp('90%'), height: hp('40%'),alignSelf: 'center',marginTop:15,marginBottom:15,borderRadius:5, }}
              resizeMode='cover'
            />
            <Text style={{ fontFamily:'Almarai',paddingRight: 15,paddingLeft: 15,}}>
            {this.state.Item.content}
            </Text>
              <TouchableOpacity style={FormsStyle.buttonShareing}
                onPress={() =>this.onShare(this.state.Item.id)}
            >
                <Text style={FormsStyle.buttonText} > مشاركة </Text>
            </TouchableOpacity>
      </ScrollView>
      </View>
    );
  }
}

export default NewsDetails;
