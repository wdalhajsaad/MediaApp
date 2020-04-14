import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image} from "react-native";
import { Colors } from '../Styles/Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
import { WebView } from 'react-native-webview';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class MinistryWork extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {

    return (
       <View  >
            <TouchableOpacity style={FormsStyle.AccordionHeader} onPress={()=>this.toggleExpand()}>
             <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.GRAY} style={{alignSelf:'flex-end'}} />
                <Text style={FormsStyle.AboutTitle }> أعمال الوزارة</Text>
               
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            
            {
                this.state.expanded &&
                <View style={styles.child}>

                <WebView
        
          style={{height:800,backgroundColor:Colors.LIGHTGRAY}}
             injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
          source={{
           
            html:
              "<style>p{text-align:justify;font-size: 45px;direction: rtl;}</style>" +
              "<p>" +
            "  ⁃ وضع منهج إعلامي جديد يكفل للمواطن السعودي   حرية  التعبير المستمدة من النهج الإسلامي والسياسة العامة للدولة ."
             + "</p>"+
              "<p>" +
            "⁃ يكون الإعلام السعودي إعلاماً متميزاً ومؤثراً وفاعلاً وأداة استراتيجية في السياسة الداخلية للمملكة."
             + "</p>"+
              "<p>" +
            " ⁃ على التصدي للهجمات الإعلامية المستمرة من الخارج"
             + "</p>"+
             "<p>" +
            "⁃القدرة على استعمال الآلة الاعلامية السعودية كوسيط لتوليد شعور الوطنية والانتماء الوطني وكأداة لمحاربة الفكر الضال ومحفز للتعريف بالثقافات السعودية المختلفة  ."
             + "</p>"+
              "<p>" +
            "⁃ مكانتها اللائقة بالدور الرائد بين وسائل الإعلام العربية المتقدمة"
             + "</p>"+
             
              "<p>" +
            " ⁃ الى تلبية الاهتمامات المتعددة للمتلقين ."
             + "</p>"+
              "<p>" +
            " ⁃ تغيرات شاملة وعميقة خاصة بالنسبة للإعلام المسموع والمرئي وبناء الثقة بين الإعلام السعودي ومتلقيه."
             + "</p>"+
              "<p>" +
            " ⁃ عناصر التخطيط إن كانت موارد بشرية أو موارد مالية أو إجراءات وآلياتها التنفيذية والتشغيلية بما يناسب تطلعات الوزارة المستقبلية"
             + "</p>"+
              "<p>" +
            "⁃كسب معركة المصداقية والصدق، وتقديم المعلومات والتحليلات الحقيقة التي تساهم في دعم ثقة المواطن بإعلامه وثقافته وانتمائه."
             + "</p>"+
              "<p>" +
            " ⁃ الإعلام بكل أجهزته المرئية والمسموعة ليتلازم العمل الثقافي مع الإعلامي بشكل يخلق التكامل ويحقق المصالح العليا للمملكة العربية السعودية."
             + "</p>"
          }}
        />
               
            
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
    },
    TextStep:{
      flexWrap: 'wrap',
      paddingRight:20,
       textAlign: 'right',
      paddingLeft:10,
       paddingTop: 5, 
       fontFamily:'Montserrat',
    }
    
});
