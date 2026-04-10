import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { serif } from '@/components/wireframe-ui';

type Lang = 'en' | 'fr' | 'ar';

export default function ProfileLanguageScreen() {
  const [lang, setLang] = useState<Lang>('fr');

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.body}>
        <View style={styles.topRow}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#111" />
          </Pressable>
          <Text style={styles.title}>Langue</Text>
          <View style={styles.spacer} />
        </View>

        <Text style={styles.section}>Suggestion</Text>
        <Choice label="Anglais (US)" active={lang === 'en'} onPress={() => setLang('en')} />
        <Choice label="Français" active={lang === 'fr'} onPress={() => setLang('fr')} />
        <Choice label="Arabe" active={lang === 'ar'} onPress={() => setLang('ar')} />
      </View>
    </SafeAreaView>
  );
}

function Choice({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable style={styles.choice} onPress={onPress}>
      <Text style={styles.choiceTxt}>{label}</Text>
      <View style={[styles.radio, active && styles.radioOn]}>
        {active ? <View style={styles.dot} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  body: { flex: 1, padding: 20 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 },
  title: { fontSize: 22, fontWeight: '800', color: '#111', fontFamily: serif },
  spacer: { width: 24 },
  section: { fontSize: 42 / 2, fontWeight: '800', color: '#111', marginBottom: 8, fontFamily: serif },
  choice: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 },
  choiceTxt: { fontSize: 19, color: '#1f1f1f', fontFamily: serif },
  radio: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#4a8b0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOn: { borderColor: '#4a8b0a' },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#4a8b0a' },
});
