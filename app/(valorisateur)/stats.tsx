import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackChevron, BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function ValorisateurStatsScreen() {
  const home = '/(valorisateur)/dashboard';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.top}>
        <BackChevron onPress={() => router.back()} />
        <Text style={styles.headerTitle}>Statistiques</Text>
        <View style={styles.spacer} />
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.intro}>Synthèse de vos commandes et volumes.</Text>

        <View style={styles.grid}>
          <StatCard icon="truck-check" label="Commandes livrées" value="24" accent />
          <StatCard icon="weight-kilogram" label="Quantité livrée (kg)" value="1 420" />
          <StatCard icon="progress-clock" label="Commandes en cours" value="3" />
          <StatCard icon="close-circle-outline" label="Annulées" value="1" />
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Ce mois-ci</Text>
          <Row k="Demandes publiées" v="6" />
          <Row k="Offres reçues" v="18" />
          <Row k="Taux de conversion" v="72 %" />
        </View>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <View style={[styles.card, accent && styles.cardAccent]}>
      <MaterialCommunityIcons name={icon} size={28} color={accent ? '#fff' : palette.primary} />
      <Text style={[styles.cardVal, accent && styles.cardValOn]}>{value}</Text>
      <Text style={[styles.cardLbl, accent && styles.cardLblOn]}>{label}</Text>
    </View>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowK}>{k}</Text>
      <Text style={styles.rowV}>{v}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  headerTitle: { fontSize: 18, fontWeight: '800', fontFamily: serif, color: palette.text },
  spacer: { width: 40 },
  body: { paddingHorizontal: 18, paddingBottom: 24 },
  intro: { fontSize: 14, color: '#666', marginBottom: 16, fontFamily: serif },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 },
  card: {
    width: '47%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 14,
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
  },
  cardAccent: { backgroundColor: palette.primary, borderColor: palette.primary },
  cardVal: { fontSize: 22, fontWeight: '800', fontFamily: serif, color: palette.text },
  cardValOn: { color: '#fff' },
  cardLbl: { fontSize: 12, textAlign: 'center', color: '#555', fontFamily: serif },
  cardLblOn: { color: '#f0f0f0' },
  block: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 14,
    padding: 16,
  },
  blockTitle: { fontSize: 15, fontWeight: '800', marginBottom: 12, fontFamily: serif, color: palette.accent },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  rowK: { color: '#555', fontFamily: serif },
  rowV: { fontWeight: '700', fontFamily: serif },
});
