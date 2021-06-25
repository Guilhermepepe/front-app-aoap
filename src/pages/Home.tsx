import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardType, TouchableOpacity, ImageBackground, Modal, ScrollView, Linking, PermissionsAndroid, Platform, Animated,Alert } from 'react-native';
import { Ionicons, AntDesign, Fontisto, EvilIcons, MaterialIcons } from '@expo/vector-icons'; // importa icones do expo
import { useNavigation } from '@react-navigation/core';
import api from '../services/api'

import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import tsconfig from '../../tsconfig.json'





export default function Home() {
    

    function minhaFuncao() {
        Alert.alert('EMERGÊNCIA ACIONADA','Obtendo Localização...',[{}]);
       
    }
    
    function minhafuncao3(){
        setTimeout(minhaFuncao,1000)
        setTimeout(getLocation,8200)
    }

    const minhafuncao4 = () =>
    Alert.alert(
      "Emergência",
      "Tem certeza que deseja chamar uma equipe de ambulância ?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => minhafuncao3() }
      ]
    );

    // function funcaozinha(){
    //     Geolocation.getCurrentPosition(info => console.log(info));
    // }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              console.log('Permission to access location was denied');
              return;
            }
            
          })();
    })

    

    //Retorna a posição e endereço do usuario
    async function getLocation() {
        let location = await Location.getCurrentPositionAsync({});
        Geocoder.init(tsconfig.geocodingAPI)
        Geocoder.from(location.coords.latitude, location.coords.longitude)
		.then(json => {
            var  number = json.results[0].address_components[0].short_name;
            var  street= json.results[1].address_components[1].short_name;
            var  Bairro= json.results[2].address_components[2].short_name;
            
            
             Alert.alert('LOCALIZAÇÃO ENCONTRADA',`Uma equipe médica está indo até você na localização : \n
${street} - ${number} - ${Bairro}  `)
            
            
            
		})
		.catch(error => console.warn(error));
    }


    const navigation = useNavigation()

    function handle() {
        api.post('/usuarios/logout')
        alert('Conta deslogada')
        navigation.navigate('Login');

    }
    function handle3() {

        navigation.navigate('MeusAgendamentos');

    }

    function handle2() {
        navigation.navigate('Agendamento');
    }

    
    return (
        <ImageBackground style={styles.backgroundImage}
            source={require('../assets/wallpaper.png')}>
            <View style={styles.container}>



                <View style={styles.header}>
                    <Image
                        source={require('./logo.png')}
                        style={{ width: 96, height: 100 }}
                        resizeMode='contain'
                    />

                    <MaterialIcons name="exit-to-app" size={27} color="white" style={{ position: 'absolute', left: 330 }} onPress={handle} />

                </View>

                <View style={styles.main}>
                    <TouchableOpacity style={{
                        borderColor: '#4169E1', borderWidth: 1, top: 30, height: 88, width: 250, marginLeft: 75, alignItems: 'center',
                        justifyContent: 'center', backgroundColor: "white", borderRadius: 40
                    }} onPress={handle2}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#4169E1', marginLeft: -50, marginTop: -4 }}>Agendamentos</Text>
                        <EvilIcons name="arrow-right" size={27} color="#4169E1" style={{ position: 'absolute', left: 187 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handle3}
                        style={{
                            borderColor: '#4169E1', borderWidth: 1, top: 160, height: 88, width: 250, marginLeft: 75, alignItems: 'center',
                            justifyContent: 'center', backgroundColor: "white", borderRadius: 40
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#4169E1', marginLeft: -50, marginTop: -2 }}>Seus agendamentos</Text>
                        <EvilIcons name="arrow-right" size={27} color="#4169E1" style={{ position: 'absolute', left: 195 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={{ left: 75, top: 7 }} onPress={() => {
                        Linking.openURL(
                            'http://www.facebook.com/aoap.fiec/'
                        );
                    }}>
                        <AntDesign name="facebook-square" size={33} color="black" />
                        <Text style={{ left: -11, fontWeight: 'bold', marginTop: 5 }}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ right: 75, top: 7, alignItems: 'flex-end', position: 'absolute' }} onPress={() => {
                        Linking.openURL(
                            'http://www.instagram.com/aoap_fiec/'
                        );
                    }}>
                        <Fontisto name="instagram" size={33} color="black" />
                        <Text style={{ left: 17, fontWeight: 'bold', marginTop: 5 }}>Instagram</Text>
                    </TouchableOpacity>

                </View>
                
                <TouchableOpacity
                    onPress={minhafuncao4}
                    style={{
                        borderColor: 'red', borderWidth: 1, top: 110, height: 53, width: 55, marginLeft: '82%', alignItems: 'center',
                        justifyContent: 'center', backgroundColor: "red", borderRadius: 180
                    }}>
                   <Fontisto name="ambulance" size={21} color="white" />

                </TouchableOpacity>
               

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
    footer: {
        backgroundColor: 'white',
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        alignSelf: 'stretch',
        height: 76,
        display: 'flex'
    },
    main: {

        width: 600,
        height: 400,
        top: 110,

        textAlign: 'center',

    }
})

