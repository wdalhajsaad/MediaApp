import React, { Component } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Colors } from "../Styles/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class AboutAccordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      key: props.id,
      expanded: false
    };
  }

  render() {
    return (
      <View
        style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10,flex: 1,height:'100%' }}
       // key={this.props.id}
      >
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <Icon
            name={
              this.state.expanded
                ? "keyboard-arrow-down"
                : "keyboard-arrow-left"
            }
            size={30}
            color={Colors.WHITE}
          />
          <Text style={[styles.title, styles.font]}>عن الوزارة</Text>
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={{flex:1,backgroundColor:'red',height:'100%'}}>
            <Image
              source={{
                uri: "https://www.media.gov.sa/theme/moci_v3/img/moci1.jpg?v14"
              }}
              style={{ width: '70%', height: '70%',alignSelf: 'center', }}
            />
            <View style={{flex: 1,}}>
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
           
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.WHITE
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    width: "100%",
    // height:'100%'
  },
  child: {
    backgroundColor: Colors.LIGHTGRAY,
   // padding: 16,
   paddingBottom: 0,
    //flexDirection:'column',
    //alignContent:'stretch'
  }
});
