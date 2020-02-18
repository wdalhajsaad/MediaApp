import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text,Image } from "react-native";
import { Colors } from "../Styles/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Styles from "../Styles/Styles";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

class AboutMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
         collapsed:false,
         second:false,
         
         //do not show the body by default
    };
  }

  render() {
    return (
    <View  >
          <Collapse 
            isCollapsed={this.state.collapsed} 
           onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}>
          >
            <CollapseHeader style={styles.row}>
             <Icon
                     name={
                        this.state.collapsed
                        ? "keyboard-arrow-down"
                        : "keyboard-arrow-left"
            }
            size={30}
            color={Colors.WHITE}
            style={{al:'flex-end'}}
          />
            
                <Text style={styles.title}>عن وزارة الإعلام </Text>
             
              
            </CollapseHeader>
            <CollapseBody style={{backgroundColor:Colors.LIGHTGRAY,marginTop:5}}>
             <Image
              source={{
                uri: "https://www.media.gov.sa/theme/moci_v3/img/moci1.jpg?v14"
              }}
              style={{ width: '100%', height: '50%',alignSelf: 'center',marginTop:5,marginBottom: 5, }}
              resizeMode='contain'
            />
           
           
             <Text style={{flexWrap: 'wrap',fontFamily:'Montserrat',paddingRight: 5,marginRight:5}} >
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



           <Collapse 
            isCollapsed={this.state.second} 
           onToggle={(isCollapsed)=>
           this.setState({second:isCollapsed})}>
          >
            <CollapseHeader style={styles.row}>
             <Icon
                     name={
                        this.state.second
                        ? "keyboard-arrow-down"
                        : "keyboard-arrow-left"
            }
            size={30}
            color={Colors.WHITE}
            style={{al:'flex-end'}}
          />
            
                <Text style={styles.title}>عن وزارة الإعلام </Text>
             
              
            </CollapseHeader>
            <CollapseBody style={{backgroundColor:Colors.LIGHTGRAY,marginTop:5}}>
             <Image
              source={{
                uri: "https://www.media.gov.sa/theme/moci_v3/img/moci1.jpg?v14"
              }}
              style={{ width: '100%', height: '50%',alignSelf: 'center',marginTop:5,marginBottom: 5, }}
              resizeMode='contain'
            />
           
           
             <Text style={{flexWrap: 'wrap',fontFamily:'Montserrat',paddingRight: 5,}} >
             
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
        </View>
         
    );
  }
}

export default AboutMedia;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    //fontWeight: "bold",
    flex:1,
    color: Colors.WHITE,
    fontFamily:'Montserrat',
   
   
   
  },
  row: {
    flexDirection: "row",
   // justifyContent: "space-between",
     //justifyContent:'flex-end',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    borderRadius: 10,
    // backgroundColor: Colors.CGRAY,
    backgroundColor: "#006749"
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: "100%"
    // height:'100%'
  },
  child: {
    backgroundColor: Colors.LIGHTGRAY,
    // padding: 16,
    paddingBottom: 0
    //flexDirection:'column',
    //alignContent:'stretch'
  }
});
