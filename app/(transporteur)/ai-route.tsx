import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackChevron, serif } from '@/components/wireframe-ui';
import { STATIC_ACTIVE_ORDERS, shortestPathOrder3 } from '@/data/active-orders-static';
import { palette } from '@/constants/ui';

export default function AiRouteScreen() {
  const { indices, legs, totalKm } = shortestPathOrder3();
  const steps = indices.map((i) => STATIC_ACTIVE_ORDERS[i]);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.top}>
        <View style={styles.topSide}>
          <BackChevron onPress={() => router.back()} color={palette.primary} />
        </View>
        <Text style={styles.headerTitle}>Itinéraire optimal</Text>
        <View style={styles.topSide} />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.sub}>
          Assistant IA — chemin le plus court pour relier les 3 cafés (distance routière approximative,
          données statiques).
        </Text>

        <View style={styles.summary}>
          <MaterialCommunityIcons name="map-marker-path" size={28} color={palette.primary} />
          <Text style={styles.total}>Distance totale : {totalKm} km</Text>
        </View>

        <Text style={styles.section}>Ordre de passage recommandé</Text>
        {steps.map((s, idx) => (
          <View key={s.id}>
            <View style={styles.stepRow}>
              <View style={styles.stepNum}>
                <Text style={styles.stepNumTxt}>{idx + 1}</Text>
              </View>
              <View style={styles.stepBody}>
                <Text style={styles.stepName}>{s.producerName}</Text>
                <Text style={styles.stepAddr}>{s.address}</Text>
              </View>
            </View>
            {idx < legs.length ? (
              <View style={styles.leg}>
                <Text style={styles.legTxt}>
                  → {legs[idx]} km jusqu&apos;au suivant
                </Text>
              </View>
            ) : null}
          </View>
        ))}

        <View style={styles.note}>
          <MaterialCommunityIcons name="information-outline" size={20} color="#666" />
          <Text style={styles.noteTxt}>
            Calcul : toutes les permutations de 3 arrêts sont comparées ; la séquence ci-dessus minimise la
            somme des deux tronçons.
          </Text>
        </View>

        <Pressable style={styles.backBtn} onPress={() => router.replace('/(transporteur)/active-orders')}>
          <Text style={styles.backBtnTxt}>Retour aux commandes</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  top: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 4, paddingTop: 4 },
  topSide: { width: 44 },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 17, fontWeight: '800', fontFamily: serif },
  body: { paddingHorizontal: 18, paddingBottom: 32 },
  sub: { fontSize: 13, color: '#666', marginBottom: 16, fontFamily: serif, lineHeight: 20 },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#e8f2dc',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: palette.primary,
  },
  total: { fontSize: 18, fontWeight: '800', fontFamily: serif, color: palette.text, flex: 1 },
  section: { fontSize: 15, fontWeight: '800', marginBottom: 12, fontFamily: serif, color: palette.accent },
  stepRow: { flexDirection: 'row', gap: 12, marginBottom: 4 },
  stepNum: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumTxt: { color: '#fff', fontWeight: '800', fontSize: 15 },
  stepBody: { flex: 1 },
  stepName: { fontSize: 16, fontWeight: '800', fontFamily: serif },
  stepAddr: { fontSize: 13, color: '#555', marginTop: 2, fontFamily: serif },
  leg: { paddingLeft: 44, marginBottom: 12, marginTop: 2 },
  legTxt: { fontSize: 13, color: palette.primary, fontWeight: '600', fontFamily: serif },
  note: { flexDirection: 'row', gap: 8, marginTop: 16, padding: 12, backgroundColor: '#f5f5f5', borderRadius: 10 },
  noteTxt: { flex: 1, fontSize: 12, color: '#666', fontFamily: serif, lineHeight: 18 },
  backBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  backBtnTxt: { color: palette.primary, fontWeight: '800', fontSize: 16, fontFamily: serif },
});
