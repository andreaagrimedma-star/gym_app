import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  menu: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  disabledCard: {
    opacity: 0.6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default DashboardScreen;
