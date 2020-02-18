import React, { Component } from 'react';
import { View, Text,Share,TouchableOpacity } from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import Styles from "../Styles/Styles";
class TryShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 onShare = async (Link) => {
    try {
      const result = await Share.share({
        message: Link,
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
  render() {
    return (
      <View>
         <TouchableOpacity style={FormsStyle.buttonShareing}
          onPress={() =>this.onShare("www.facebook.com")}
            >
                <Text style={FormsStyle.buttonText} > مشاركة </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default TryShare;
