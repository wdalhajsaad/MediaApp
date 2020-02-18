import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";
import { Colors } from '../Styles/Colors';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

class TestCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
       <View style={{marginTop: 30}}>
        <Collapse>
          <CollapseHeader style={FormsStyle.CollapseHeder}>
              <Text style={FormsStyle.collapseText}>وزارة الاعلام</Text>
          </CollapseHeader>
          <CollapseBody style={styles.child}>
           
              
                  <Image
              source={{
                uri: "https://www.media.gov.sa/theme/moci_v3/img/moci1.jpg?v14"
              }}
              style={{ width: '70%', height: '40%',alignSelf: 'center', }}
              resizeMode='stretch'
            />
            
             <Text style={{flexWrap: 'wrap',}} >
              تعمل الوزارة في دورٍ فاعل بالتعريف بالهوية السعودية والمحافظة
              عليها و نشر الصورة والقيم الإسلامية الحقيقية في حياة المواطن
              السعودي وتعميق أبعاده، والتعبير عن انجازات المملكة العربية
              السعودية ودورها الإيجابي في كافة المحافل و المناسبات الإقليمية
              والدولية. كما تساهم الوزارة في رفع الوعي والأدوار التي تقوم بها
              المملكة العربية السعودية محلياُ وعربياً واسلامياً وعالمياً،
              ومواجهة كل المعلومات المغالطة عن المملكة.
            </Text>
                
           
    
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader style={FormsStyle.CollapseHeder}>
              <Text style={FormsStyle.collapseText}>وزارة الاعلام</Text>
          </CollapseHeader>
          <CollapseBody>
           <View />
           
                <View style={styles.child}>
                  <Image
              source={{
                uri: "https://www.media.gov.sa/theme/moci_v3/img/moci1.jpg?v14"
              }}
              style={{ width: '70%', height: '40%',alignSelf: 'center', }}
              resizeMode='stretch'
            />
            
             <Text style={{flexWrap: 'wrap',}} >
              تعمل الوزارة في دورٍ فاعل بالتعريف بالهوية السعودية والمحافظة
              عليها و نشر الصورة والقيم الإسلامية الحقيقية في حياة المواطن
              السعودي وتعميق أبعاده، والتعبير عن انجازات المملكة العربية
              السعودية ودورها الإيجابي في كافة المحافل و المناسبات الإقليمية
              والدولية. كما تساهم الوزارة في رفع الوعي والأدوار التي تقوم بها
              المملكة العربية السعودية محلياُ وعربياً واسلامياً وعالمياً،
              ومواجهة كل المعلومات المغالطة عن المملكة.
            </Text>
                </View>
           
    
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}

export default TestCollapse;

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.WHITE,
    },
    row:{
        flexDirection: 'row',
        //justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
         borderRadius: 10,
       // backgroundColor: Colors.CGRAY,
        backgroundColor: '#006749',
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        //width:'100%'
    },
    child:{
        backgroundColor: Colors.LIGHTGRAY,
       // padding:16,
    }
    
});
