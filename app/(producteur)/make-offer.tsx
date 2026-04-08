import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette } from '@/constants/ui';

export default function MakeOfferScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Faire une offre</Text>
        <TextInput placeholder="Quantite (kg)" style={styles.input} />
        <TextInput placeholder="Prix (EUR/kg)" style={styles.input} />
        <TextInput placeholder="Disponibilite" style={styles.input} />
        <Pressable style={styles.button} onPress={() => router.replace('/(producteur)/dashboard')}>
          <Text style={styles.buttonText}>Envoyer</Text>
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
