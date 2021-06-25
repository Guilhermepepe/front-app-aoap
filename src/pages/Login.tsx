import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View , Image, Button, TextInput, KeyboardType, TouchableOpacity , ImageBackground, Modal, SafeAreaView} from 'react-native';
import{Ionicons} from '@expo/vector-icons'; // importa icones do expo
import { useNavigation } from '@react-navigation/core';
import DatePicker from 'react-native-datepicker';
import api from '../services/api'
import { useEffect } from 'react';




export default function Login() {
  
  
  

 const[email, setEmail ] = useState('') // criando um estado, sendo email o valor inicial, e o setemail o valor que sera passado dentro do email
 const[senha, setSenha ] = useState('') // no usestate indica que vai começar inicialmente vazio
 const[open, setOpen]= useState(false)
 const navigation= useNavigation()


function handleStart(){
  navigation.navigate('cadastro');
}

function handleStart2(){
  if(email=='aoap@gmail.com'){
  navigation.navigate('HomeAdmin')
  }
  else{
    navigation.navigate('Home')}
}

function onSubmit(){
  api.post('/usuarios/login',{email,senha}).then(() =>{
    (data: any) =>
    alert('')
    alert('Logado com sucesso!')
    handleStart2()
  })
  .catch(err=>alert("Email ou senha incorretos !"))
  
}


  return (
    <View style={styles.container}>
     
      
          
      <View style={styles.header}>
        
      <View style={styles.logo}></View>
        
      </View>
      
      <View style={styles.box1} ><Image
        source={require('./logo.png')}
        style={{width: 126, height: 130}}
        resizeMode='contain'
        
        
        />

      <View style={styles.cadeado}>
        
          <Ionicons name="lock-closed" size={17} color="#FFF"/>
        
      </View>
      <View style={styles.user}>
        
          <Ionicons name="person" size={17} color="#FFF"/>
        
      </View>

        <Text style={styles.textbox1}></Text>
        <TextInput style={{height: 36,width:260, borderColor:"white",color:"white", borderBottomWidth:1.1, top:30, borderRadius:13, textAlign:"center",paddingLeft:32,paddingRight:32} }
         placeholder='E-mail de usuario'
        
         
         
         value={email} // o valor de estado inicial
         onChangeText={ (email) => setEmail(email)} // o valor que vai ser passado e vai ser imposto dentro do valor email

         />
         <TextInput style={{height: 36,width:260, borderColor:"white",color:"white", borderBottomWidth:1.1 , top:70, borderRadius:13, textAlign:"center",paddingLeft:32,paddingRight:32 } }
         placeholder='Senha'
         secureTextEntry={true}
         
         value={senha} // o valor de estado inicial
         onChangeText={ (senha) => setSenha(senha)}
         />
         <View style={{ top:105, position:'relative', width:180, borderRadius:15}}>

         <TouchableOpacity style={{backgroundColor:'blue', borderRadius:14, height:35,borderWidth:0.1, shadowRadius:20,}}
         
         onPress={() => { //quando button for pressionado
          if (email.trim() === "" || senha.trim() === "") {
            alert('Você precisa preencher os requisitos para logar !')
          } else {
            
           
           onSubmit()
          }
        }}
        >
         
         <Text style={{textAlign:'center',position:'relative',top:6,fontWeight:'bold', color:'white',}}>Login</Text>
        
        </TouchableOpacity>
    </View>
    <View style={styles.linkzinho}>

      

      <TouchableOpacity 
      onPress={handleStart}
       
      >
        <Text style={styles.textolink} > Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
    
        </View >
        
      <StatusBar 
        hidden = {false}
        backgroundColor = '#4169E1'
        translucent = {false}
        networkActivityIndicatorVisible = {true}/>
        
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    
  },
  logo: {
   
    
    
    
    
    
  },
  header:{
  
   alignItems:'center',
   justifyContent:'center',
   
    backgroundColor:'#4169E1',
    top:0,
    height:90,
    textAlign: 'center',
    alignSelf: 'stretch',
    

  },
  box1: {
    
    position:'relative',
    backgroundColor: '#4169E1',
    alignItems:'center',
    alignSelf: 'stretch',
   borderColor:'black',
   borderWidth:0,

    height:600,
    
    borderRadius: 12,
    margin:10,
    top:20
    
  },

  textbox1:{
  fontSize: 25,
  marginTop: 20,
  color:'blue',
  fontWeight:'700',
  
  },
  linkzinho: {
    position:'relative',
    marginTop: 130,
    color: 'purple',
    left:3
  }
  ,textolink:{
    color: 'purple',
    fontWeight: '400'
  },

  cadeado:{
    position:'absolute',
    top:300,
    left:68
  },

  user:{
    position:'absolute',
    top:222,
    left:68
  }
  
});

