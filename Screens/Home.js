import React from 'react'
import {
StyleSheet,
Text,
View,
ImageBackground,
Image,
TouchableOpacity,
TextInput,
Button
} from 'react-native';
import Styles from '../Styles/Styles'

export default function Home(){
return (
<View style={Styles.Maincontainer}>
<View>
<Text style={Styles.BaseText}>Home Page </Text>
<Text style={Styles.BaseText,Styles.TextTite}>Home Page </Text>

</View>
</View>
)
}