import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardType, TouchableOpacity, ImageBackground, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // importa icones do expo
import { useNavigation } from '@react-navigation/core';
import DatePicker from 'react-native-datepicker'
import api from '../services/api'
import { TextInputMask } from 'react-native-masked-text'


export default function cadastro() {

  const [nome, setNome] = useState('') // criando um estado, sendo email o valor inicial, e o setemail o valor que sera passado dentro do email
  const [bairro, setBairro] = useState('') // criando um estado, sendo email o valor inicial, e o setemail o valor que sera passado dentro do email
  const [cidade, setCidade] = useState('')
  const [ruanum, setRuanum] = useState('')
  const [cep, setCep] = useState('') // criando um estado, sendo email o valor inicial, e o setemail o valor que sera passado dentro do email
  
  const [datanasc, setDatanasc] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  



  const navigation = useNavigation()



  function handleStart() {
    navigation.navigate('Login');
  }

  const [date, setDate] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View><Image
          source={require('./logo.png')}
          style={{ width: 106, height: 130 }}
          resizeMode='contain'
        />

        </View>

      </View>


      <ScrollView>
        <View style={styles.main}>

          <Text style={{ backgroundColor: "blue", color: "white", fontWeight: "bold", fontSize: 30, top: 0, borderTopLeftRadius: 16, borderTopRightRadius: 16, width: 324, textAlign: 'center', height: 70, textAlignVertical: "center" }}>Cadastre-se</Text>
          <Text style={{ top: 30, textAlign: "center", position: 'relative', color: 'red' }} >Preencha os campos abaixo{"\n"} para começar no AOAP :</Text>


          <Text style={{ top: 70, fontSize: 19, left: -70 }}>Nome Completo *</Text>
          <TextInput style={{ borderWidth: 1, position: 'relative', top: 80, borderRadius: 4, width: 280, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingLeft: 3, paddingRight: 3 }}
            value={nome} // o valor de estado inicial
            onChangeText={(nome) => setNome(nome)}

          />


          <Text style={{ top: 100, fontSize: 19, left: -112 }}>Bairro *</Text>
          <TextInput style={{ borderWidth: 1, position: 'relative', top: 110, borderRadius: 4, width: 280, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingLeft: 3, paddingRight: 3 }}
            value={bairro} // o valor de estado inicial
            onChangeText={(bairro) => setBairro(bairro)}
          />

          <Text style={{ top: 140, fontSize: 19, left: -107 }}>Cidade *</Text>
          <TextInput style={{ borderWidth: 1, position: 'relative', top: 150, borderRadius: 4, width: 280, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingLeft: 3, paddingRight: 3 }}
            value={cidade} // o valor de estado inicial
            onChangeText={(cidade) => setCidade(cidade)}
            
          />

<Text style={{ top: 180, fontSize: 19, left: -120 }}>Rua *</Text>
          <TextInput style={{ borderWidth: 1, position: 'relative', top: 190, borderRadius: 4, width: 280, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingLeft: 3, paddingRight: 3 }}
            value={ruanum} // o valor de estado inicial
            onChangeText={(ruanum) => setRuanum(ruanum)}
            
          />

<Text style={{ top: 220, fontSize: 19, left: -120 }}>CEP *</Text>
          <TextInputMask style={{ borderWidth: 1, position: 'relative', top: 230, borderRadius: 4, width: 280, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingLeft: 3, paddingRight: 3 }}
            type={'custom'}
            options={{
              /**
               * mask: (String | required | default '')
               * the mask pattern
               * 9 - accept digit.
               * A - accept alpha.
               * S - accept alphanumeric.
               * * - accept all, EXCEPT white space.
              */
              mask: '99999-999'
            }}
            value={cep}
            onChangeText={(cep) => setCep(cep)}
            
          />

          


          <Text style={{ top: 260, fontSize: 19, left: -54 }}>Data de nascimento *</Text>
          <DatePicker

            date={datanasc} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="DD/MM/AAAA"
            format="YYYY-MM-DD"
            
            maxDate="05-12-01"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            androidMode='spinner'
            onDateChange={(datanasc) => {
              setDatanasc(datanasc);
            }}

            style={{ borderWidth: 1, top: 270, borderRadius: 4, width: 290, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingRight: 3 }}



          />

          <Text style={{ top: 295, fontSize: 19, left: -58 }}>Endereço de email *</Text>
          <TextInput style={{ borderWidth: 1, position: 'relative', top: 305, borderRadius: 4, width: 280, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingLeft: 3, paddingRight: 3 }}

            value={email} // o valor de estado inicial
            onChangeText={(email) => setEmail(email)}
            keyboardType={'email-address'}
          />

          <Text style={{ top: 325, fontSize: 19, left: -108 }}>Senha *</Text>
          <TextInput style={{ borderWidth: 1, position: 'relative', top: 335, borderRadius: 4, width: 280, left: -5, borderColor: 'blue', height: 40, fontSize: 17, paddingLeft: 3, paddingRight: 3 }}
            value={senha} // o valor de estado inicial
            onChangeText={(senha) => setSenha(senha)}
          />


          <View style={{ marginTop: 370, position: 'relative', width: 190, }}>
            <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 14, height: 45, borderWidth: 0.1, shadowRadius: 2, }}
              onPress={() => { //quando button for pressionado
                if (email.trim() === "" || senha.trim() === "" || datanasc.trim() === "" ||cep.trim() === "" || ruanum.trim() === "" || nome.trim() === "" || cidade.trim() === "" || bairro.trim()=="" ) {
                  alert(' Preencha todos os requisitos para logar !')
                }
                else if(!email.includes('@')){
                  alert('Preencha o campo de email corretamente')

                }
                
                else {
                  api.post('/usuarios/cadastro',{ nome, bairro, cidade, ruanum, cep, datanasc, email, senha})
                  alert('Cadastrado com sucesso !'),
                    handleStart()
                }
              }}>
              <Text style={{ textAlign: 'center', top: 12, fontWeight: 'bold', color: 'white', }} >Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',

  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 0,
    backgroundColor: '#4169E1',
    top: 20,
    height: 170,
    textAlign: 'center',
    alignSelf: 'stretch',


  },
  main: {
    backgroundColor: 'white',
    margin: 35,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 0
    , height: 1090,
    position: 'relative',
    top: 20,
    borderRadius: 16
  }

})

function constructor(props: any) {
  throw new Error('Function not implemented.');
}


function props(props: any) {
  throw new Error('Function not implemented.');
}
