import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { palette } from '@/constants/ui';

export default function ProducteurDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard Producteur</Text>
        <Pressable style={styles.card} onPress={() => router.push('/(producteur)/notifications')}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.cardText}>Voir les nouvelles demandes</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20, gap: 16 },
  title: { fontSize: 28, color: palette.accent, fontWeight: '800' },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: palette.border },
  cardTitle: { fontSize: 20, fontWeight: '700', color: palette.text },
  cardText: { marginTop: 6, color: '#555' },
});
