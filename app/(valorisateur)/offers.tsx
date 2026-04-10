import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackChevron, BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function OffersScreen() {
  const home = '/(valorisateur)/dashboard';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.top}>
        <BackChevron onPress={() => router.back()} />
        <Pressable style={styles.bell}>
          <Text style={styles.bellTxt}>🔔</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.summary}>☕ Marc de café . 20 kg demandés</Text>

        <View style={[styles.card, styles.cardBest]}>
          <View style={styles.cardHead}>
            <Text style={styles.cardTitle}>Producteur #1</Text>
            <View style={styles.meilleur}>
              <Text style={styles.meilleurTxt}>Meilleur</Text>
            </View>
          </View>
          <Text style={styles.avail}>Disponible aujourd&apos;hui</Text>
          <View style={styles.kgBadge}>
            <Text style={styles.kgTxt}>18 kg</Text>
          </View>
          <Pressable style={styles.accept} onPress={() => router.push('/(valorisateur)/order-confirmed')}>
            <Text style={styles.acceptTxt}>Accepter cette offre</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Producteur #2</Text>
          <Text style={styles.avail}>Disponible demain</Text>
          <View style={styles.kgBadge}>
            <Text style={styles.kgTxt}>19 kg</Text>
          </View>
          <Pressable style={styles.accept} onPress={() => router.push('/(valorisateur)/order-confirmed')}>
            <Text style={styles.acceptTxt}>Accepter cette offre</Text>
          </Pressable>
        </View>

        <Text style={styles.more}>+2 autres offres</Text>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 },
  bell: { padding: 4 },
  bellTxt: { fontSize: 20 },
  scroll: { paddingHorizontal: 18, paddingBottom: 24 },
  summary: { fontSize: 16, color: '#555', marginBottom: 16, fontFamily: serif, fontWeight: '600' },
  card: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cardBest: { borderColor: palette.primary, borderWidth: 2 },
  cardHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  cardTitle: { fontSize: 17, fontWeight: '800', color: '#333', fontFamily: serif },
  meilleur: { backgroundColor: '#e8f2dc', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  meilleurTxt: { fontSize: 12, fontWeight: '700', color: palette.primary, fontFamily: serif },
  avail: { fontSize: 14, color: '#777', marginBottom: 10, fontFamily: serif },
  kgBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f2dc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginBottom: 14,
  },
  kgTxt: { fontWeight: '700', color: palette.primary, fontFamily: serif },
  accept: { backgroundColor: palette.primary, paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  acceptTxt: { color: '#fff', fontWeight: '800', fontSize: 16, fontFamily: serif },
  more: { textAlign: 'center', color: '#888', marginTop: 8, fontFamily: serif },
});
