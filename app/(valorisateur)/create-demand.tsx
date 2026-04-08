import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette } from '@/constants/ui';

export default function CreateDemandScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Creer une demande</Text>
        <TextInput placeholder="Type de dechet: ☕ / 🍵" style={styles.input} />
        <TextInput placeholder="Quantite (kg)" style={styles.input} />
        <TextInput placeholder="Date (YYYY-MM-DD)" style={styles.input} />
        <Pressable style={styles.button} onPress={() => router.push('/(valorisateur)/offers')}>
          <Text style={styles.buttonText}>Publier la demande</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20, gap: 12 },
  title: { fontSize: 28, color: palette.accent, fontWeight: '800', marginBottom: 4 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: palette.border, borderRadius: 10, padding: 12 },
  button: { marginTop: 10, backgroundColor: palette.primary, padding: 14, borderRadius: 10 },
  buttonText: { textAlign: 'center', color: '#fff', fontWeight: '700' },
});
