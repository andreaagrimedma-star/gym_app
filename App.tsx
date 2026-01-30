import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DashboardScreen from './src/screens/DashboardScreen';
import ClientListScreen from './src/screens/ClientListScreen';

const Stack = createStackNavigator();

// Placeholder for Details Screen to satisfy navigation requirement
const ClientDetailsScreen = ({ route }: { route: any }) => {
  const { client } = route.params || {};
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>Dettagli Cliente</Text>
      {client ? (
        <View style={styles.detailsContent}>
          <Text style={styles.detailText}>Nome: {client.name}</Text>
          <Text style={styles.detailText}>Stato: {client.status}</Text>
          <Text style={styles.detailText}>Piano: {client.plan}</Text>
        </View>
      ) : (
        <Text>Nessun cliente selezionato</Text>
      )}
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ClientList"
            component={ClientListScreen}
            options={{ title: 'Lista Clienti' }}
          />
          <Stack.Screen
            name="Details"
            component={ClientDetailsScreen}
            options={{ title: 'Dettagli Cliente' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContent: {
    gap: 10,
  },
  detailText: {
    fontSize: 18,
    color: '#333',
  },
});
