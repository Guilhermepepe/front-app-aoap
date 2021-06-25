import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View, Image, TextInput, KeyboardType, TouchableOpacity, ImageBackground, Modal, ScrollView, Platform } from 'react-native';
import { Ionicons, AntDesign, Fontisto, EvilIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // importa icones do expo
import { useNavigation } from '@react-navigation/core';
import { RadioButton, Button, useTheme } from 'react-native-paper'
import DatePicker from 'react-native-datepicker'
import api from '../services/api'

import Relogio from '../../components/Relogio'









export default function Agendamento() {

    

   

    const [value, setValue] = React.useState('');
    const [valueEspec, setValueEspec] = React.useState('');
    const [valuehora, setValuehora] = React.useState('');
    const [date, setDate] = useState('');
    


    



    function onSubmit() {
       
        api.post('/agendamentos/consulta', { value, valueEspec, date, valuehora })
        alert('Consulta agendada!')
        
    }

    const navigation = useNavigation()


    function handle() {
        navigation.navigate('Home');
    }

    

    return (
        <ImageBackground style={styles.backgroundImage}
            source={require('../assets/wallpaper.png')}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <FontAwesome5 name="arrow-alt-circle-left" size={25} color="white" style={{ position: 'absolute', left: 20 }} onPress={handle} />
                    <Image
                        source={require('./logo.png')}
                        style={{ width: 96, height: 100 }}
                        resizeMode='contain'
                    />

                </View>


                <ScrollView >
                    <View style={styles.main}>
                        <View style={{ position: 'relative' }}>
                            <Text style={styles.texto}>Agendamentos</Text>
                            <Image
                                source={require('../assets/batidas-.png')}
                                style={{ width: 350, left: 11, height: 100, top: 75, marginBottom: 120 }}
                            />
                            <Text style={{ position: 'relative', fontSize: 18, marginLeft: 10, marginRight: 10, textAlign: 'center', fontWeight: '900' }}>Deseja efetuar um agendamento?, Vamos lá !</Text>

                            <View style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                top: 12,
                                margin: 10
                            }}></View>
                        </View>

                        <Text style={{ position: 'relative', marginTop: 35, fontSize: 25, fontWeight: 'bold', marginLeft: 14 }}>Hospitais</Text>
                        <Text style={{ position: 'relative', marginTop: 15, fontSize: 12.5, fontWeight: 'bold', marginLeft: 14, marginBottom: 22 }}>Selecione o hospital que seja agendar sua consulta :</Text>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>

                            <RadioButton.Item label="HAOC" value="HAOC" color="#4169E1" />


                            <RadioButton.Item label="Hospital Dia" value="Dia" color="#4169E1" />


                            <RadioButton.Item label="Mini Hospital" value="Minihosp" color="#4169E1" />


                        </RadioButton.Group>

                        <View style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            top: 14,
                            margin: 10
                        }}></View>

                        <View style={{ marginTop: 35 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 14 }}>Especialidades</Text>
                            <Text style={{ marginTop: 15, fontSize: 12.5, fontWeight: 'bold', marginLeft: 14, marginBottom: 22 }}>Selecione a especialidade que deseja agendar sua consulta : </Text>
                            <RadioButton.Group onValueChange={valueEspec => setValueEspec(valueEspec)} value={valueEspec}>
                                <RadioButton.Item label="Cardiologia" value="cardiologia" color="#4169E1" />
                                <RadioButton.Item label="Endoscopia" value="endoscopia" color="#4169E1" />
                                <RadioButton.Item label="Psiquiatria" value="psiquiatria" color="#4169E1" />
                                <RadioButton.Item label="Dermatologia" value="dermatologia" color="#4169E1" />
                                <RadioButton.Item label="Neurologia" value="neurologia" color="#4169E1" />
                                <RadioButton.Item label="Cirurgia" value="cirurgia" color="#4169E1" />
                                <RadioButton.Item label="Urologia" value="urologia" color="#4169E1" />
                                <RadioButton.Item label="Ortopedia" value="ortopedia" color="#4169E1" />
                            </RadioButton.Group>

                            <View style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                top: 14,
                                margin: 10
                            }}></View>
                        </View>

                        <View style={{ marginTop: 35 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 14 }}>Data da consulta</Text>
                            <Text style={{ marginTop: 15, fontSize: 12.5, fontWeight: 'bold', marginLeft: 14, marginBottom: 22 }}>Selecione a data da sua consulta : </Text>

                            <DatePicker

                                date={date} // Initial date from state
                                mode="date" // The enum of date, datetime and time
                                placeholder="DD/MM/AAAA"
                                format="YYYY-MM-DD"

                                maxDate="2022-01-01"
                                confirmBtnText="OK"
                                cancelBtnText="Cancelar"
                                androidMode='calendar'
                                onDateChange={(date) => {
                                    setDate(date);
                                }}

                                style={styles.calendario}

                            />

                                <Relogio setarHora={setValuehora}> </Relogio>



                        </View>
                        <TouchableOpacity style={{ marginTop: 30, left: 92 }}
                            onPress={() => {
                                if (value == '' || valueEspec == '' || valuehora == '' || date=='' ) {
                                    
                                    alert('não foi possivel realizar a consulta')
                                }

                                else {
                                    alert('Sua consulta está marcada no hospital ' + `${value}` + " para realizar uma sessão de " + `${valueEspec}` + " no Dia : " + `${date.toLocaleString().slice(0,10).split('-').reverse().join('/')}` + " Às " + `${valuehora}` + " horas")
                                    onSubmit()
                                   
                                }
                            }

                            }
                        >
                            <Text style={{ fontSize: 18, backgroundColor: 'blue', width: 160, textAlign: 'center', borderRadius: 13, height: 42, textAlignVertical: 'center', fontWeight: 'bold', color: 'white' }}>Agendar consulta</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>


                <StatusBar
                    hidden={false}
                    backgroundColor='#4169E1'
                    translucent={false}
                    networkActivityIndicatorVisible={true} />
            </View>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'center'

    },
    header: {

        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#4169E1',
        top: 0,
        height: 100,
        textAlign: 'center',
        alignSelf: 'stretch',

    },
    main: {


        height: 1690,
        margin: 24,
        marginBottom: 0,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 13

    },
    texto: {
        textAlign: 'center',
        fontSize: 33,
        top: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    calendario: {
        left: 8,
        top: -4,
        width: 330,
        borderRadius: 4,
        borderColor: 'blue',
        borderWidth: 1,


    }
})


