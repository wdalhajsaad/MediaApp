import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,Alert 
} from "react-native";
import Spinner from "../Components/Spinner";
import FormsStyle from "../Styles/FormsStyle";
import * as API from '../API/API';
import Communications from "react-native-communications";

class Enquire extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749", textAlign: "center" },
    title: "متابعة الطلب",
    headerTitleStyle: {
      flex: 1,
      textAlign: "center",
      color: "white",
      paddingVertical: 15,
      fontWeight: "normal",
      fontFamily:'Almarai' 
    },
    headerTitleAlign: "center"
  });
  constructor(props) {
    super(props);
    this.state = {
      BlaghNo: "",
      MobileNo: "",
      Error: "",
      Loading: false,
      Result: "" //{status:'',message:''}
    };
  }
  renderButton() {
    if (this.state.Loading) {
      return <Spinner SizeSpinner="large" />;
    }
    return (
      <TouchableOpacity
        style={FormsStyle.buttonShareing}
        onPress={this.onInqueryClick.bind(this)}
      >
        <Text style={FormsStyle.buttonText}> استعلام </Text>
      </TouchableOpacity>
    );
  }
  loadDoc(url, cFunction, thiscontext) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.onerror = function(err) {
      alert(err.currentTarget.responseText);
      thiscontext.setState({ Loading: false });
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  onInqueryClick() {
    Keyboard.dismiss;
     const MobileNo = this.state.MobileNo;

    this.setState({ Loading: true });
    try {
      if (this.state.BlaghNo === "") {
        this.setState({ Loading: false });
        Alert.alert("","الرجاء إدخال رقم الطلب");
        return;
      }
      if (this.state.MobileNo === "") {
        this.setState({ Loading: false });
        Alert.alert(" ","الرجاء إدخال رقم الجوال");
        return;
      }
        if(MobileNo.length < 10)  
            {
                this.setState({Loading:false});
                 Alert.alert(" ",'رقم الجوال يتكون من 10 ارقام ');
                 return;

            }  
      /*  var screenPost=this;
            var data = +this.state.MobileNo+"&status=1&ticket_type=6&name="+this.state.Name+"&email="+this.state.Email+"&"+
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
            xhr.send(data);*/

      /** 
      this.loadDoc('https://services.moci.gov.sa/Blagh/Blagh/BlaghService.svc/InqueryBlaghV2?Mobile=' + this.state.MobileNo +
        '&blaghNum=' + this.state.BlaghNo, (res) => {
          this.setState({ Result: res.responseText });
          this.setState({ Loading: false });
          alert(this.state.Result);
          this.props.navigation.navigate('Result', { RequestResult: this.state.Result });
        }, this);
*/
     /* fetch(
        "https://services.media.gov.sa/Blagh/Blagh/BlaghService.svc/InqueryBlaghV2?Mobile=" +
          this.state.MobileNo +
          "&blaghNum=" +
          this.state.BlaghNo
      )*/

       API.GetTicketDaya(this.state.BlaghNo,this.state.MobileNo).then(res=>res)
        .then(JsonResult => {
           this.setState({ Loading: false });
          // alert(JsonResult.status);
          if(JsonResult.status===200){
             this.setState({
            Result:JsonResult , 
            BlaghNo:'',
            MobileNo:''
          });
         // this.setState({ Loading: false });
            Alert.alert(" ",this.state.Result.message);
          }
          else if (JsonResult.status===404){
            Alert.alert(" ","يوجد خطأ في المدخلات");
            
           //  alert(this.state.Result.message);
            
            
          }
         
          this.setState({ Loading: false });
          //alert("not here "+this.state.Result.message);
          //this.props.navigation.navigate('Result', { RequestResult: this.state.Result.message });
          // alert(this.state.Result.message);
        })
        .catch(error => {
         // alert(error);
        });
    } catch (error) {
     // alert(error);
      this.setState({ Loading: false });
    }
  }

  render() {
    return (
      <View style={FormsStyle.Maincontainer}>
        <TextInput
          style={FormsStyle.input}
          autoCapitalize="none"
          value={this.state.BlaghNo}
          keyboardType="numeric"
          onChangeText={BlaghNo => this.setState({ BlaghNo })}
          autoCorrect={false}
          keyboardType="phone-pad"
          returnKeyType="next"
          placeholder="رقم الطلب"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          textAlign="right"
        />

        <TextInput
          style={FormsStyle.input}
          autoCapitalize="none"
          value={this.state.MobileNo}
          keyboardType="numeric"
          onChangeText={MobileNo => this.setState({ MobileNo })}
          autoCorrect={false}
          keyboardType="phone-pad"
          returnKeyType="next"
          placeholder=" 05XXXXXXX"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          maxLength = {10}
          textAlign="right"
        />

        {this.renderButton()}
        <View style={styles.holder}>
          <TouchableOpacity
            onPress={() => Communications.phonecall("1988", true)}
          >
            <Text style={styles.text}>
              لللاستفسارات أو الشكاوي والاقتراحات الاتصال على الرقم الموحد لوزارة الاعلام  1988 {" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(253,253,253)"
  },
  holder: {
    flex: 0.25,
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    lineHeight:23,
    textAlign: 'right', 
    textDecorationLine: 'underline',
    paddingRight: 10,
    fontFamily: "Montserrat"
  }
});

export default Enquire;
