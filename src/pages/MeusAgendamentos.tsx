import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardType, TouchableOpacity, ImageBackground, FlatList, ScrollView,  } from 'react-native';
import { Ionicons, AntDesign, Fontisto, EvilIcons, MaterialIcons, FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; // importa icones do expo
import { useNavigation } from '@react-navigation/core';
import api from '../services/api'
import Lista from '../pages/Lista'

export default function Home() {

    // const [posts, setPosts] = useState([])

    const navigation = useNavigation()
    function handle() {
        navigation.navigate('Home');
    }

    // async function getPosts() {
    //     return api.get('/historico/meusAgendamentos')
    //         .then(res => res.data )
    // }

    // async function fetchPosts() {
    //     await getPosts().then(setPosts)
    //     console.log(posts)
    // }

    // useEffect(() => {
    //     fetchPosts()
    // }, [])

    // useEffect(() => {
    //     console.log(posts)
    // }, [posts])

//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);

//   useEffect(() => {
//     api.get('/historico/meusAgendamentos')
//       .then(({ data }) => {
//         console.log("defaultApp -> data", data.agendamentos)
//         setData(data.agendamentos)
//       })
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

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

                    <FontAwesome5 name="arrow-alt-circle-left" size={25} color="white" style={{ position: 'absolute', left: 20 }} onPress={handle} />

                </View>

                <View style={styles.main}>
                    <View style={{ marginBottom: 50, top: 20 }}><Text style={{ color: 'black', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Meus agendamentos</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                        <MaterialCommunityIcons name="calendar-heart" size={45} color="red" style={{ position: 'relative', marginTop: 0, alignSelf: 'center', }} />

                    </View>

                    <View style={{ borderWidth: 1, borderColor: '#6f7571', height: 0, position: 'relative', top: 1, margin: 20 }}></View>
                    <View><Text style={styles.textotitulo}>Aqui estão seus agendamentos : </Text></View>
                    <ScrollView>
                    <Lista></Lista> 
                    </ScrollView>
                </View>
                 
                
                
                


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
        backgroundColor: 'white',
        width: '85%',
        alignSelf: 'center',
        height: 590,
        top: 30,
        color: 'white',
        textAlign: 'center',
        borderRadius: 13
    },
    textotitulo: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 13,
        marginLeft: 21,
        top: -3,
        position: 'relative',

    }
})