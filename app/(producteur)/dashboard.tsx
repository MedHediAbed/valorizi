import { Href, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppLogo, BottomNav, KgSlider, serif } from '@/components/wireframe-ui';
import { canSellToday, recordSaleToday } from '@/lib/producteur-daily-sale';
import { palette } from '@/constants/ui';

type Waste = 'marc' | 'the';

const OFFER_SENT: Href = '/(producteur)/offer-sent';

function sacLabel(n: number): string {
  return n <= 1 ? `${n} sac` : `${n} sacs`;
}

export default function ProducteurDashboard() {
  const home = '/(producteur)/dashboard';
  const [waste, setWaste] = useState<Waste>('marc');
  const [sacs, setSacs] = useState(1);

  const onVendre = () => {
    if (!canSellToday()) {
      Alert.alert(
        'Vente déjà effectuée',
        'Vous ne pouvez proposer votre quantité collectée qu’une seule fois par jour. Revenez demain.'
      );
      return;
    }
    recordSaleToday();
    router.replace(OFFER_SENT);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.body}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AppLogo size={38} />
        <View style={styles.divider} />
        <Text style={styles.title}>Vente du jour</Text>
        <Text style={styles.sub}>
          Indiquez ce que vous collectez aujourd’hui (une seule vente par jour).
        </Text>

        <Text style={styles.section}>Produit</Text>
        <View style={styles.typesRow}>
          <Pressable
            style={[styles.typeCard, waste === 'marc' && styles.typeCardOn]}
            onPress={() => setWaste('marc')}
          >
            <MaterialCommunityIcons name="coffee" size={32} color={palette.primary} />
            <Text style={styles.typeTxt}>Marc de café</Text>
          </Pressable>
          <Pressable
            style={[styles.typeCard, waste === 'the' && styles.typeCardOn]}
            onPress={() => setWaste('the')}
          >
            <MaterialCommunityIcons name="tea" size={32} color={palette.primary} />
            <Text style={styles.typeTxt}>Déchet de thé</Text>
          </Pressable>
        </View>

        <Text style={styles.section}>Nombre de sacs remplis (aujourd’hui)</Text>
        <Text style={styles.sliderHint}>Glissez sur la barre entre 1 et 10 sacs.</Text>
        <KgSlider
          value={sacs}
          onChange={setSacs}
          min={1}
          max={10}
          formatLabel={sacLabel}
        />

        <Pressable style={styles.vendre} onPress={onVendre} hitSlop={8}>
          <Text style={styles.vendreTxt}>Vendre</Text>
        </Pressable>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  body: { paddingHorizontal: 18, paddingTop: 8, paddingBottom: 28 },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: palette.border, marginVertical: 12 },
  title: { fontSize: 22, fontWeight: '800', color: palette.text, fontFamily: serif },
  sub: { fontSize: 14, color: '#777', marginTop: 6, marginBottom: 18, fontFamily: serif, lineHeight: 20 },
  section: { fontSize: 13, fontWeight: '700', color: palette.accent, marginBottom: 10, fontFamily: serif },
  typesRow: { flexDirection: 'row', gap: 12, marginBottom: 22 },
  typeCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  typeCardOn: { borderColor: palette.primary, backgroundColor: '#e8f2dc' },
  typeTxt: { fontSize: 14, fontWeight: '600', color: palette.accent, fontFamily: serif },
  sliderHint: { fontSize: 12, color: '#888', marginBottom: 8, fontFamily: serif },
  vendre: {
    marginTop: 8,
    backgroundColor: palette.primary,
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
  },
  vendreTxt: { color: '#fff', fontWeight: '800', fontSize: 18, fontFamily: serif },
});
