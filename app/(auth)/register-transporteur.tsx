import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppLogo, BackChevron, serif } from '@/components/wireframe-ui';
import { useAppContext } from '@/context/app-context';
import { palette } from '@/constants/ui';

export default function RegisterTransporteurScreen() {
  const { setRole } = useAppContext();
  const [showPw, setShowPw] = useState(false);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <BackChevron onPress={() => router.replace('/(auth)/register')} color={palette.accent} />
        <AppLogo size={40} />
        <Text style={styles.roleTitle}>Transporteur</Text>

        <Text style={styles.label}>Nom</Text>
        <View style={styles.row2}>
          <TextInput style={[styles.input, styles.half]} placeholder="Prénom" placeholderTextColor="#6d8f4a" />
          <TextInput style={[styles.input, styles.half]} placeholder="Nom" placeholderTextColor="#6d8f4a" />
        </View>

        <Text style={styles.label}>Date de naissance</Text>
        <View style={styles.row3}>
          <TextInput style={[styles.input, styles.third]} placeholder="Jour" placeholderTextColor="#6d8f4a" />
          <TextInput style={[styles.input, styles.third]} placeholder="Mois" placeholderTextColor="#6d8f4a" />
          <TextInput style={[styles.input, styles.third]} placeholder="Année" placeholderTextColor="#6d8f4a" />
        </View>

        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} placeholder="Adresse" placeholderTextColor="#6d8f4a" />

        <Text style={styles.label}>Numéro de mobile ou adresse e-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Numéro de mobile ou adresse e-mail"
          placeholderTextColor="#6d8f4a"
        />

        <Text style={styles.label}>CV</Text>
        <View style={styles.cvRow}>
          <TextInput
            style={[styles.input, styles.cvInput]}
            placeholder="Déposez votre CV ici"
            placeholderTextColor="#6d8f4a"
          />
          <Text style={styles.uploadIcon}>⬆</Text>
        </View>

        <Text style={styles.label}>Mot de passe</Text>
        <View style={styles.pwRow}>
          <TextInput
            style={[styles.input, styles.pwInput]}
            placeholder="********"
            placeholderTextColor="#6d8f4a"
            secureTextEntry={!showPw}
          />
          <Pressable style={styles.eye} onPress={() => setShowPw((s) => !s)}>
            <Text style={styles.eyeTxt}>👁</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.cta}
          onPress={() => {
            setRole('transporteur');
            router.replace('/(transporteur)/active-orders');
          }}>
          <Text style={styles.ctaTxt}>SUIVANT</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { paddingHorizontal: 22, paddingBottom: 32 },
  roleTitle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: palette.accent,
    marginTop: 8,
    marginBottom: 20,
    fontFamily: serif,
  },
  label: { fontSize: 15, color: palette.accent, marginBottom: 6, fontFamily: serif, fontWeight: '600' },
  row2: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  row3: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  input: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
    backgroundColor: '#fff',
    marginBottom: 4,
    fontFamily: serif,
  },
  half: { flex: 1 },
  third: { flex: 1 },
  cvRow: { position: 'relative', marginBottom: 8 },
  cvInput: { paddingRight: 40 },
  uploadIcon: { position: 'absolute', right: 14, top: 12, fontSize: 18 },
  pwRow: { position: 'relative', marginBottom: 20 },
  pwInput: { paddingRight: 44 },
  eye: { position: 'absolute', right: 12, top: 12 },
  eyeTxt: { fontSize: 18 },
  cta: {
    backgroundColor: palette.primary,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  ctaTxt: { textAlign: 'center', color: '#fff', fontWeight: '800', fontSize: 17 },
});
