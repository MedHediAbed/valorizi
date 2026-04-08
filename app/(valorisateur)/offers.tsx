import { router } from 'expo-router';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { offers } from '@/data/mock';
import { palette } from '@/constants/ui';

export default function OffersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Offres anonymes</Text>
        <FlatList
          data={offers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.label}>{item.label}</Text>
              <Text>Quantite: {item.quantity}kg</Text>
              <Text>Prix: {item.price} EUR/kg</Text>
              <Text>Disponibilite: {item.availability}</Text>
            </View>
          )}
        />
        <Pressable style={styles.button} onPress={() => router.replace('/(transporteur)/mission')}>
          <Text style={styles.buttonText}>Selectionner une offre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 28, color: palette.accent, fontWeight: '800', marginBottom: 12 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: palette.border },
  label: { fontSize: 18, fontWeight: '700', marginBottom: 6 },
  button: { marginTop: 'auto', backgroundColor: palette.primary, padding: 14, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
});
