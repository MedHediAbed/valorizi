import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function OrderConfirmedScreen() {
  const home = '/(valorisateur)/dashboard';
  const [routeOk, setRouteOk] = useState(false);
  const [deliveryOk, setDeliveryOk] = useState(false);

  useEffect(() => {
    if (routeOk && deliveryOk) {
      router.replace('/(valorisateur)/order-delivered');
    }
  }, [routeOk, deliveryOk]);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="check" size={40} color="#1a1a1a" />
        </View>
        <Text style={styles.mainTitle}>Commande confirmée !</Text>
        <View style={styles.divider} />
        <Text style={styles.line}>☕ Marc de café . 20 kg demandés</Text>

        <View style={styles.recap}>
          <Text style={styles.recapTitle}>Récap</Text>
          <Row label="Déchet" value="☕ Marc de café" />
          <Row label="Quantité" value="18 kg" />
          <Row label="Prix total" value="16.2 DT" />
          <View style={styles.hr} />
          <View style={styles.dateRow}>
            <Text style={styles.dateLbl}>Date</Text>
            <View style={styles.dateBadge}>
              <Text style={styles.dateBadgeTxt}>Aujourd&apos;hui</Text>
            </View>
          </View>
        </View>

        <View style={styles.trackCard}>
          <Text style={styles.trackTitle}>Suivi logistique</Text>
          <Step done label="Offre acceptée" />
          <Step done label="Transporteur assigné" />
          <Step done={routeOk} label="En route pour collecte.." onPress={() => setRouteOk(true)} variant="accent" />
          <Step
            done={deliveryOk}
            label="Livraison confirmée"
            onPress={() => setDeliveryOk(true)}
            variant="muted"
          />
        </View>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLbl}>{label}</Text>
      <Text style={styles.rowVal}>{value}</Text>
    </View>
  );
}

function Step({
  done,
  label,
  onPress,
  variant,
}: {
  done: boolean;
  label: string;
  onPress?: () => void;
  variant?: 'accent' | 'muted';
}) {
  const muted = variant === 'muted' && !done;
  const content = (
    <View style={styles.stepRow}>
      {done ? (
        <View style={styles.stepDotDone}>
          <MaterialCommunityIcons name="check" size={14} color="#1a1a1a" />
        </View>
      ) : (
        <View style={[styles.stepDot, muted ? styles.stepDotMuted : styles.stepDotAccent]} />
      )}
      <Text style={[styles.stepTxt, muted && styles.stepTxtMuted]}>{label}</Text>
    </View>
  );
  if (onPress && !done) {
    return <Pressable onPress={onPress}>{content}</Pressable>;
  }
  return content;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#5cb82e',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    color: palette.primary,
    fontFamily: serif,
    marginBottom: 12,
  },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: palette.border, marginBottom: 12 },
  line: { textAlign: 'center', color: '#666', fontSize: 15, marginBottom: 18, fontFamily: serif },
  recap: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  recapTitle: { color: '#aaa', fontSize: 13, marginBottom: 10, fontFamily: serif },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  rowLbl: { color: '#555', fontFamily: serif },
  rowVal: { fontWeight: '700', fontFamily: serif },
  hr: { height: StyleSheet.hairlineWidth, backgroundColor: palette.border, marginVertical: 10 },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dateLbl: { color: '#555', fontFamily: serif },
  dateBadge: { backgroundColor: '#e0f8d1', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 16 },
  dateBadgeTxt: { color: palette.primary, fontWeight: '700', fontFamily: serif },
  trackCard: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 16,
  },
  trackTitle: { color: '#888', fontSize: 15, marginBottom: 14, fontFamily: serif },
  stepRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  stepDotDone: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#5cb82e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDot: { width: 22, height: 22, borderRadius: 11 },
  stepDotAccent: { backgroundColor: palette.accent },
  stepDotMuted: { backgroundColor: '#d0d0d0' },
  stepTxt: { fontSize: 15, fontFamily: serif, color: '#1a1a1a' },
  stepTxtMuted: { color: '#b0b0b0' },
});
