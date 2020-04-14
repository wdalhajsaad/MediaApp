import React, { Component } from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity ,KeyboardAvoidingView,Alert} from "react-native";
import Spinner from '../Components/Spinner';
import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
import Communications from 'react-native-communications';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Tecket extends Component {
     static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:' الدعم الفني   ',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai'  },
    headerTitleAlign: 'center'
  });
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
        Title: '',
        Name: '',
        Email: '',
       // MobileNo:this.props.navigation.state.params.Mobile,
        Content: '',
        Error: '',
        Result: ''//{status:'',message:''}
    };
  }
   renderButton() {
        if (this.state.Loading) {
            return (
                <Spinner SizeSpinner='large' />
            );
        }
        return (
            <TouchableOpacity style={FormsStyle.buttonShareing}
                onPress={this.onInqueryClick.bind(this)} >
                <Text style={FormsStyle.buttonText} > إرسال </Text>
            </TouchableOpacity>
        );
    }
Checknumber=(phone)=>{
  if(phone.length===14)
  return phone;
  if(phone.length===10)
  return '966'+phone;
  


}
 restField =() =>{
  // alert('nice')
 this.setState({Name:"",
 MobileNo:'',
Title:'',
Content:''
 });
    };  
  onInqueryClick(){
    this.setState({Loading:true});
     const MobileNo = this.state.MobileNo;
     var screenPost=this;

    try {
            if(this.state.Title==='')
            {
                this.setState({Loading:false});
              Alert.alert(" ",'الرجاء تعبيئة جميع البيانات'); 
                return;
            }
            if(this.state.MobileNo==='' )
            {
                this.setState({Loading:false});
               Alert.alert(" ",'الرجاء تعبيئة جميع البيانات');
                return;
            } 
            if(MobileNo.length < 10)  
            {
                this.setState({Loading:false});
                 Alert.alert(" ",'رقم الجوال يتكون من 10 ارقام ');
                 return;

            }    
            if(this.state.Content==='')
            {
                this.setState({Loading:false});
             Alert.alert(" ",'الرجاء تعبيئة جميع البيانات');
                return;
            }    
            var phone =this.Checknumber(this.state.MobileNo);
            //alert(phone)
           // 
            var data = "token=jf8d7dhdekie&token_secret=lakjsdfeo92737&system_id=1&"+
                        "title="+this.state.Title+"&mobile="+this.state.MobileNo+"&status=1&ticket_type=6&name="+this.state.Name+"&email="+this.state.Email+"&"+
                        "content="+this.state.Content;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) { 
                console.log(this.responseText); 
                screenPost.setState({Loading:false
              
                });
               // alert(JSON.parse(this.responseText).message);
             Alert.alert(" ","تم إرسال طلبك بنجاح ويمكننك متابعته برقم البلاغ من متابعة الطلب ");
            screenPost.restField()

            }
            else{
                 console.log(this.responseText); 
                  console.log(this.readyState); 

            }
            }
            );

            xhr.open("POST", "https://tss.media.gov.sa/tera/ticket/api/addTicket/");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("cache-control", "no-cache"); 
            xhr.send(data);
            //this.props.navigation.navigate('Home');

    }
    catch (error) {
    alert(error);
    this.setState({Loading:false});
    }
  }

  render() {
    
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
      
       <KeyboardAwareScrollView
      //style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={[FormsStyle.Maincontainer,Styles.statusBar]}
      scrollEnabled={false}
    >
        <TextInput
          style={FormsStyle.input}
          //placeholderStyle={{}}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholder="   الإســـم"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          textAlign="right"
         value={this.state.Name}
          //value={this.state.Name}
          onChangeText={Name => this.setState({ Name })}
        />

        <TextInput
          style={FormsStyle.input}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          returnKeyType="next"
          placeholder="   الجــوال"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          textAlign="right"
            maxLength = {10}
             value={this.state.MobileNo}
          // value={this.state.Email}
          onChangeText={MobileNo => this.setState({ MobileNo })}
        />

        <TextInput
          style={FormsStyle.input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholder="  الموضـوع"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          textAlign="right"
          value={this.state.Title}
          onChangeText={Title => this.setState({ Title })}
        />

        <TextInput
          style={FormsStyle.input1}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholder=" نص الرسالة   "
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
           value={this.state.Content}
          multiline={true}
          textAlign="right"
          numberOfLines={4}
          onChangeText={Content => this.setState({ Content })}
        />
 
        {this.renderButton()}
         <View style={styles.holder}>
          <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => Communications.phonecall('1988', true)}>
            <Text style={{justifyContent:'space-evenly'},styles.text}>للاستفسارات أو الشكاوي والاقتراحات الاتصال على الرقم الموحد لوزارة الاعلام  1988 </Text>
        </TouchableOpacity>
       
         </View>
          </KeyboardAwareScrollView>
         
        
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
      paddingRight: 10,
   // fontSize: 15,
   textAlign: 'right', 
      lineHeight:23,
     textDecorationLine: 'underline',
     fontFamily:'Montserrat',
  },
});
export default Tecket;

