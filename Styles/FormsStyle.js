import {StyleSheet} from 'react-native'
export default StyleSheet.create({
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
        marginTop:6,
         fontFamily:'Montserrat'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
       // fontWeight: '700',
         fontFamily:'Montserrat'
       

    },
    input: {
        height: 50,
        width: "95%",
        backgroundColor: 'rgba(225,225,225,0.7)',
        marginBottom: 5,
        padding: 6,
        color: '#000',
        borderRadius: 5,
        fontFamily:'Montserrat'

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
         textAlignVertical: 'top',
          fontFamily:'Montserrat'
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
     chanelContainer: {
        backgroundColor: '#006749',
        //paddingVertical: 15,
        borderRadius: 5,
        width: "100%",
        //marginTop:6,
        fontFamily:'Montserrat'
    },

})