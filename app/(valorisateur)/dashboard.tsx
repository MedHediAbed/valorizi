import { router } from 'expo-router';
import * as Linking from 'expo-linking';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppLogo, BottomNav, KgSlider, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

const WHATSAPP = '21692714972';
const MAX_KG_PER_DAY = 300;

type Waste = 'marc' | 'the';
type Frequency = 'daily' | 'three' | 'week' | 'month';

function maxKgPerSupplyEvent(monthlyKg: number, f: Frequency): number {
  switch (f) {
    case 'daily':
      return monthlyKg / 30;
    case 'three':
      return monthlyKg / 10;
    case 'week':
      return monthlyKg / 4;
    case 'month':
      return monthlyKg;
    default:
      return monthlyKg / 30;
  }
}

export default function ValorisateurDashboard() {
  const home = '/(valorisateur)/dashboard';
  const [waste, setWaste] = useState<Waste>('marc');
  const [monthlyKg, setMonthlyKg] = useState(500);
  const [frequency, setFrequency] = useState<Frequency>('week');

  const kgPerEvent = useMemo(() => maxKgPerSupplyEvent(monthlyKg, frequency), [monthlyKg, frequency]);
  const exceedsDailyCap = kgPerEvent > MAX_KG_PER_DAY;

  const openWhatsApp = () => {
    Linking.openURL(`https://wa.me/${WHATSAPP}`).catch(() => {});
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.topRow}>
        <View style={styles.topSpacer} />
        <AppLogo size={34} />
        <Pressable style={styles.bell} onPress={() => router.push('/(valorisateur)/stats')}>
          <MaterialCommunityIcons name="chart-box-outline" size={24} color={palette.primary} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.bonjour}>Bonjour</Text>
        <Text style={styles.sub}>Définissez votre besoin mensuel et la fréquence d&apos;approvisionnement.</Text>

        <Text style={styles.section}>Type de déchet organique</Text>
        <View style={styles.typesRow}>
          <Pressable
            style={[styles.typeCard, waste === 'marc' && styles.typeCardOn]}
            onPress={() => setWaste('marc')}
          >
            <MaterialCommunityIcons name="coffee" size={28} color={palette.primary} />
            <Text style={styles.typeTxt}>Marc de café</Text>
          </Pressable>
          <Pressable
            style={[styles.typeCard, waste === 'the' && styles.typeCardOn]}
            onPress={() => setWaste('the')}
          >
            <MaterialCommunityIcons name="tea" size={28} color={palette.primary} />
            <Text style={styles.typeTxt}>Déchet de thé</Text>
          </Pressable>
        </View>

        <Text style={styles.section}>Quantité souhaitée (kg / mois)</Text>
        <Text style={styles.rangeHint}>Entre 10 et 7000 kg par mois.</Text>
        <KgSlider value={monthlyKg} onChange={setMonthlyKg} min={10} max={7000} />

        <Text style={styles.section}>Fréquence d&apos;approvisionnement</Text>
        <View style={styles.freqCol}>
          {(
            [
              { key: 'daily' as const, label: 'Chaque jour' },
              { key: 'three' as const, label: 'Chaque 3 jours' },
              { key: 'week' as const, label: 'Chaque semaine' },
              { key: 'month' as const, label: 'Chaque mois' },
            ] as const
          ).map(({ key, label }) => (
            <Pressable
              key={key}
              style={[styles.freqChip, frequency === key && styles.freqChipOn]}
              onPress={() => setFrequency(key)}
            >
              <Text style={[styles.freqTxt, frequency === key && styles.freqTxtOn]}>{label}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.estimBox}>
          <Text style={styles.estimTitle}>Estimation par livraison</Text>
          <Text style={styles.estimVal}>
            ≈ {kgPerEvent.toFixed(kgPerEvent >= 100 ? 0 : 1)} kg (selon la fréquence)
          </Text>
          {exceedsDailyCap ? (
            <Text style={styles.warn}>
              Limite : vous ne pouvez pas commander plus de {MAX_KG_PER_DAY} kg par jour. Réduisez la quantité
              mensuelle ou augmentez l&apos;intervalle entre les livraisons.
            </Text>
          ) : (
            <Text style={styles.ok}>Quantité compatible avec la limite de {MAX_KG_PER_DAY} kg / jour.</Text>
          )}
        </View>

        <Pressable style={styles.statsBtn} onPress={() => router.push('/(valorisateur)/stats')}>
          <MaterialCommunityIcons name="poll" size={22} color="#fff" />
          <Text style={styles.statsBtnTxt}>Voir mes statistiques</Text>
        </Pressable>

        <View style={styles.supportCard}>
          <Text style={styles.supportTitle}>Support client</Text>
          <Text style={styles.supportTxt}>
            Contacter Valorizi sur WhatsApp : +216 92 714 972
          </Text>
          <Pressable style={styles.waBtn} onPress={openWhatsApp}>
            <MaterialCommunityIcons name="whatsapp" size={22} color="#fff" />
            <Text style={styles.waBtnTxt}>Ouvrir WhatsApp</Text>
          </Pressable>
        </View>

        <Pressable
          style={[styles.submitBtn, exceedsDailyCap && styles.submitBtnDisabled]}
          disabled={exceedsDailyCap}
          onPress={() => router.push('/(valorisateur)/demand-sent')}
        >
          <Text style={styles.submitTxt}>Enregistrer la demande</Text>
        </Pressable>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 4,
  },
  topSpacer: { width: 36 },
  bell: { width: 36, alignItems: 'flex-end' },
  body: { paddingHorizontal: 18, paddingTop: 12, paddingBottom: 28 },
  bonjour: { fontSize: 26, fontWeight: '800', color: palette.text, fontFamily: serif },
  sub: { fontSize: 15, color: '#666', marginTop: 4, marginBottom: 16, fontFamily: serif },
  section: { fontSize: 14, fontWeight: '700', color: palette.accent, marginBottom: 8, fontFamily: serif },
  rangeHint: { fontSize: 12, color: '#888', marginBottom: 4, fontFamily: serif },
  typesRow: { flexDirection: 'row', gap: 12, marginBottom: 18 },
  typeCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    paddingVertical: 14,
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
  },
  typeCardOn: { borderColor: palette.primary, backgroundColor: '#e8f2dc' },
  typeTxt: { fontSize: 13, fontWeight: '600', color: palette.text, fontFamily: serif },
  freqCol: { gap: 8, marginBottom: 14 },
  freqChip: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
  },
  freqChipOn: { borderColor: palette.primary, backgroundColor: '#e8f2dc' },
  freqTxt: { fontSize: 15, color: '#333', fontFamily: serif },
  freqTxtOn: { color: palette.primary, fontWeight: '700' },
  estimBox: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    backgroundColor: '#fafafa',
  },
  estimTitle: { fontSize: 12, color: '#666', marginBottom: 4, fontFamily: serif },
  estimVal: { fontSize: 18, fontWeight: '800', color: palette.text, fontFamily: serif },
  warn: { marginTop: 10, fontSize: 13, color: '#b00020', fontFamily: serif, lineHeight: 20 },
  ok: { marginTop: 10, fontSize: 13, color: palette.primary, fontFamily: serif },
  statsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: palette.accent,
    paddingVertical: 14,
    borderRadius: 24,
    marginBottom: 14,
  },
  statsBtnTxt: { color: '#fff', fontWeight: '800', fontSize: 16, fontFamily: serif },
  supportCard: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  supportTitle: { fontSize: 16, fontWeight: '800', fontFamily: serif, marginBottom: 6 },
  supportTxt: { fontSize: 14, color: '#555', marginBottom: 12, fontFamily: serif },
  waBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#25D366',
    paddingVertical: 12,
    borderRadius: 20,
  },
  waBtnTxt: { color: '#fff', fontWeight: '800', fontSize: 15, fontFamily: serif },
  submitBtn: {
    backgroundColor: palette.primary,
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
  },
  submitBtnDisabled: { opacity: 0.45 },
  submitTxt: { color: '#fff', fontWeight: '800', fontSize: 17, fontFamily: serif },
});
