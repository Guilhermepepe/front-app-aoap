import React, { useState, useEffect, Component } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext

import { Fontisto} from '@expo/vector-icons';
import {  Text, View, Image } from 'react-native';


class Consultas extends Component{
    render(){
        return(
            <View style={{top:10 , borderRadius:10, backgroundColor:'#FFFAFA', borderColor:'black', borderWidth:0.8, marginBottom:30,flexDirection: 'row',height:150, marginLeft:30,marginRight:30}}>

                 < Image
                       source={require('../src/assets/medico.png')}
                       style={{ position: 'absolute', left: -6,top:'2%' ,width:75}} 
                       resizeMode='contain'
                        
                    />  

                 <Text style={{textAlignVertical: "center",marginLeft:'23%',fontSize:14,top:0,fontWeight:'bold'}}>Dr. {this.props.data.nome_medico}</Text>
                 <Text style={{marginLeft:'23%',fontSize:13,bottom:'30%',position:'absolute'}}>{this.props.data.tipo_espec}</Text>
                 <Text style={{textAlignVertical: "center",marginLeft:'54%',fontSize:14.5,fontWeight:'bold',borderWidth:0.3,backgroundColor:'white',height:30,width:90,top:'25%',textAlign:'center',position:'absolute', borderRadius:4}}> {this.props.data.dia_consulta.toLocaleString().slice(0,10).split('-').reverse().join('/')}</Text>
                 <Text style={{marginLeft:'60.5%',fontSize:15,bottom:'25%',position:'absolute',borderWidth:0.3,backgroundColor:'white',height:25,textAlign:'center',width:20,borderRadius:4}}>{this.props.data.hora_consulta.toLocaleString().slice(0,5)}</Text>
                 <Text style={{left:'5.2%',fontSize:18,bottom:'78%',position:'absolute',fontWeight:'bold',color:'#4169E1'}}>{this.props.data.nome_hosp}</Text>
                 
           
            </View>
        )
    }
}

export default Consultas