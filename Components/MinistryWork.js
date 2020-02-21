import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image} from "react-native";
import { Colors } from '../Styles/Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
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
                <Text style={FormsStyle.buttonText }> أعمال الوزارة</Text>
               
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
               
                
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
              *وضع منهج إعلامي جديد يكفل للمواطن السعودي حرية التعبير المستمدة من النهج الإسلامي والسياسة العامة للدولة.
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
              أن يكون الإعلام السعودي إعلاماً متميزاً ومؤثراً وفاعلاً وأداة استراتيجية في السياسة الداخلية للمملكة.
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
             القدرة على التصدي للهجمات الإعلامية المستمرة من الخارج
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
            القدرة على استعمال الآلة الاعلامية السعودية كوسيط لتوليد شعور الوطنية والانتماء الوطني وكأداة لمحاربة الفكر الضال ومحفز للتعريف بالثقافات السعودية المختلفة.
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
             أخذ مكانتها اللائقة بالدور الرائد بين وسائل الإعلام العربية المتقدمة
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
            السعي الى تلبية الاهتمامات المتعددة للمتلقين .
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
            احداث تغيرات شاملة وعميقة خاصة بالنسبة للإعلام المسموع والمرئي وبناء الثقة بين الإعلام السعودي ومتلقيه.
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
            تطوير عناصر التخطيط إن كانت موارد بشرية أو موارد مالية أو إجراءات وآلياتها التنفيذية والتشغيلية بما يناسب تطلعات الوزارة المستقبلية
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
           كسب معركة المصداقية والصدق، وتقديم المعلومات والتحليلات الحقيقة التي تساهم في دعم ثقة المواطن بإعلامه وثقافته وانتمائه.
            </Text>
             <Text style={{flexWrap: 'wrap',padding:5, fontFamily:'Montserrat',}} >
           تطوير الإعلام بكل أجهزته المرئية والمسموعة ليتلازم العمل الثقافي مع الإعلامي بشكل يخلق التكامل ويحقق المصالح العليا للمملكة العربية السعودية.
            </Text>
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
      justifyContent:'center',
      //paddingBottom: 50,
      marginHorizontal:10,
       // marginLeft:10,
     
        backgroundColor: Colors.LIGHTGRAY,
        //padding:16,
    }
    
});
