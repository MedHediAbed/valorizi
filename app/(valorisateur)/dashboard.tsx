import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { palette } from '@/constants/ui';

export default function ValorisateurDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard Valorisateur</Text>
        <Pressable style={styles.card} onPress={() => router.push('/(valorisateur)/create-demand')}>
          <Text style={styles.cardTitle}>Creer une demande</Text>
          <Text style={styles.cardText}>Marc de cafe ou the usage</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20 },
  title: { fontSize: 28, color: palette.accent, fontWeight: '800', marginBottom: 16 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: palette.border },
  cardTitle: { fontSize: 20, color: palette.text, fontWeight: '700' },
  cardText: { marginTop: 8, color: '#555' },
});
