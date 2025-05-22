// App.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nós</Text>
      <View style={styles.textBackground}>
        <Text style={styles.text}>
          Nós da MotoMap, desenvolvemos um sistema inovador para a Mottu, focado no
          mapeamento e monitoramento preciso e automatizado de motocicletas nos
          pátios de suas filiais. Utilizando tecnologia de ponta, nossa solução
          captura informações detalhadas sobre a disposição exata de cada veículo
          e as apresenta em uma interface visual intuitiva e de fácil utilização,
          visando otimizar significativamente a gestão de ativos e a eficiência
          logística da Mottu.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F9',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold',
    color: '#243B55',
    marginBottom: 30, 
    textAlign: 'center',
  },
  textBackground: {
    backgroundColor: '#243B55', 
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  text: {
    fontSize: 19, // Texto maior
    color: '#FFF9F9', // Cor do texto
    textAlign: 'justify', // Justifica o texto para melhor leitura
    lineHeight: 28, // Espaçamento entre as linhas do texto
  },
});