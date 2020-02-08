import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity  } from 'react-native';
import Spinner from '../Components/Spinner';
import FormsStyle from '../Styles/FormsStyle';

class Enquire extends Component {
      static navigationOptions = {
    headerStyle: { backgroundColor: "#006749"}
    
  };
  constructor(props) {
    super(props);
    this.state = {
    BlaghNo: '',
    MobileNo: '',
    Error: '',
    Loading: false,
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
        <Text style={FormsStyle.buttonText} > استعلام </Text>
      </TouchableOpacity>

    );
  }
   loadDoc(url, cFunction, thiscontext) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.onerror = function (err) {
      alert(err.currentTarget.responseText);
      thiscontext.setState({ Loading: false });
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  onInqueryClick() {
    this.setState({ Loading: true });
    try {
      if (this.state.BlaghNo === '') {
        this.setState({ Loading: false });
        alert('الرجاء إدخال رقم البلاغ');
        return;
      }
      if (this.state.MobileNo === '') {
        this.setState({ Loading: false });
        alert('الرجاء إدخال رقم الجوال');
        return;
      }

/** 
      this.loadDoc('https://services.moci.gov.sa/Blagh/Blagh/BlaghService.svc/InqueryBlaghV2?Mobile=' + this.state.MobileNo +
        '&blaghNum=' + this.state.BlaghNo, (res) => {
          this.setState({ Result: res.responseText });
          this.setState({ Loading: false });
          alert(this.state.Result);
          this.props.navigation.navigate('Result', { RequestResult: this.state.Result });
        }, this);
*/
fetch('https://services.media.gov.sa/Blagh/Blagh/BlaghService.svc/InqueryBlaghV2?Mobile='+this.state.MobileNo+
    '&blaghNum='+this.state.BlaghNo)
    .then(response => response.json())
    .then((JsonResult) => {
        this.setState({Result : JSON.parse(JsonResult.InqueryBlaghV2Result)});
        this.setState({Loading:false});
        alert(this.state.Result.message);
        //this.props.navigation.navigate('Result', { RequestResult: this.state.Result.message });
       // alert(this.state.Result.message);
    })
    .catch((error) => { 
        alert(error);
    });
    
    } catch (error) {
      alert(error);
      this.setState({ Loading: false });
    }
  }


  render() {
    return (
      <View style={FormsStyle.Maincontainer} >

                <TextInput style={FormsStyle.input}
                  autoCapitalize="none"
                  value={this.state.BlaghNo} keyboardType='numeric'
                  onChangeText={BlaghNo => this.setState({ BlaghNo })}
                  autoCorrect={false}
                  keyboardType='phone-pad'
                  returnKeyType="next"
                  placeholder='رقم البلاغ'
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#808080"
                  textAlign='right'
                />

                <TextInput style={FormsStyle.input}
                  autoCapitalize="none"
                  value={this.state.MobileNo} keyboardType='numeric'
                  onChangeText={MobileNo => this.setState({ MobileNo })}
                  autoCorrect={false}
                  keyboardType='phone-pad'
                  returnKeyType="next"
                  placeholder='رقم الجوال'
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#808080"
                  textAlign='right'
                />

             
                {this.renderButton()}

            </View>
    );
  }
}


export default Enquire;
