
import React, { Component } from 'react';
import { View, Text,Image,ScrollView ,TouchableOpacity,Share,Dimensions} from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import Styles from "../Styles/Styles";
import WebView from "react-native-webview";
import HTML from 'react-native-render-html';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const webViewScript = `
  setTimeout(function() { 
    window.ReactNativeWebView.postMessage(document.documentElement.scrollHeight); 
  }, 500);
  true; // note: this is required, or you'll sometimes get silent failures
`;

class NewsDetails extends Component {
        static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'تفاصيل الخبر',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });

  constructor(props) {
    super(props);
    this.state = {
     Item:this.props.navigation.state.params.Item,
     webheight:100
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


GetWebView =()=>{

return (
<View style={{}}>
 <WebView
         style={{backgroundColor:'red',flex:1}}
        source={{ html: "<p style='text-align: justify;  font-size: 50px;'>Justified text here</p>" }}
    />
</View>
)


}
 
 
 
 componentDidMount() {

//alert( this.state.Item.content.length)
     //alert(this.state.Item.title);
 }
  onWebViewMessage = (event: WebViewMessageEvent) => {
    //alert(Number(event.nativeEvent.data));
    this.setState({webheight: Number(event.nativeEvent.data)*0.33})
  }
  
   
  render() {
      

    return (
      
        <View style={{flex: 1,marginBottom:15}}>
        
      <ScrollView style={Styles.statusBar}>
      
        <Text style={{ fontFamily:'FontBold',paddingLeft: 15,paddingRight: 20,marginTop: 10, textAlign: 'right',}}> {this.state.Item.title} </Text>
         <Image
              source={{
                uri: "https://www.media.gov.sa/" + this.state.Item.photo
              }}
              style={{ width: wp('90%'), height: hp('40%'),alignSelf: 'center',marginTop:15,marginBottom:15,borderRadius:5, }}
              resizeMode='cover'
            />
            <View style={{marginRight:20,marginLeft: 20,}}>
            <WebView style={{height: this.state.webheight}}
            useWebKit={true}
  automaticallyAdjustContentInsets={false}
  scrollEnabled={false}
   // injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
  source={{  html:
              "<style>p{text-align:justify;font-size: 50px;direction: rtl;}</style>" +
              "<p>" +
               this.state.Item.content
            +
              "</p>"}}
  onMessage={this.onWebViewMessage}
  javaScriptEnabled={true}
  injectedJavaScript ={webViewScript}
  domStorageEnabled={true}
></WebView>
        </View>
    
     
    {/**  <WebView
        
          style={{height:this.state.webViewHeight}}
            onMessage={this.onWebViewMessage}
             injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
          source={{
           
            html:
              "<style>p{text-align:justify;font-size: 50px;direction: rtl;}</style>" +
              "<p>" +
             this.state.Item.content+
              "</p>"
          }}
        />
         <Text  adjustsFontSizeToFit={true} allowFontScaling style={{ paddingRight: 16,paddingLeft: 15, lineHeight:20, fontSize:15}}>
            {this.state.Item.content}
            </Text>
  
     */}
           
              <TouchableOpacity style={FormsStyle.buttonContainer1}
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
