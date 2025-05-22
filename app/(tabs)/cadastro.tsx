import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_MODELO = '@cadastro:modelo';
const STORAGE_KEY_COR = '@cadastro:cor';
const STORAGE_KEY_PLACA = '@cadastro:placa';

export default function CadastroScreen() {
  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');
  const [placa, setPlaca] = useState('');

  useEffect(() => {
    loadDados();
  }, []);

  const loadDados = async () => {
    try {
      const storedModelo = await AsyncStorage.getItem(STORAGE_KEY_MODELO);
      if (storedModelo !== null) {
        setModelo(storedModelo);
      }
      const storedCor = await AsyncStorage.getItem(STORAGE_KEY_COR);
      if (storedCor !== null) {
        setCor(storedCor);
      }
      const storedPlaca = await AsyncStorage.getItem(STORAGE_KEY_PLACA);
      if (storedPlaca !== null) {
        setPlaca(storedPlaca);
      }
    } catch (error) {
      Alert.alert('Erro ao carregar os dados!', error.message);
    }
  };

  const saveDados = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_MODELO, modelo);
      await AsyncStorage.setItem(STORAGE_KEY_COR, cor);
      await AsyncStorage.setItem(STORAGE_KEY_PLACA, placa);
      console.log('Sucesso!', 'Dados salvos com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao salvar os dados!', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fundo}>

      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Modelo da moto"
        value={modelo}
        onChangeText={setModelo}
        placeholderTextColor="#999"
        />

      <TextInput
        style={styles.input}
        placeholder="Cor da moto"
        value={cor}
        onChangeText={setCor}
        placeholderTextColor="#999"
        />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={placa}
        onChangeText={setPlaca}
        placeholderTextColor="#999"
        />

      <TouchableOpacity style={styles.button} onPress={saveDados}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <View style={styles.dataContainer}>
        <Text style={styles.loadedText}>Modelo da moto: {modelo || 'Nenhum salvo'}</Text>
        <Text style={styles.loadedText}>Cor: {cor || 'Nenhum salvo'}</Text>
        <Text style={styles.loadedText}>Placa: {placa || 'Nenhuma salva'}</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF9F9',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#243B55',
    color: '#FFF9F9',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#34548A',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  loadedText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'italic',
  },
  fundo: {
    backgroundColor: '#465f73',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%'
  }
});