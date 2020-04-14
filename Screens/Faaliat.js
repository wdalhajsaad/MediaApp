import React, { Component } from 'react';
import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native';
import * as API from '../API/API'
import Fonts from '../Styles/Fonts'
import Spinner from '../Components/Spinner';
import Styles from "../Styles/Styles";
export default class Faaliat extends Component {
       static navigationOptions  = ({ navigation }) => ({
    headerStyle: { backgroundColor: "#006749",textAlign: 'center',},
    title:' فعاليات',
    headerTitleStyle : { flex:1 ,textAlign: 'center' ,color:'white',paddingVertical: 15,fontWeight:'normal',fontFamily:'Almarai' },
    headerTitleAlign: 'center'
  
  });
 constructor(props) {
    super(props);
    this.state = { 
        data:[],
        Loading:true,
        isFetching: false,
        page:1,

    };
  } 
  GetDate(data){
   //alert(data);
   var i=0;
   var res=data[0]+"/"+data[1]+"/"+data[2]
   
   return res ;

 }
  handelRefresh=()=>{
     this.setState({
      isFetching:true,
       },()=>{
          this.GetadnSetData();
       })

  
 

  }

  handelMore=()=>{
   this.setState({
      page:this.state.page + 1,
       },()=>{
          this.GetadnSetData();
       })

  }

   componentDidMount=()=> {
    this.GetadnSetData()

  }
    HandelClick=(Item)=>{
      this.props.navigation.navigate('FaaliatDetails',{Item:Item})
     }


 
 
    GetadnSetData=()=>{
    const {page,data}=this.state
     API.GetFaaliat(page).then((res)=>{
    //alert(JSON.stringify(res.Data))
 
     this.setState({
       data:page ===1 ? res.Data : [...data,...res.Data],
          Loading:false,
          isFetching: false 
              });
  }).
  catch(err=>{

    alert(err);
  });

  }

    RenderSpinner() {

    if (this.state.Loading) {
      return (
        <Spinner SizeSpinner='large' />
      );
    }
  }

   FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#C7C7C7",
      }}
    />
  );
}

  render() {
      const {isFetching} = this.state;
    return (
    
      <View style={{paddingLeft:10,paddingRight: 10,}}>
      <View style={Styles.statusBar} ></View>
      
        {this.RenderSpinner()}
         <FlatList
              data={this.state.data}
              keyExtractor={i=>i.Id}
              onRefresh={() => this.handelRefresh}
              refreshing={isFetching}
              onEndReached={this.handelMore} 
              ItemSeparatorComponent = { this.FlatListItemSeparator }
              
              //ListEmptyComponent={this._listEmpty}
              renderItem={({ item,rowMap }) => (
                 <TouchableOpacity
                      onPress={() =>  {
                          //const li ={item.link};
                          this.HandelClick(item)
                          //this.HandelClick(item)
                         // Linking.openURL(item.guid)
                          }}
                    >
              <View style={{flexDirection: 'row',}} >
              <View>
              <Image source={{uri : item.Logo}} style={{width:100,height:100, borderRadius: 3,marginTop: 5,marginBottom: 5,marginRight: 15,}} />
              </View>
              <View style={{flex:1,alignContent: 'center',justifyContent:'center'}}>
              <Text style={Fonts.NewsTitleList}>{item.Title}</Text>
              <View style={{flexDirection: 'row', justifyContent:'flex-end' }}>
              <Text style={Fonts.TextUnder} >{this.GetDate(item.StartDate)}</Text>
              <Text style={Fonts.TextUnder} >{item.CityName+" -"}</Text>
           
              </View>
             
              </View>
              </View>
              </TouchableOpacity>
              )}
              
              
               />
      </View>
    );
  }
}

 
