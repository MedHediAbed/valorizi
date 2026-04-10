import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { mission } from '@/data/mock';
import { palette } from '@/constants/ui';

export default function DeliveryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.codeCard}>
          <Text style={styles.codeLabel}>Code de confirmation</Text>
          <Text style={styles.code}>{mission.code}</Text>
        </View>
        <Pressable style={styles.button} onPress={() => router.push('/(transporteur)/complete')}>
          <Text style={styles.buttonText}>Terminer mission</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20, gap: 16 },
  codeCard: { backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: palette.border, padding: 16 },
  codeLabel: { fontSize: 16, color: '#666' },
  code: { marginTop: 8, fontSize: 34, color: palette.primary, letterSpacing: 4, fontWeight: '800' },
  button: { backgroundColor: palette.primary, borderRadius: 10, padding: 14 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
});
