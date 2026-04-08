import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { palette } from '@/constants/ui';

export default function PickupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Statut: Picked up</Text>
        <Text style={styles.text}>La collecte est effectuee.</Text>
        <Pressable style={styles.button} onPress={() => router.push('/(transporteur)/delivery')}>
          <Text style={styles.buttonText}>Marquer comme livre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20, gap: 12 },
  title: { fontSize: 28, color: palette.accent, fontWeight: '800' },
  text: { fontSize: 16, color: palette.text },
  button: { marginTop: 8, backgroundColor: palette.primary, borderRadius: 10, padding: 14 },
  buttonText: { color: '#fff', fontWeight: '700', textAlign: 'center' },
});
