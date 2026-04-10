import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

const NOTIFS = [
  {
    id: '1',
    title: 'Café El Aurassi',
    place: 'Boulevard Victor Hugo, Alger-Centre',
    waste: 'Marc de café · 2 sacs',
  },
  {
    id: '2',
    title: 'Hôtel du Parc',
    place: 'Les Pins maritimes, Sidi Fredj',
    waste: 'Thé usagé · 1 sac',
  },
];

export default function TransporteurDashboard() {
  const openRoute = (query: string) => {
    const q = encodeURIComponent(query);
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${q}`).catch(() => {});
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <Text style={styles.pageTitle}>Notifications</Text>
      <Text style={styles.pageSub}>Nouvelles ventes à collecter</Text>
      <ScrollView contentContainerStyle={styles.body}>
        {NOTIFS.map((n) => (
          <View key={n.id} style={styles.card}>
            <View style={styles.cardHead}>
              <MaterialCommunityIcons name="storefront-outline" size={26} color={palette.primary} />
              <View style={styles.cardHeadTxt}>
                <Text style={styles.cardTitle}>{n.title}</Text>
                <Text style={styles.cardPlace}>{n.place}</Text>
              </View>
            </View>
            <Text style={styles.waste}>{n.waste}</Text>
            <Pressable style={styles.routeBtn} onPress={() => openRoute(n.place)}>
              <MaterialCommunityIcons name="map-marker-path" size={20} color="#fff" />
              <Text style={styles.routeTxt}>Itinéraire vers cette destination</Text>
            </Pressable>
          </View>
        ))}

        <Pressable style={styles.missionBtn} onPress={() => router.push('/(transporteur)/mission')}>
          <Text style={styles.missionTxt}>Voir mission assignée</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: palette.background },
  pageTitle: { fontSize: 22, fontWeight: '800', paddingHorizontal: 20, paddingTop: 8, fontFamily: serif },
  pageSub: { fontSize: 14, color: '#666', paddingHorizontal: 20, marginBottom: 12, fontFamily: serif },
  body: { paddingHorizontal: 18, paddingBottom: 28, gap: 14 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 16,
  },
  cardHead: { flexDirection: 'row', gap: 12, marginBottom: 10 },
  cardHeadTxt: { flex: 1 },
  cardTitle: { fontSize: 17, fontWeight: '800', fontFamily: serif, color: '#111' },
  cardPlace: { fontSize: 13, color: '#666', marginTop: 4, fontFamily: serif },
  waste: { fontSize: 14, color: palette.primary, fontWeight: '600', marginBottom: 12, fontFamily: serif },
  routeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: palette.accent,
    paddingVertical: 12,
    borderRadius: 20,
  },
  routeTxt: { color: '#fff', fontWeight: '800', fontSize: 15, fontFamily: serif },
  missionBtn: {
    marginTop: 8,
    backgroundColor: palette.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  missionTxt: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
