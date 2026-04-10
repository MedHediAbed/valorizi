import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette } from '@/constants/ui';

const stars = [1, 2, 3, 4, 5];

export default function CompleteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Notez votre experience</Text>
        <View style={styles.starRow}>
          {stars.map((star) => (
            <Text key={star} style={styles.star}>
              ★
            </Text>
          ))}
        </View>
        <TextInput placeholder="Commentaire..." style={styles.input} multiline />
        <Pressable style={styles.button} onPress={() => router.replace('/(transporteur)/dashboard')}>
          <Text style={styles.buttonText}>Envoyer avis</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20, gap: 12 },
  label: { fontSize: 16, color: palette.text },
  starRow: { flexDirection: 'row', gap: 8 },
  star: { fontSize: 30, color: '#d4a136' },
  input: {
    minHeight: 110,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 10,
    padding: 12,
  },
  button: { backgroundColor: palette.primary, padding: 14, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
});
