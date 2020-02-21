import React from 'react'
import { StyleSheet,Text,View,ImageBackground,Image,TouchableOpacity,TextInput,Button,Linking} from 'react-native';
import Events from './Events'
import News from './News'
import Home from './Home'
import Services from './Services'
import Gallery from './Gallery'
import About from './About'
import Tecket from './Tecket'
import Enquire from './Enquire'
import Chanals from './Chanals'
import Faaliat from './Faaliat'
import ChanalList from './ChanalList'
import NewsDetails from './NewsDetails'
import SevicesDeatails from './SevicesDeatails'
import AccordionAbout from './AccordionAbout'
import Tweet from './Tweet'
import Social from './Social'
import FormsStyle from '../Styles/FormsStyle';
import Fonts from '../Styles/Fonts';
import Styles from "../Styles/Styles";

import { Colors } from "../Styles/Colors";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
import WassRss from './WassRss'
import {
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} 
from 'react-navigation';
import { Header, Container, Content, ListItem } from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SideMenuStyle from '../Styles/SideMenuStyle'
export default function Main() {


    return (
       <Appcontainer />
    )


}

const CustomList = (props) => (
    <Container style={{flex:1 ,backgroundColor:"#006749",paddingTop: 24,}}>
        {/*<Header style={{ xmarginTop:10,}}>
            
        </Header>*/}
        <Content contentContainerStyle={{flex:1}}>
            <View style={SideMenuStyle.MainView} >
                <ListItem style={SideMenuStyle.ItemList} button onPress={() => props.navigation.navigate('Home')} >
                    <Text style={SideMenuStyle.LinkText} >الرئيسية</Text>
                   
                </ListItem>

                <ListItem style={SideMenuStyle.ItemList} button onPress={() => props.navigation.navigate('AccordionAbout')} >
                    <Text style={SideMenuStyle.LinkText}>  عن الوزارة</Text>
                    {/*<FontAwesome name='exclamation-circle' size={25} style={{ marginRight: 0, color: "#000" }} />*/}
                </ListItem>

                <ListItem style={SideMenuStyle.ItemList} button onPress={() => props.navigation.navigate('preactivation')} >
                    <Text style={SideMenuStyle.LinkText}>   البيانات المفتوحة </Text>
                    
                </ListItem>
                 <ListItem style={SideMenuStyle.ItemList} button onPress={() => Linking.openURL("https://www.media.gov.sa/page/conditionsroles")} >
                    <Text style={SideMenuStyle.LinkText}>   اللوائح والانظمة </Text>
                    
                </ListItem >
 
                <ListItem  >
                <View style={{backgroundColor:'yallow',width:'100%'}} >
        <Collapse>
          <CollapseHeader >
              <Text style={{color:'white',paddingRight: 20,fontFamily:'Montserrat', width:'100%'}}> روابط مهمة</Text>
          </CollapseHeader>
          <CollapseBody>
          <TouchableOpacity style={FormsStyle.CollapseHeder}
               onPress={() => Linking.openURL("https://www.media.gov.sa")}
                >
                <Text style={FormsStyle.buttonText} >    بوابة وزارة الاعلام </Text>
            </TouchableOpacity>
            <TouchableOpacity style={FormsStyle.CollapseHeder}
               onPress={() => Linking.openURL("http://www.gcam.gov.sa/ar/Pages/default.aspx")}
                >
                <Text style={FormsStyle.buttonText} > الهيئة العامة للمرئي والمسموع </Text>
            </TouchableOpacity>
             <TouchableOpacity style={FormsStyle.CollapseHeder}
              onPress={() => Linking.openURL("https://www.spa.gov.sa/")}
                >
                <Text style={FormsStyle.buttonText} > وكالة الانباء السعودية </Text>
            </TouchableOpacity>
            <TouchableOpacity style={FormsStyle.CollapseHeder}
             onPress={() => Linking.openURL("http://www.sba.sa/ar")}
                >
                <Text style={FormsStyle.buttonText} > هيئة الاذاعة واتلفزيون </Text>
            </TouchableOpacity>
            <TouchableOpacity style={FormsStyle.CollapseHeder}
             onPress={() => Linking.openURL("https://www.sr.sa/ar/")}
                >
                <Text style={FormsStyle.buttonText} >  اذاعة المملكة العربية السعودية </Text>
            </TouchableOpacity>
          </CollapseBody>
        </Collapse>
        
      </View>  
                </ListItem>
                 <ListItem style={SideMenuStyle.ItemList} button onPress={() => props.navigation.navigate('Tecket')} >
                    <Text style={SideMenuStyle.LinkText}>    اتصل بنا </Text>
                   
                </ListItem>
                
                 <ListItem style={SideMenuStyle.ItemList} button onPress={() => props.navigation.navigate('Social')} >
                    <Text style={SideMenuStyle.LinkText}> حسابات الوزارة بوسائل التواصل الإجتماعي </Text>
                    
                </ListItem>

                <View style={{justifyContent:'center',alignContent: 'center', alignItems:'center',position: 'absolute',bottom:0}}>
                    <Text style={SideMenuStyle.LinkText}> جميع الحقوق محفوظة © لوزارة الاعلام</Text>
                    <Text></Text>
                </View>
            </View>
        </Content>
    </Container>
);

const StackNavgitor = createStackNavigator({
    //HomeNavigator:HomeNavigator,
    Home,
    News,
    Events,
    Services,
    Gallery,
    About,
    Tecket,
    Enquire,
    Chanals,
    Faaliat,
    ChanalList,
    NewsDetails,
    WassRss,
    Tweet,
    SevicesDeatails,
    AccordionAbout,
    Social,



},
{
    defaultNavigationOptions:({navigation})=>{
return{

    headerRight:(
        <FontAwesome size={ 25 } name='bars' onPress={()=>navigation.openDrawer()}   style={{color:'white',paddingRight: 15,}}/>
    ),
     headerLeft:(
         <Image  source={require("../assets/logo.png")} 
          style={{ height: 40,width:90,marginLeft:5, }}
         />
    ),
    headerTransparent: true,
    headerStyle: { borderBottomWidth: 0 }

}

    }
}
)
const DrowerNav =createDrawerNavigator({
Home:{
    screen:StackNavgitor

},
News: { screen: News },
Events: { screen: Events },
},{
    drawerPosition: 'right',
     contentComponent: CustomList,
}

)


const Appcontainer =createAppContainer(DrowerNav);