import React, { Component } from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import Spinner from '../Components/Spinner';
import FormsStyle from '../Styles/FormsStyle';

class Tecket extends Component {
      static navigationOptions = {
    headerStyle: { backgroundColor: "#006749"}
    
  };
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

        
  onInqueryClick(){
    this.setState({Loading:true});
    try {
            if(this.state.Title==='')
            {
                this.setState({Loading:false});
                alert('الرجاء إدخال عنوان البلاغ'); 
                return;
            }
            if(this.state.MobileNo==='')
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
            
            var screenPost=this;
            var data = "token=jdu765dtyejewleld&token_secret=jdheydhd83732djdjdkeueyd7d6d53jdk&system_id=17&"+
                        "title="+this.state.Title+"&mobile="+this.state.MobileNo+"&status=56&name="+this.state.Name+"&email="+this.state.Email+"&"+
                        "content="+this.state.Content;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) { 
                //console.log(this.responseText); 
                screenPost.setState({Loading:false});
                //alert(JSON.parse(this.responseText).message);

            }
            }
            );

            xhr.open("POST", "http://tss.moci.gov.sa/tera/ticket/api/addTicket/");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("cache-control", "no-cache"); 
            xhr.send(data);
            this.props.navigation.navigate('Home');

    }
    catch (error) {
    alert(error);
    this.setState({Loading:false});
    }
  }

  render() {
    return (
      <View style={FormsStyle.Maincontainer}>
        <TextInput
          style={FormsStyle.input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholder=" اسم مقدم البلاغ"
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
          placeholder="  رقم الجوال"
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
          placeholder=" عنوان البلاغ"
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
          placeholder=" نص البلاغ"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#808080"
          // value={this.state.Content}
          multiline={true}
          numberOfLines={4}
          onChangeText={Content => this.setState({ Content })}
        />

        {this.renderButton()}
      </View>
    );
  }
}

export default Tecket;

