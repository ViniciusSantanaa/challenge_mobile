import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Nossos Pátios</Text>

        <ScrollView contentContainerStyle={styles.addressListContainer}>

          <View style={styles.addressItem}>
            <Text style={styles.addressText}>
              Rua Agostinho Cantu, 207, Anexo 209 – Butantã, São Paulo/SP – CEP 05501-010
            </Text>
          </View>

          <View style={styles.addressItem}>
            <Text style={styles.addressText}>
              Rua Maria Bibiana do Carmo, 208 – Parque Industrial, Campinas/SP – CEP 13031-070
            </Text>
          </View>

          <View style={styles.addressItem}>
            <Text style={styles.addressText}>
              Rua Doutor Ratisbona, 738 – Fátima, Fortaleza/CE – CEP 60411-220
            </Text>
          </View>

          <View style={styles.addressItem}>
            <Text style={styles.addressText}>
              Rua Graff, 186 – Vila Graff, Jundiaí/SP – CEP 13215-030
            </Text>
          </View>

          <View style={styles.addressItem}>
            <Text style={styles.addressText}>
              Rua Professora Nilda de São José, 321 – Santa Mônica, Uberlândia/MG – CEP 38408-076
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF9F9', 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50, 
    alignItems: 'center', 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c3e50', 
    marginBottom: 30,
    textAlign: 'center',
  },
  addressListContainer: {
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  addressItem: {
    backgroundColor: '#2c3e50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    maxWidth: 600, 
  },
  addressText: {
    color: '#ecf0f1', 
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left', 
  },
});