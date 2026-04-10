import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackChevron, BottomNav, KgSlider, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

type Waste = 'marc' | 'the';
type Avail = "aujourd'hui" | 'demain' | 'semaine';

export default function MakeOfferScreen() {
  const home = '/(producteur)/dashboard';
  const [waste, setWaste] = useState<Waste>('marc');
  const [kg, setKg] = useState(18);
  const [avail, setAvail] = useState<Avail>("aujourd'hui");

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.top}>
        <BackChevron onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.section}>AUJOURD&apos;HUI</Text>
        <View style={styles.summary}>
          <View style={styles.summaryTop}>
            <Text style={styles.summaryLbl}>Demande reçu</Text>
            <View style={styles.activeBadge}>
              <Text style={styles.activeBadgeTxt}>Active</Text>
            </View>
          </View>
          <View style={styles.summaryMid}>
            <MaterialCommunityIcons name="coffee" size={40} color={palette.primary} />
            <View>
              <Text style={styles.summaryTitle}>Marc de café</Text>
              <Text style={styles.summaryKg}>20 kg</Text>
            </View>
          </View>
        </View>

        <Text style={styles.section}>MES TYPES DE DÉCHETS</Text>
        <View style={styles.typesRow}>
          <Pressable
            style={[styles.typeBtn, waste === 'marc' && styles.typeBtnOn]}
            onPress={() => setWaste('marc')}
          >
            <MaterialCommunityIcons name="coffee" size={28} color={palette.primary} />
            <Text style={styles.typeBtnTxt}>Marc café</Text>
          </Pressable>
          <Pressable
            style={[styles.typeBtn, waste === 'the' && styles.typeBtnOn]}
            onPress={() => setWaste('the')}
          >
            <MaterialCommunityIcons name="tea" size={28} color={palette.text} />
            <Text style={styles.typeBtnTxt}>Thé usagé</Text>
          </Pressable>
        </View>

        <View style={styles.box}>
          <Text style={styles.sectionIn}>QUANTITÉ DISPONIBLE</Text>
          <KgSlider value={kg} onChange={setKg} min={1} max={50} />
        </View>

        <View style={styles.box}>
          <Text style={styles.sectionIn}>DISPONIBILITÉ</Text>
          <View style={styles.availRow}>
            {(
              [
                { key: "aujourd'hui" as const, label: "Aujourd'hui" },
                { key: 'demain' as const, label: 'Demain' },
                { key: 'semaine' as const, label: 'Cette sem.' },
              ] as const
            ).map(({ key, label }) => (
              <Pressable
                key={key}
                style={[styles.availChip, avail === key && styles.availChipOn]}
                onPress={() => setAvail(key)}
              >
                <Text style={[styles.availTxt, avail === key && styles.availTxtOn]}>{label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Pressable style={styles.send} onPress={() => router.push('/(producteur)/offer-sent')}>
          <Text style={styles.sendTxt}>Envoyer mon offre</Text>
        </Pressable>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  top: { paddingHorizontal: 12 },
  scroll: { paddingHorizontal: 18, paddingBottom: 24 },
  section: { fontSize: 12, color: '#5a5a6e', marginBottom: 8, marginTop: 8, fontFamily: serif, fontWeight: '700' },
  summary: {
    backgroundColor: '#e8f2dc',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.accent,
    padding: 14,
    marginBottom: 16,
  },
  summaryTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  summaryLbl: { color: palette.primary, fontWeight: '700', fontFamily: serif },
  activeBadge: { backgroundColor: palette.primary, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  activeBadgeTxt: { color: '#fff', fontSize: 12, fontWeight: '700', fontFamily: serif },
  summaryMid: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  summaryTitle: { fontSize: 18, fontWeight: '800', fontFamily: serif },
  summaryKg: { fontSize: 16, color: palette.primary, fontWeight: '700', marginTop: 4, fontFamily: serif },
  typesRow: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  typeBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
  },
  typeBtnOn: { backgroundColor: '#e8f2dc', borderColor: palette.primary },
  typeBtnTxt: { fontSize: 13, fontWeight: '600', fontFamily: serif, color: palette.text },
  box: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  sectionIn: { fontSize: 11, color: '#4a4a5e', marginBottom: 10, fontFamily: serif, fontWeight: '700' },
  availRow: { flexDirection: 'row', gap: 8 },
  availChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  availChipOn: { backgroundColor: '#e8f2dc', borderColor: palette.primary },
  availTxt: { fontSize: 11, fontWeight: '600', textAlign: 'center', fontFamily: serif, color: palette.text },
  availTxtOn: { color: palette.primary },
  send: {
    backgroundColor: '#7cb928',
    paddingVertical: 16,
    borderRadius: 28,
    marginTop: 8,
    marginBottom: 8,
  },
  sendTxt: { textAlign: 'center', color: '#fff', fontWeight: '800', fontSize: 17, fontFamily: serif },
});
