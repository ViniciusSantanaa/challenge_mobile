import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'MotoMap',
          headerStyle: {
            backgroundColor: '#FFF9F9',
            height: 150,
          },
          headerTitleStyle: {
            color: '#2c3e50',
            fontSize: 50,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
        <Stack.Screen
        name="cadastro"
        options={{
          title: 'MotoMap',
          headerStyle: {
            backgroundColor: '#FFF9F9',
            height: 150,
          },
          headerTitleStyle: {
            color: '#2c3e50',
            fontSize: 50,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />

        <Stack.Screen
        name="patios"
        options={{
          title: 'MotoMap',
          headerStyle: {
            backgroundColor: '#FFF9F9',
            height: 150,
          },
          headerTitleStyle: {
            color: '#2c3e50',
            fontSize: 50,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
      name="motos"
      options={{
        title: 'MotoMap',
        headerStyle: {
          backgroundColor: '#FFF9F9',
          height: 150,
        },
        headerTitleStyle: {
          color: '#2c3e50',
          fontSize: 50,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    />

      <Stack.Screen
      name="sobre"
      options={{
        title: 'MotoMap',
        headerStyle: {
          backgroundColor: '#FFF9F9',
          height: 150,
        },
        headerTitleStyle: {
          color: '#2c3e50',
          fontSize: 50,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    />
    </Stack>
  );
}
