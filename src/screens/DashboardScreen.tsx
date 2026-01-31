import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>Old Gym</Text>
        <Text style={styles.subtitle}>Gestione Palestra</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ClientList')}
        >
          <Text style={styles.cardTitle}>Lista Clienti</Text>
          <Text style={styles.cardDescription}>Gestisci gli iscritti</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.disabledCard]}
          onPress={() => {}}
          activeOpacity={0.8}
        >
          <Text style={styles.cardTitle}>Abbonamenti</Text>
          <Text style={styles.cardDescription}>In arrivo...</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Nero scuro
  },
  header: {
    padding: 20,
    backgroundColor: '#121212',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Bianco
  },
  subtitle: {
    fontSize: 16,
    color: '#CCFF00', // Verde neon
    marginTop: 5,
  },
  menu: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  card: {
    backgroundColor: '#1E1E1E', // Grigio scuro
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#CCFF00', // Accento Verde neon
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  disabledCard: {
    opacity: 0.5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // Bianco
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#B0B0B0', // Grigio chiaro
  },
});

export default DashboardScreen;
