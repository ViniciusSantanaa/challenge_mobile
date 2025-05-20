import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_NOME = '@cadastro:nome';
const STORAGE_KEY_EMAIL = '@cadastro:email';
const STORAGE_KEY_SENHA = '@cadastro:senha';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    loadDados();
  }, []);

  const loadDados = async () => {
    try {
      const storedNome = await AsyncStorage.getItem(STORAGE_KEY_NOME);
      if (storedNome !== null) {
        setNome(storedNome);
      }
      const storedEmail = await AsyncStorage.getItem(STORAGE_KEY_EMAIL);
      if (storedEmail !== null) {
        setEmail(storedEmail);
      }
      const storedSenha = await AsyncStorage.getItem(STORAGE_KEY_SENHA);
      if (storedSenha !== null) {
        setSenha(storedSenha);
      }
    } catch (error) {
      Alert.alert('Erro ao carregar os dados!', error.message);
    }
  };

  const saveDados = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_NOME, nome);
      await AsyncStorage.setItem(STORAGE_KEY_EMAIL, email);
      await AsyncStorage.setItem(STORAGE_KEY_SENHA, senha);
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
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#999"
        />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
        keyboardType="email-address"
        />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#999"
        secureTextEntry
        />

      <TouchableOpacity style={styles.button} onPress={saveDados}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <View style={styles.dataContainer}>
        <Text style={styles.loadedText}>Nome: {nome || 'Nenhum salvo'}</Text>
        <Text style={styles.loadedText}>E-mail: {email || 'Nenhum salvo'}</Text>
        <Text style={styles.loadedText}>Senha: {senha ? 'Salva' : 'Nenhuma salva'}</Text>
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
    backgroundColor: '#58afdd',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%'
  }
});