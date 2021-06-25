import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect,Component } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardType, TouchableOpacity, ImageBackground, FlatList, ScrollView,  } from 'react-native';
import Consultas from '../../Consultas'
import api from '../services/api'




class Lista extends Component{
   constructor(props){
     super(props)

     this.state = {
       consultas : []
     }
   }

   async componentDidMount(){
     const response = await api.get('/historico/meusAgendamentos')
     this.setState({
       consultas: response.data
     })
   }

   render(){
     return(
       <View>
         <FlatList
          data={this.state.consultas}
          keyExtractor={item => item.id.toString()}
          renderItem={ ({item}) => <Consultas data={item}/> }
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
})

export default Lista;