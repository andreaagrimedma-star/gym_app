import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from './src/screens/DashboardScreen';
import ClientListScreen from './src/screens/ClientListScreen';
import AddClientScreen from './src/screens/AddClientScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopColor: '#333',
          height: 60,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#CCFF00',
        tabBarInactiveTintColor: '#B0B0B0',
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddClient"
        component={AddClientScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#CCFF00',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                elevation: 5,
            }}>
              <Ionicons name="add" size={32} color="#121212" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ClientList"
        component={ClientListScreen}
        options={{
          tabBarLabel: 'Clienti',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={{ headerShown: false }}
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
