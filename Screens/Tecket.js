import React, { Component } from "react";
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import Spinner from '../Components/Spinner';

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
            <TouchableOpacity style={styles.buttonContainer1}
                onPress={this.onInqueryClick.bind(this)} >
                <Text style={styles.buttonText} > إرسال </Text>
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
      <View style={styles.Maincontainer}>
        <TextInput
          style={styles.input}
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
          style={styles.input}
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
          style={styles.input}
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
          style={styles.input1}
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
const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
       // padding: 150,
        marginLeft: 5,
        marginRight:5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255,255,255,.3)'
    },
    container: {
        padding: 10,
       // paddingTop:30,
       // marginTop:5,
    },
    buttonContainer: {
        backgroundColor: '#006749',
        paddingVertical: 15,
        borderRadius: 10,
        width: "95%"
    },
    buttonContainer1: {
        backgroundColor: '#006749',
        paddingVertical: 15,
        borderRadius: 5,
         width: "95%",
        marginTop:6
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
       

    },
    input: {
        height: 50,
        width: "95%",
        backgroundColor: 'rgba(225,225,225,0.7)',
        marginBottom: 5,
        padding: 6,
        color: '#000',
        borderRadius: 5

    },
    input1: {
        width: "95%",
        //flex:1,
        height: 150,
        backgroundColor: 'rgba(225,225,225,0.7)',
        //padding: 10,
        color: '#000',
        borderRadius: 5,
        justifyContent: 'flex-start',
         textAlignVertical: 'top'
    },
    headrStyle: {
        backgroundColor: '#ecf0f1'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    backgroundImage: {
        //flex: 1,
        paddingTop: 4,
        //resizeMode: 'cover', // or 'stretch'
        width: '100%',
        height: '100%',
    },
    LogoPage: {

    },
});
