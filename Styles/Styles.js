import Constants from 'expo-constants';
import {StyleSheet} from 'react-native'
import {Header}  from 'react-navigation';
import { Colors } from '../Styles/Colors';
export default StyleSheet.create({
    Maincontainer: {
      flex: 1,
      //padding: 5,
     // top:20
      //justifyContent: 'center',
     // alignItems: 'center',
    //  backgroundColor:'red'
    },
    BaseText:{
       // fontFamily:'Cochin',
        fontSize:20,
         fontFamily:'Montserrat'
        
        
    },
    statusBar: {
    marginTop: Constants.statusBarHeight+Header.HEIGHT,
    flex: 1,
    flexDirection: 'column',
    //backgroundColor:Colors.LIGHTGRAY
    //alignItems:'center'
  },
   statusBarChanal: {
      marginTop: Constants.statusBarHeight+Header.HEIGHT,
    flex: 1,
    flexDirection: 'column',
    backgroundColor:Colors.LIGHTGRAY
   },
   OnlystatusBar:{
       marginTop: Constants.statusBarHeight+Header.HEIGHT,
   }


   

})