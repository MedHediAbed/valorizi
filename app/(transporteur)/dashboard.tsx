import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { palette } from '@/constants/ui';

export default function TransporteurDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard Transporteur</Text>
        <Pressable style={styles.button} onPress={() => router.push('/(transporteur)/mission')}>
          <Text style={styles.buttonText}>Voir mission assignee</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20 },
  title: { fontSize: 28, color: palette.accent, fontWeight: '800', marginBottom: 16 },
  button: { backgroundColor: palette.primary, padding: 14, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
});
