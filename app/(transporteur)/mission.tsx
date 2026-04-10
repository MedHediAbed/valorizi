import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { mission } from '@/data/mock';
import { palette } from '@/constants/ui';

export default function MissionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.strong}>{mission.from}</Text>
          <Text style={styles.arrow}>→</Text>
          <Text style={styles.strong}>{mission.to}</Text>
        </View>
        <Pressable style={styles.button} onPress={() => router.push('/(transporteur)/pickup')}>
          <Text style={styles.buttonText}>Confirmer collecte</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20, gap: 16 },
  card: { backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: palette.border, padding: 18 },
  strong: { fontSize: 18, color: palette.text, fontWeight: '700' },
  arrow: { fontSize: 24, marginVertical: 6, color: palette.primary },
  button: { backgroundColor: palette.primary, padding: 14, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
});
