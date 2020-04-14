import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image} from "react-native";
import { Colors } from '../Styles/Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import { WebView } from 'react-native-webview';

import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
export default class MinistryHestory extends Component{

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
                <Text style={FormsStyle.AboutTitle }>تاريخ وزارة الإعلام</Text>
               
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
               <Text style= {styles.TitelH}>⁃ البدايات الأولى للإعلام السعودي</Text>
                  <WebView
    style={{width: 300, height: 150,alignSelf: 'center', }}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/BmuhXFWNfBA'}}
/>  
  <WebView
        
          style={{height:200,backgroundColor:Colors.LIGHTGRAY,marginRight:20,marginLeft: 20,}}
             injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
          source={{
           
            html:
              "<style>p{text-align:justify;font-size: 45px;direction: rtl;}</style>" +
              "<p>" +
            " البدايات الأولى للإعلام السعودي تشير إلى أن النشأة الأولى لهذاالإعلام كانت عبارة عن خطوات متسلسلة تمت على أسس علمية سليمة ومنظمة ووفق رؤية ثاقبة ، كانت البداية عندما تم إنشـاء صحيفة أم القرى عام 1343هـ في عهد جلالة الملك عبدالعزيــز آل سعود -رحمه الله- لتكون النواة الأولى في منظــومة الإعـــلام السعودي الرسمي، وهي تنشر كل ما يصدر عن الدولة من قرارات وبيانات حكومية وتخص المواطن السعودي ."
             + "</p>"
          }}
        />
                
             <Text style={styles.TextStyle}>
            
            </Text>
             <Text style= {styles.TitelH}> ⁃  استمرار إهتمام الملك عبدالعزيز -رحمه الله-</Text>
                  <WebView
    style={{width: 300, height: 150,alignSelf: 'center', }}
    javaScriptEnabled={true}
    source={{uri: 'https://www.youtube.com/embed/xOcJxcH10o'}}
/>  
 <WebView
        
          style={{height:280,backgroundColor:Colors.LIGHTGRAY,marginRight:20,marginLeft: 20,}}
             injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
          source={{
           
            html:
              "<style>p{text-align:justify;font-size: 45px;direction: rtl;}</style>" +
              "<p>" +
            " و استمراراً لاهتمام الملك عبدالعزيز -رحمه الله- وحرصه على إطلاع العالم الخارجي وخاصة الإسلامي على حقيقة الأوضاع في المملكة، أمر بإنشاء مجلس للدعاية والحج يتبع وزارة المالية للقيام بمواجهة الحملات المغرضة ضد المملكة، وكان ذلك في عام 1355 هـ، ثم جاءت الخطوة الثانية وهي ذات أهمية بالغة في مسيرة الإعلام السعودي، وتذكر وثائق الإعلام أن الإذاعة السعودية أنشئت بمرسوم ملكي بتاريخ 1368/09/22هـ ، بتوقيع الملك عبدالعزيز – رحمه الله – بتكليف الأميرفيصل بن عبدالعزيز –رحمه الله- بتنفيذ الفكرة بهدف ربط المملكة بالعالم الخارجي ونشر الثقافة والمعرفة في البلاد."
             + "</p>"
          }}
        />
                
           
              <Text style= {styles.TitelH}> ⁃ استكمال بناء الإعلام السعودي</Text>
              <WebView
        
          style={{height:120,backgroundColor:Colors.LIGHTGRAY,marginRight:20,marginLeft: 20,}}
             injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
          source={{
           
            html:
              "<style>p{text-align:justify;font-size: 45px;direction: rtl;}</style>" +
              "<p>" +
            "وفي سبيل استكمال بناء الإعلام السعودي، صدر المرسوم الملكي بتاريخ 1374/06/17هـ ، وبمقتضاه سميت الإذاعة \"بالمديرية العامة للإذاعة\" ، بعد ذلك تم إنشاء المديرية العامة للصحافة والنشر وتم ربط الإذاعة بها، ثم صدر نظام المطبوعات والنشر عام 1378هـ ."
             + "</p>"
          }}
        />
                
             <Text style={styles.TextStyle} >
          
            </Text>
             <Text style= {styles.TitelH}> ⁃ تزايد الاهتمام بالإعلام محلياً ودولياً </Text>
             <WebView
        
          style={{height:120,backgroundColor:Colors.LIGHTGRAY,marginRight:20,marginLeft: 20,}}
             injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
          source={{
           
            html:
              "<style>p{text-align:justify;font-size: 45px;direction: rtl;}</style>" +
              "<p>" +
            " ومع تزايد الاهتمام بالإعلام محلياً ودولياً واتساع النطاق،أصدر الملك فيصل –رحمه الله – المرسوم الملكي بتاريخ 1382/10/09هـ بتحويل المديرية العامة للصحافة والنشر إلى \"وزارة الإعلام\" لتشرف على وسائل الإعلام ، بعدها وفي عام 1424 هـ صدر قرر مجلس الوزارء بتعديل مسمى وزارة الإعلام بحيث يكون \"وزارة الثقافة والإعلام\" ."
             + "</p>"
          }}
        />
                
           
            <View style={{paddingTop:50}}></View>
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
    TitelH:{
      flexWrap: 'wrap',
      paddingRight:20,
      paddingLeft:10,
       paddingTop: 5, 
        textAlign: 'right',
       marginBottom: 10,
       fontFamily:'Montserrat',
    },
    TextStyle:{
       flexWrap: 'wrap',
        textAlign: 'right',
      paddingRight:20,
      paddingLeft:10,
       paddingTop: 5, 
       lineHeight:20,
    }
    
});
