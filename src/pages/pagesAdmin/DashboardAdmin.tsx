import React, { useState } from 'react'; //usestate usado para fazer inserçoes apartir do inputtext
import { StyleSheet, Text, View,Image  } from 'react-native';
import { FontAwesome5,Ionicons } from '@expo/vector-icons'; // importa icones do expo
import { useNavigation } from '@react-navigation/core';
import DadosDashboard from './DadosDashboard'





export default function DashboardAdmin() {
  
  
//   useEffect(() => {
//     api.get('/usuarios/admin').then(response =>{
//       setMsg(response.data.toString())
     
//     },[])

   
// })

    const navigation = useNavigation()
    function handle() {
        navigation.navigate('HomeAdmin');
    }

  return (


   <View style={styles.container}>
      <FontAwesome5 name="arrow-alt-circle-left" size={25} color="white" style={{ position: 'absolute', left: 20,top:'5%' }} onPress={handle} />
      <Image
                        source={require('../logo.png')}
                        style={{ width: 110, height: 80,position:'absolute',top:'9%',left:'69%' }}
                        resizeMode='contain'
                    />

     

<View style={{marginLeft:'5%', alignContent:'flex-start',alignSelf:'flex-start'}}>
      <DadosDashboard></DadosDashboard>
      </View>

<Text style={{position:'absolute', top:'90%',color:'white',fontStyle:'italic'}}>© Atendimento Online ao Paciente </Text>
   
   
      
    </View>
      
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});