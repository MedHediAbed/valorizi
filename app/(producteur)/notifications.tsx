import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackChevron, BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function ProducteurNotifications() {
  const home = '/(producteur)/dashboard';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.top}>
        <BackChevron onPress={() => router.back()} />
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.section}>AUJOURD&apos;HUI</Text>

        <View style={styles.cardActive}>
          <View style={styles.cardHead}>
            <Text style={styles.cardTitle}>Nouvelle demande</Text>
            <View style={styles.greenDot} />
          </View>
          <View style={styles.innerBox}>
            <MaterialCommunityIcons name="coffee" size={36} color={palette.primary} />
            <View style={styles.innerText}>
              <Text style={styles.innerTitle}>Marc de café</Text>
              <Text style={styles.innerSub}>Qualité standard ou mieux</Text>
            </View>
            <View style={styles.kgBadge}>
              <Text style={styles.kgBadgeTxt}>20 kg</Text>
            </View>
          </View>
          <View style={styles.btnRow}>
            <Pressable style={styles.btnLight}>
              <Text style={styles.btnLightTxt}>Ignorer</Text>
            </Pressable>
            <Pressable style={styles.btnDark} onPress={() => router.push('/(producteur)/make-offer')}>
              <Text style={styles.btnDarkTxt}>Faire une offre</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.cardHistory}>
          <View style={styles.historyRow}>
            <View style={styles.greenDot} />
            <Text style={styles.historyTitle}>Offre acceptée</Text>
            <Text style={styles.historyTime}>lundi</Text>
          </View>
          <Text style={styles.historyDetail}>Marc café 15 kg · +12 DT gagnés</Text>
        </View>

        <View style={styles.cardMuted}>
          <View style={styles.historyRow}>
            <View style={styles.greyDot} />
            <Text style={styles.historyTitleMuted}>Offre non retenu</Text>
            <Text style={styles.historyTime}>hier</Text>
          </View>
          <Text style={styles.historyDetailMuted}>Thé usagé 10 kg · Un autre producteur a été choisi</Text>
        </View>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  top: { paddingHorizontal: 12, paddingTop: 4 },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 18, paddingBottom: 24 },
  section: { fontSize: 13, color: '#6d6d6d', marginBottom: 12, fontFamily: serif, fontWeight: '600' },
  cardActive: {
    borderWidth: 2,
    borderColor: palette.accent,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    backgroundColor: '#fff',
  },
  cardHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  cardTitle: { fontSize: 17, fontWeight: '800', fontFamily: serif },
  greenDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: palette.primary },
  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 12,
    gap: 10,
    marginBottom: 12,
  },
  innerText: { flex: 1 },
  innerTitle: { fontSize: 16, fontWeight: '800', fontFamily: serif },
  innerSub: { fontSize: 13, color: '#666', marginTop: 2, fontFamily: serif },
  kgBadge: {
    backgroundColor: '#e8f2dc',
    borderWidth: 1,
    borderColor: palette.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  kgBadgeTxt: { fontWeight: '700', color: palette.primary, fontFamily: serif },
  btnRow: { flexDirection: 'row', gap: 10 },
  btnLight: {
    flex: 1,
    backgroundColor: '#e8f2dc',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  btnLightTxt: { color: palette.primary, fontWeight: '700', fontFamily: serif },
  btnDark: {
    flex: 1,
    backgroundColor: palette.primary,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  btnDarkTxt: { color: '#fff', fontWeight: '700', fontFamily: serif },
  cardHistory: {
    borderWidth: 1,
    borderColor: palette.accent,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  historyRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  historyTitle: { flex: 1, fontWeight: '700', fontSize: 15, fontFamily: serif },
  historyTitleMuted: { flex: 1, fontWeight: '700', fontSize: 15, color: '#555', fontFamily: serif },
  historyTime: { fontSize: 13, color: '#888', fontFamily: serif },
  historyDetail: { fontSize: 14, color: palette.primary, fontFamily: serif },
  cardMuted: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 14,
    padding: 14,
  },
  greyDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#bbb' },
  historyDetailMuted: { fontSize: 14, color: '#777', fontFamily: serif },
});
