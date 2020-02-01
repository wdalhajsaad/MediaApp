import React from 'react'
import {
StyleSheet,
Text,
View,
ScrollView,
ImageBackground,
Image,
TouchableOpacity,
TextInput
} from 'react-native';
import Styles from '../Styles/Styles';
//import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class News extends React.Component {
     constructor(props) {
    super(props);

    this.state = {
      loading: false,
      NewsList: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    //  Uid:this.props.navigation.state.params.Uid,
    };
  }

  componentDidMount() {
   // console.log('here insid  11111 ');
    this.GetNewsAPI();
   
  }

   GetNewsAPI = () => {
  
    const url = `https://www.media.gov.sa/v3/mobile-apps/news/InternalPortal`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          NewsList: res,
         // error: res.error || null,
         // loading: false,
         // refreshing: false
        });
        console.log('here insid api');
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log(error);
      });
  };
  GetNewsCards =()=>{
      const data = this.state.NewsList;

return (
         // data.map((u.i))
         this.state.NewsList.map((u,i)=>{
    alert(u.title)
})
   
      );
     // alert(data.);
     
  }
  render(){
        const dt = this.state.NewsList;
return (
<View style={Styles.Maincontainer}>
<ScrollView>
 {this.GetNewsCards()}
 
</ScrollView>
</View>
)
}
}