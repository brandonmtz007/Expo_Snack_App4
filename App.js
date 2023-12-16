import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Constants from 'expo-constants';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [accion, setAccion] = useState(false);
  const [aventura, setAventura] = useState(false);
  const [cienciaFiccion, setCienciaFiccion] = useState(false);
  const [superHeroes, setSuperHeroes] = useState(false);
  const [terror, setTerror] = useState(false);
  const [resultado, setResultado] = useState('');

  MostrarResultado = () => {
    var s = 'Hola ' + nombre + ', te gustan las películas de: ';
    if (accion) {
      s = s + ' acción';
    }
    if (aventura) {
      s = s + ' aventura';
    }
    if (cienciaFiccion) {
      s = s + ' ciencia ficción';
    }
    if (superHeroes) {
      s = s + ' super héroes';
    }
    if (terror) {
      s = s + ' terror';
    }
    setResultado(s);
  };

  return (
    <View style={{ padding: 10, fontSize: 24 }}>
      <Text
        style={{
          padding: 15,
          fontSize: 24,
          backgroundColor: 'orange',
          color: 'white',
          textAlign: 'center',
        }}>
        Preferencias de Películas
      </Text>

      <TextInput
        style={{
          height: 40,
          backgroundColor: 'green',
          color: 'white',
          fontWeight: 'bold',
          borderColor: 'green',
          borderWidth: 2,
          padding: 5,
          marginTop: 10,
        }}
        placeholder="Nombre"
        placeholderTextColor="white"
        onChangeText={(nombre) => setNombre(nombre)}
      />

      <CheckBox
        title="Acción"
        checked={accion}
        onPress={() => setAccion(!accion)}
      />
      <CheckBox
        title="Aventura"
        checked={aventura}
        onPress={() => setAventura(!aventura)}
      />
      <CheckBox
        title="Ciencia Ficción"
        checked={cienciaFiccion}
        onPress={() => setCienciaFiccion(!cienciaFiccion)}
      />
      <CheckBox
        title="Super Héroes"
        checked={superHeroes}
        onPress={() => setSuperHeroes(!superHeroes)}
      />
      <CheckBox
        title="Terror"
        checked={terror}
        onPress={() => setTerror(!terror)}
      />

      <TouchableOpacity
        style={{ height: 60, backgroundColor: 'blue', marginTop: 10 }}
        onPress={() => {
          this.MostrarResultado();
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            textAlignVertical: 'center',
            textAlign: 'center',
            marginTop: 10,
            top: 12,
          }}>
          Mostrar Resultado
        </Text>
      </TouchableOpacity>

      <Text style={{ padding: 10, fontSize: 32 }}>{resultado}</Text>
    </View>
  );
}
