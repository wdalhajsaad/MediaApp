import React from 'react'
import { StyleSheet,Text,View,ImageBackground,Image,TouchableOpacity,TextInput,Button} from 'react-native';
import Events from './Events'
import News from './News'
import Home from './Home'
import Services from './Services'
import Gallery from './Gallery'
import About from './About'
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
export default function Main() {

    return (
       <Appcontainer />
    )


}

const CustomList = (props) => (
    <Container style={{flex:1 ,backgroundColor:"red",paddingTop: 24,}}>
        <Header style={{ xmarginTop:10,}}>
            
        </Header>
        <Content contentContainerStyle={{backgroundColor:'#e7ebec',flex:1}}>
            <View style={{flex: 1,flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', }} >
                <ListItem style={{ resizeMode:'contain'  }} button onPress={() => this.props.navigation.navigate('MainScreen')} >
                    <Text style={{paddingRight:10,fontWeight:'bold',textDecorationColor:"#000"}} >الرئيسية</Text>
                   
                </ListItem>

                <ListItem style={{ resizeMode:"contain"  }} button onPress={() => props.navigation.navigate('About')} >
                    <Text style={{paddingRight:10,fontWeight:'bold',textDecorationColor:"#000"}}>  عن الوزارة</Text>
                    {/*<FontAwesome name='exclamation-circle' size={25} style={{ marginRight: 0, color: "#000" }} />*/}
                </ListItem>

                <ListItem style={{ resizeMode: "contain",  }} button onPress={() => props.navigation.navigate('preactivation')} >
                    <Text style={{paddingRight:10,fontWeight:'bold',textDecorationColor:"#000"}}>   البيانات المفتوحة </Text>
                    
                </ListItem>

                <View style={{paddingTop:30,alignItems:'center'}}>
                    <Text> جميع الحقوق محفوظة © لوزارة الاعلام</Text>
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
    About


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