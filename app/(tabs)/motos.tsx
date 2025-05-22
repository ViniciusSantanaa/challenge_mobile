import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.containerPrincipal}>
      <Text style={styles.titulo}>Nossos pátios e seus setores</Text>

      <View style={styles.itemPatio}>
        <Text style={styles.textoEndereco}>
          Rua Agostinho Cantu, 207, Anexo 209 – Butantã, São Paulo/SP – CEP 05501-010
        </Text>
        <View style={styles.containerSetores}>
          <Text style={styles.textoSetor}>Setor A - Lado Leste</Text>
          <Text style={styles.textoSetor}>Setor B - Lado Norte</Text>
          <Text style={styles.textoSetor}>Setor C - Lado Sul</Text>
        </View>
      </View>

      <View style={styles.itemPatio}>
        <Text style={styles.textoEndereco}>
          Rua Maria Bibiana do Carmo, 208 – Parque Industrial, Campinas/SP – CEP 13031-070
        </Text>
        <View style={styles.containerSetores}>
          <Text style={styles.textoSetor}>Setor A - Lado Sul</Text>
          <Text style={styles.textoSetor}>Setor B - Lado Oeste</Text>
          <Text style={styles.textoSetor}>Setor C - Lado Leste</Text>
        </View>
      </View>

      <View style={styles.itemPatio}>
        <Text style={styles.textoEndereco}>
          Rua Doutor Ratisbona, 738 – Fátima, Fortaleza/CE – CEP 60411-220
        </Text>
        <View style={styles.containerSetores}>
          <Text style={styles.textoSetor}>Setor A - Lado Leste</Text>
          <Text style={styles.textoSetor}>Setor B - Lado Oeste</Text>
          <Text style={styles.textoSetor}>Setor C - Lado Sul</Text>
        </View>
      </View>

      <View style={styles.itemPatio}>
        <Text style={styles.textoEndereco}>
          Rua Graff, 186 – Vila Graff, Jundiaí/SP – CEP 13215-030
        </Text>
        <View style={styles.containerSetores}>
          <Text style={styles.textoSetor}>Setor A - Lado Norte</Text>
          <Text style={styles.textoSetor}>Setor B - Lado Sul</Text>
          <Text style={styles.textoSetor}>Setor C - Lado Oeste</Text>
        </View>
      </View>

      <View style={styles.itemPatio}>
        <Text style={styles.textoEndereco}>
          Rua Professora Nilda de São José, 321 – Santa Mônica, Uberlândia/MG – CEP 38408-076
        </Text>
        <View style={styles.containerSetores}>
          <Text style={styles.textoSetor}>Setor A - Lado Oeste</Text>
          <Text style={styles.textoSetor}>Setor B - Lado Sul</Text>
          <Text style={styles.textoSetor}>Setor C - Lado Leste</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#FFF9F9', 
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#243B55',
    textAlign: 'center',
    marginBottom: 30,
  },
  itemPatio: {
    backgroundColor: '#243B55', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  textoEndereco: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10, 
  },
  containerSetores: {
    marginTop: 5, 
    borderTopWidth: 1, 
    borderTopColor: '#465f73', 
    paddingTop: 10,
  },
  textoSetor: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 5, 
  },
});