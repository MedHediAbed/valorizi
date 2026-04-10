import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackChevron, BottomNav, serif } from '@/components/wireframe-ui';
import { STATIC_ACTIVE_ORDERS } from '@/data/active-orders-static';
import { palette } from '@/constants/ui';

export default function ActiveOrdersScreen() {
  const home = '/(transporteur)/dashboard';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.top}>
        <View style={styles.topSide}>
          <BackChevron onPress={() => router.replace('/(transporteur)/dashboard')} color={palette.primary} />
        </View>
        <Text style={styles.headerTitle}>Commandes actives</Text>
        <View style={styles.topSide} />
      </View>
      <Text style={styles.intro}>
        Collectes à effectuer — données de démonstration (3 cafés).
      </Text>

      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        {STATIC_ACTIVE_ORDERS.map((o) => (
          <View key={o.id} style={styles.card}>
            <View style={styles.cardHead}>
              <MaterialCommunityIcons name="storefront" size={22} color={palette.primary} />
              <Text style={styles.name}>{o.producerName}</Text>
            </View>
            <Text style={styles.addr}>{o.address}</Text>
            <Text style={styles.detail}>{o.detail}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeTxt}>Actif</Text>
            </View>
          </View>
        ))}

        <Pressable style={styles.aiBtn} onPress={() => router.push('/(transporteur)/ai-route')}>
          <MaterialCommunityIcons name="robot-outline" size={24} color="#fff" />
          <Text style={styles.aiBtnTxt}>Assistant IA</Text>
        </Pressable>
        <Text style={styles.aiHint}>
          Calcule l&apos;itinéraire le plus court entre les 3 cafés (distance minimale).
        </Text>

        <Pressable style={styles.homeLink} onPress={() => router.replace('/(transporteur)/dashboard')}>
          <Text style={styles.homeLinkTxt}>Aller au tableau de bord</Text>
        </Pressable>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  top: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 4, paddingTop: 4 },
  topSide: { width: 44 },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '800', fontFamily: serif },
  intro: { paddingHorizontal: 18, paddingBottom: 12, fontSize: 13, color: '#666', fontFamily: serif },
  scroll: { paddingHorizontal: 18, paddingBottom: 28 },
  card: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    backgroundColor: '#f9fdf4',
  },
  cardHead: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  name: { fontSize: 17, fontWeight: '800', fontFamily: serif, color: '#111', flex: 1 },
  addr: { fontSize: 14, color: '#444', fontFamily: serif, marginBottom: 6 },
  detail: { fontSize: 13, color: palette.accent, fontFamily: serif },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 10,
    backgroundColor: palette.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeTxt: { color: '#fff', fontSize: 12, fontWeight: '700', fontFamily: serif },
  aiBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: palette.accent,
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 8,
  },
  aiBtnTxt: { color: '#fff', fontWeight: '800', fontSize: 17, fontFamily: serif },
  aiHint: { fontSize: 12, color: '#888', textAlign: 'center', marginTop: 10, marginBottom: 16, fontFamily: serif },
  homeLink: { paddingVertical: 12, alignItems: 'center' },
  homeLinkTxt: { color: palette.primary, fontWeight: '700', fontSize: 15, fontFamily: serif },
});
