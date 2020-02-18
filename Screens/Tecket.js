import React, { Component } from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity ,KeyboardAvoidingView} from "react-native";
import Spinner from '../Components/Spinner';
import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
import Communications from 'react-native-communications';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Tecket extends Component {
     static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:'الرئيسية-> الدعم الفني   ',
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
            <TouchableOpacity style={FormsStyle.buttonContainer1}
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
        
  onInqueryClick(){
    this.setState({Loading:true});
    try {
            if(this.state.Title==='')
            {
                this.setState({Loading:false});
                alert('الرجاء إدخال عنوان البلاغ'); 
                return;
            }
            if(this.state.MobileNo===''|| this.state.MobileNo.lenght<10 )
            {
                this.setState({Loading:false});
                alert('الرجاء إدخال رقم الجوال');
                return;
            }       
            if(this.state.Content==='')
            {
                this.setState({Loading:false});
                alert('الرجاء إدخال محتوى البلاغ');
                return;
            }    
            var phone = Checknumber(this.state.MobileNo);
            alert(phone)
            var screenPost=this;
            var data = "token=jf8d7dhdekie&token_secret=lakjsdfeo92737&system_id=1&"+
                        "title="+this.state.Title+"&mobile="+this.state.MobileNo+"&status=1&ticket_type=6&name="+this.state.Name+"&email="+this.state.Email+"&"+
                        "content="+this.state.Content;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) { 
                console.log(this.responseText); 
                screenPost.setState({Loading:false});
                alert(JSON.parse(this.responseText).message);

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
          
          //value={this.state.Name}
          onChangeText={Name => this.setState({ Name })}
        />

        <TextInput
          style={FormsStyle.input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholder="   الجــوال"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          textAlign="right"
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
          //value={this.state.Title}
          onChangeText={Title => this.setState({ Title })}
        />

        <TextInput
          style={FormsStyle.input1}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholder=" نص الرسالة"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          // value={this.state.Content}
          multiline={true}
          numberOfLines={4}
          onChangeText={Content => this.setState({ Content })}
        />
 
        {this.renderButton()}
         <View style={styles.holder}>
          <TouchableOpacity  onPress={() => Communications.phonecall('1988', true)}>
            <Text style={styles.text}>للاستفسارات أو الشكاوي والاقتراحات الاتصال على الرقم   1988 </Text>
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
    fontSize: 15,
     fontFamily:'Montserrat',
  },
});
export default Tecket;

