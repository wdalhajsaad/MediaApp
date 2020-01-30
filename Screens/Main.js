import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
import Events from './Events'
import News from './News'
import Home from './Home'
import {
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} 
from 'react-navigation'
import Styles from '../Styles/Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Main() {

    return (
       <Appcontainer />
    )


}



const HomeNavigator = createBottomTabNavigator({
    Home,
    News,
    Events
},{
    navigationOptions:({navigation})=>{
       
        const {routName} =  navigation.state.routes[navigation.state.index];
        return {
            headerTitle:routName
        }
    }
})

const StackNavgitor = createStackNavigator({
    HomeNavigator:HomeNavigator,


},
{
    defaultNavigationOptions:({navigation})=>{
return{

    headerRight:(
        <FontAwesome name='bars' onPress={()=>navigation.openDrawer()} />
    )

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
}

)


const Appcontainer =createAppContainer(DrowerNav);