import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Styles from '../Styles/Styles'
import FormsStyle from '../Styles/FormsStyle';
class CardTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.statusBar}>
        <Text> قنوات البث المباشر</Text>
        <View style={{height:'40%',padding: 10,}}>
        <WebView
    style={{flex:1}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/MNab5V9DcGE'}}
/>  
</View>
<View style={{alignItems: 'center',}}>
 <View style={FormsStyle.buttonContainer1}
                 >
                <Text style={FormsStyle.buttonText} > القناة الاخبارية </Text>
            </View>
            </View>
      </View>
    );
  }
}

export default CardTest;
