import {StyleSheet} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default StyleSheet.create({

    container:{
          backgroundColor: "blue",
          flex: 1,
          width: wp("100%"),
          alignItems: "stretch",
         // paddingBottom:20
          
        },
        swipperMainView:{
            flex: 1,
             backgroundColor: "#9DD6EB" 
             },

         SwpperRow:{  
                 flex: 1,
                  backgroundColor: "rgba(255,0,0,0.1)",
                  flexDirection: "row"
                   },
        MenuImage:{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center"
                },
          TextFont:{
             fontFamily:'Montserrat'
          }      
        
    
   
})