import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

// Dati finti
const DUMMY_CLIENTS = [
  { id: '1', name: 'Mario Rossi', status: 'Attivo', plan: 'Annuale' },
  { id: '2', name: 'Luigi Verdi', status: 'Scaduto', plan: 'Mensile' },
  { id: '3', name: 'Giulia Bianchi', status: 'Attivo', plan: 'Trimestrale' },
  { id: '4', name: 'Anna Neri', status: 'Attivo', plan: 'Annuale' },
  { id: '5', name: 'Paolo Gialli', status: 'In attesa', plan: 'Prova' },
];

const ClientListScreen = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: { item: typeof DUMMY_CLIENTS[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { client: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={[
          styles.status,
          item.status === 'Attivo' ? styles.statusActive : styles.statusInactive
        ]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.plan}>{item.plan}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DUMMY_CLIENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  plan: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    overflow: 'hidden',
  },
  statusActive: {
    backgroundColor: '#e6fffa',
    color: '#047481',
  },
  statusInactive: {
    backgroundColor: '#fff5f5',
    color: '#c53030',
  },
});

export default ClientListScreen;
