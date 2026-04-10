import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileSecurityScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>
        <Text style={styles.title}>Sécurité</Text>
        <Text style={styles.sub}>Réglages de sécurité.</Text>
        <Pressable style={styles.btn} onPress={() => router.back()}>
          <Text style={styles.btnTxt}>Retour</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: '800', color: '#1a1a1a', marginBottom: 10 },
  sub: { color: '#666', marginBottom: 18 },
  btn: { backgroundColor: '#5aa318', paddingHorizontal: 22, paddingVertical: 12, borderRadius: 22 },
  btnTxt: { color: '#fff', fontWeight: '700' },
});
