import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/cadastro" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Cadastro</ThemedText>
        </TouchableOpacity>
      </Link>

      <Link href="/patios" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Buscar Pátio</ThemedText>
        </TouchableOpacity>
      </Link>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Buscar Moto</ThemedText>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF9F9',
  },
  button: {
    backgroundColor: '#243B55',
    color: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 20,
    width: '50%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
