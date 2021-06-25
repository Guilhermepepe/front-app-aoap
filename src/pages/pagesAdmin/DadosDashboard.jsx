import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect,Component } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardType, TouchableOpacity, ImageBackground, FlatList, ScrollView,  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { FontAwesome,Ionicons,AntDesign,Fontisto } from '@expo/vector-icons';

import api from '../../services/api'




class DadosDashboard extends Component{
   constructor(props){
     super(props)

     this.state = {
       consultas : []
     }
   }

   async componentDidMount(){
     const response = await api.get('/usuarios/admin')
     
     this.setState({
       consultas: response.data
       
     })
     
     
   }

   render(){
     return(
       <View >
       <FlatList
          data={this.state.consultas}
          keyExtractor={item => item.toString()}
          renderItem={ ({item}) => 
         <>
         <Text style={{marginTop:'24%',fontSize:44, fontWeight:'bold',marginLeft:'0%',textAlign:'left',color:'white'}}>Dashboard</Text>
         <Fontisto name="line-chart" size={70} color="#ff4e50" style={{ position: 'absolute', left: '2%',top:'28%' }}  />

         
         <View style={{borderColor:'#5f72bd', borderWidth:2,borderRadius:29,marginTop:'48%',height:270}}>
         
         <LinearGradient colors={[ '#2575fc','#6a11cb',]} style={styles.linearGradient}>
         <Text style={{fontSize:19,marginLeft:'2%',color:'white',fontWeight:'bold',marginTop:22}}>Consultas feitas nos ultimos 7 dias</Text>
         
         
         <Text style={{top:'20%',textAlign:'center',borderColor:'#00dbde',fontSize:34, borderWidth:3,borderRadius:35,width:82,height:80,alignSelf:'center',textAlignVertical:'center',borderLeftWidth:5,borderBottomWidth:3,color:'white',fontWeight:'bold',borderRightWidth:1.5}}> {item.dados}</Text>
         </LinearGradient>
         </View>
         
         </> }
         />
       </View>
     )
   }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
})

export default DadosDashboard;