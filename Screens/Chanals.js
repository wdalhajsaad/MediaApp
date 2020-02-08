import React, { Component } from 'react';
import { View, Text ,Dimensions,StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
 
class Chanals extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
 
    return (
     <View>
     <Text>Chanals</Text>
     </View>
    );
  }
}



export default Chanals;
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});