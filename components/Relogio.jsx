import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import TimePicker from "react-native-super-timepicker";

class Relogio extends Component {

 

  constructor() {
    super();
    this.state =  {
      time: "",
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.props.setarHora(`${hour}:${minute}`)
    this.setState({ time: `${hour}:${minute}` })
    console.log(hour)
    this.TimePicker.close();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Escolha o horário de sua consulta</Text>
        
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Horários</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.time}</Text>
        <TimePicker
          ref={(ref) => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour , minute) => this.onConfirm( hour , minute)}
          hourInterval={1}
          minuteInterval={20}
          textCancel='Cancelar'
          textConfirm='Confirmar'
          selectedHour="8"
          minHour={8}
          maxHour={16}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 0,
    
    position:'relative',
    marginTop:30
  },
  text: {
    fontSize: 20,
    marginTop: 2,
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 9,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 20,
    
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Relogio;
