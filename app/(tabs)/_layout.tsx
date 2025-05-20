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
            color: '#000080',
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
            color: '#000080',
            fontSize: 50,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
