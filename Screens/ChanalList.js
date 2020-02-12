import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,Image,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import FormsStyle from '../Styles/FormsStyle';
import { Colors } from '../Styles/Colors';
import MenuStyle from "../Styles/MenuStyle";
import { FlatGrid } from 'react-native-super-grid';

const deviceWidth = Dimensions.get('window').width;
const DATA = [
  {
    id: 1,
    title: 'القناة الاولى',
    Pic: require('../ChanalsAssest/channel-1.jpg'),
    url:''
  },
  {
    id: 2,
    title: 'فعاليات ',
    Pic: require('../ChanalsAssest/channel-1.jpg'),
    url:''
  },
 
];
class ChanalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const items = [
        {
             { name: 'القناة الاولى', code: '#fff', pic:require('../ChanalsAssest/channel-1.jpg')}, 
             { name: 'الرياضية', code: '#fff',pic:require('../ChanalsAssest/channel-2.jpg') },
             { name: 'SBC', code: '#fff' ,pic:require('../ChanalsAssest/channel-3.jpg')},
             { name: 'القران الكريم', code: '#fff' ,pic:require('../ChanalsAssest/channel-5.jpg')},
             { name: 'الإخبارية', code: '#fff',pic:require('../ChanalsAssest/channel-6.jpg') },
             { name: ' فعاليات', code: '#fff',pic:require('../ChanalsAssest/channel-7.jpg') },
        }
    ];
const radois=[
     { name: 'إذاعة الرياض', code: '#fff',pic:require('../ChanalsAssest/radio-1.jpg') },
       { name: 'إذاعة جدة ', code: '#fff' ,pic:require('../ChanalsAssest/radio-2.jpg')},
      { name: 'اذاعة القران الكريم', code: '#fff',pic:require('../ChanalsAssest/radio-3.jpg') }, 
      { name: 'MIDNIGHT BLUE', code: '#fff' ,pic:require('../ChanalsAssest/radio-4.jpg')},
       { name: 'MIDNIGHT BLUE', code: '#fff' ,pic:require('../ChanalsAssest/radio-5.jpg')},
     ]
 
    return (
      <ScrollView style={{backgroundColor: Colors.LIGHTGRAY,flex:1}}>
       <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity>
          <Image
          source={item.pic}
         style={{width:165,height:120,}}
         resizeMode='contain'
          />
          <View style={{flex:1,backgroundColor:'#006749',alignItems:'center'}}>
            <Text style={styles.itemName}>{item.name}</Text>
           </View>
            </TouchableOpacity>
          </View>
        )}
      />

      <View><Text>القنوات الاذاعية</Text></View>
      <FlatGrid
        itemDimension={130}
        items={radois}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity>
          <Image
          source={item.pic}
         style={{width:165,height:120,}}
         resizeMode='contain'
          />
          <View style={{flex:1,backgroundColor:'#006749',alignItems:'center'}}>
            <Text style={styles.itemName}>{item.name}</Text>
           </View>
            </TouchableOpacity>
          </View>
        )}
      />
      </ScrollView>
  
    );
  }
}const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    alignItems:'center',
    //padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
     fontFamily:'Montserrat'
    //fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
export default ChanalList;
