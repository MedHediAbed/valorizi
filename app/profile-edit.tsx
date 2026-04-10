import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '@/constants/ui';
import { serif } from '@/components/wireframe-ui';

export default function ProfileEditScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.topRow}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#111" />
          </Pressable>
          <Text style={styles.title}>Modifier le profil</Text>
          <View style={styles.spacer} />
        </View>

        <Field label="Nom" value="Nait" />
        <Field label="Prénom" value="Lina" />
        <Field label="Email" value="youremail@domain.com" />
        <Field label="Numéro de Téléphone" value="066666666" />

        <View style={styles.row2}>
          <View style={styles.half}>
            <Field label="Pays" value="Algérie" />
          </View>
          <View style={styles.half}>
            <Field label="Wilaya" value="Alger" />
          </View>
        </View>

        <Field label="Addresse exacte" value="Cité Djuedjura" />

        <Pressable style={styles.btn}>
          <Text style={styles.btnTxt}>MODIFIER</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput value={value} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  body: { padding: 20, paddingBottom: 28 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 },
  title: { fontSize: 42 / 2, fontWeight: '800', color: '#111', fontFamily: serif },
  spacer: { width: 24 },
  row2: { flexDirection: 'row', gap: 10 },
  half: { flex: 1 },
  field: {
    borderWidth: 1.4,
    borderColor: palette.primary,
    borderRadius: 12,
    backgroundColor: '#eeecd6',
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 12,
  },
  label: { color: '#7d7d7d', fontSize: 16 / 1.2, marginBottom: 2, fontFamily: serif },
  input: { fontSize: 34 / 2, color: '#2a2a2a', paddingVertical: 2, fontFamily: serif },
  btn: {
    backgroundColor: '#3f7f00',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  btnTxt: { color: '#fff', fontWeight: '800', fontSize: 34 / 2, fontFamily: serif },
});
