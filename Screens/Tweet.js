
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import { StyleSheet, ScrollView, View } from 'react-native';
import Styles from "../Styles/Styles";
import PropTypes from 'prop-types';
import Spinner from '../Components/Spinner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// adapted from: https://stackoverflow.com/a/49310105/4488853
class Tweet extends Component {
    static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',paddingBottom: 20,},
    title:'تويتر',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai',paddingBottom: 10, },
    headerTitleAlign: 'center'
  
  });
  static propTypes = {
    tweetUrl: "https://twitter.com/media_ksa",
  };  

constructor(props) {
  super(props)
  this.state = {
    embedHtml: null,
     Loading: true,
  }
}

componentDidMount() {
  this.setupEmbed()
}

setupEmbed() {
  // pass in the Twitter Web URL
  let tweetUrl =
    "https://publish.twitter.com/oembed?url=https://twitter.com/media_ksa" ;
  fetch(tweetUrl, { method: "GET", headers: { Accepts: "application/json" } }).then(
    resp => {
      resp.json().then(json => {
        let html = json.html
        this.setState({
          embedHtml: html,
        })
      })
    }
  )
}

renderEmbed() {
  if (this.state.embedHtml) {
    let html = `<!DOCTYPE html>\
      <html>\
        <head>\
          <meta charset="utf-8">\
          <meta name="viewport" content="width=device-width, initial-scale=1.0">\
          </head>\
          <body>\
          <div style=" padding: 20px;" >\
          </div>\
          <div>
            ${this.state.embedHtml}\
            </div>
          </body>\
      </html>`
    return (
      <View style={styles.webviewWrap}>
     
        <WebView source={{ html: html }} style={styles.webview} />
        
      </View>
    )
  }
}
 RenderSpinner() {

    if (this.state.Loading) {
      return (
        <Spinner SizeSpinner='large' />
      );
    }
  }


  render() {
    return (  
     
        <ScrollView >
        {this.renderEmbed()}
      </ScrollView>
     
     
     
    );
  }
}

export default Tweet;

const styles = StyleSheet.create({
  webviewWrap: {
    flex: 1,
      //paddingTop: 26,
  
  },
  webview: {
    flex: 1,
    paddingTop: 30,
    width:wp("100%"),
    height:hp("100%")  , // height is hard to control
  },
});