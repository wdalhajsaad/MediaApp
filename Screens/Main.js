import React from 'react'
import { StyleSheet,Text,View,ImageBackground,Image,TouchableOpacity,TextInput,Button} from 'react-native';
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
import {
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} 
from 'react-navigation';
import { Header, Container, Content, ListItem } from 'native-base';
import Styles from '../Styles/Styles';
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
                <ListItem style={SideMenuStyle.ItemList} button onPress={() => this.props.navigation.navigate('MainScreen')} >
                    <Text style={SideMenuStyle.LinkText} >الرئيسية</Text>
                   
                </ListItem>

                <ListItem style={SideMenuStyle.ItemList} button onPress={() => props.navigation.navigate('About')} >
                    <Text style={SideMenuStyle.LinkText}>  عن الوزارة</Text>
                    {/*<FontAwesome name='exclamation-circle' size={25} style={{ marginRight: 0, color: "#000" }} />*/}
                </ListItem>

                <ListItem style={SideMenuStyle.ItemList} button onPress={() => props.navigation.navigate('preactivation')} >
                    <Text style={SideMenuStyle.LinkText}>   البيانات المفتوحة </Text>
                    
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



},
{
    defaultNavigationOptions:({navigation})=>{
return{

    headerRight:(
        <FontAwesome name='bars' onPress={()=>navigation.openDrawer()}   style={{paddingRight: 10,color:'white'}}/>
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