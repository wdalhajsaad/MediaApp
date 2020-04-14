import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image} from "react-native";
import { Colors } from '../Styles/Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import { WebView } from 'react-native-webview';
import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  /**
   *
   *
   * @returns
   * @memberof Accordian
   */
  render() {

    return (
       <View  >
            <TouchableOpacity style={FormsStyle.AccordionHeader} onPress={()=>this.toggleExpand()}>
             <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.GRAY} style={{alignSelf:'flex-end'}} />
                <Text style={FormsStyle.AboutTitle }>عن وزارة الاعلام</Text>
               
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
               
                  <Image
                  source={{
                   uri: "https://www.media.gov.sa/theme/moci_v3/img/moci1.jpg?v14"
                   }}
              style={{ width: 300, height: 150,alignSelf: 'center', borderRadius: 5, }}
              resizeMode='cover'
            />
            <View style={{ paddingLeft:20, paddingRight:18,}}>
             <WebView
        
          style={{height:250,backgroundColor:Colors.LIGHTGRAY}}
             injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
          source={{
           
            html:
              "<style>p{text-align:justify;font-size: 45px;direction: rtl;}</style>" +
              "<p>" +
            " تعمل الوزارة في دورٍ فاعل بالتعريف بالهوية السعودية والمحافظة عليها و نشر الصورة والقيم الإسلامية الحقيقية في حياة المواطن السعودي وتعميق أبعاده، والتعبير عن انجازات المملكة العربية السعودية ودورها الإيجابي في كافة المحافل و المناسبات الإقليمية والدولية. كما تساهم الوزارة في رفع الوعي والأدوار التي تقوم بها المملكة العربية السعودية محلياُ وعربياً واسلامياً وعالمياً،ومواجهة كل المعلومات المغالطة عن المملكة."
             + "</p>"
          }}
        />
        </View>
            
            {/**<Text style={{flexWrap: 'wrap',paddingRight:20,paddingLeft:10, paddingTop: 5, fontFamily:'Montserrat', textAlign: 'right'}} >
              تعمل الوزارة في دورٍ فاعل بالتعريف بالهوية السعودية والمحافظة
              عليها و نشر الصورة والقيم الإسلامية الحقيقية في حياة المواطن
              السعودي وتعميق أبعاده، والتعبير عن انجازات المملكة العربية
              السعودية ودورها الإيجابي في كافة المحافل و المناسبات الإقليمية
              والدولية. كما تساهم الوزارة في رفع الوعي والأدوار التي تقوم بها
              المملكة العربية السعودية محلياُ وعربياً واسلامياً وعالمياً،
              ومواجهة كل المعلومات المغالطة عن المملكة.
            </Text> */} 
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
         //alignSelf:'baseline',
       // backgroundColor: Colors.LIGHTGRAY
        paddingLeft:25,
       paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    parentHr:{
        height:5,
        color: Colors.WHITE,
        width:'100%'
    },
    child:{
      //alignSelf:'baseline',
      paddingTop:10,
      paddingBottom:10,
      borderRadius: 5,
      justifyContent:'center',
      //paddingBottom: 50,
      marginHorizontal:10,
       // marginLeft:10,
     
        backgroundColor: Colors.LIGHTGRAY,
        //padding:16,
    }
    
});
