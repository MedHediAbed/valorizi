import { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '@/constants/ui';
import { BottomNav } from '@/components/bottom-nav';

type Phase = 0 | 1;

export default function OrderConfirmScreen() {
  const [phase, setPhase] = useState<Phase>(0);

  const onCollecte = () => {
    if (phase === 0) setPhase(1);
  };

  const onLivraison = () => {
    if (phase === 1) router.replace('/(valorisateur)/order-delivered');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.successCircle}>
          <Ionicons name="checkmark" size={40} color="#1a1a1a" />
        </View>
        <Text style={styles.mainTitle}>Commande confirmée !</Text>

        <View style={styles.divider} />
        <View style={styles.summaryLine}>
          <Text style={styles.summaryEmoji}>☕</Text>
          <Text style={styles.summaryText}>Marc de café . 20 kg demandés</Text>
        </View>

        <View style={styles.recap}>
          <Text style={styles.cardTitle}>Récap</Text>
          <Row label="Déchet" value="☕ Marc de café" bold />
          <Row label="Quantité" value="18 kg" bold />
          <Row label="Prix total" value="16.2 DT" bold />
          <View style={styles.recapDivider} />
          <View style={styles.dateRow}>
            <Text style={styles.dateLabel}>Date</Text>
            <View style={styles.datePill}>
              <Text style={styles.datePillText}>Aujourd&apos;hui</Text>
            </View>
          </View>
        </View>

        <View style={styles.logistics}>
          <Text style={styles.cardTitle}>Suivi logistique</Text>
          <Step done label="Offre acceptée" />
          <Step done label="Transporteur assigné" />
          <Step
            done={phase >= 1}
            label="En route pour collecte.."
            pendingStyle={phase === 0}
            brown={phase === 0}
            onPress={onCollecte}
          />
          <Step
            done={false}
            label="Livraison confirmée"
            pendingStyle={phase === 1}
            brown={phase === 1}
            onPress={onLivraison}
            muted={phase === 0}
          />
        </View>
      </ScrollView>
      <BottomNav role="valorisateur" active="profile" />
    </SafeAreaView>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, bold && styles.rowValueBold]}>{value}</Text>
    </View>
  );
}

function Step({
  done,
  label,
  pendingStyle,
  brown,
  muted,
  onPress,
}: {
  done: boolean;
  label: string;
  pendingStyle?: boolean;
  brown?: boolean;
  muted?: boolean;
  onPress?: () => void;
}) {
  const content = (
    <View style={styles.stepRow}>
      {done ? (
        <View style={styles.stepDotOk}>
          <Ionicons name="checkmark" size={14} color="#1a1a1a" />
        </View>
      ) : (
        <View style={[styles.stepDot, brown && styles.stepDotBrown, muted && styles.stepDotMuted]} />
      )}
      <Text
        style={[
          styles.stepText,
          done && styles.stepTextOk,
          brown && styles.stepTextBrown,
          muted && styles.stepTextMuted,
        ]}>
        {label}
      </Text>
    </View>
  );

  if (pendingStyle && onPress) {
    return (
      <Pressable onPress={onPress} style={styles.stepPress}>
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { paddingHorizontal: 20, paddingBottom: 20, paddingTop: 16 },
  successCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: palette.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: palette.primary,
    marginBottom: 16,
  },
  divider: { height: 1, backgroundColor: palette.border, marginBottom: 12 },
  summaryLine: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 20 },
  summaryEmoji: { fontSize: 20 },
  summaryText: { fontSize: 15, color: '#444', fontWeight: '600' },
  recap: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 14, color: '#999', marginBottom: 12, fontWeight: '600' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  rowLabel: { color: '#666', fontSize: 14 },
  rowValue: { fontSize: 14, color: '#333' },
  rowValueBold: { fontWeight: '700' },
  recapDivider: { height: 1, backgroundColor: palette.border, marginVertical: 10 },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dateLabel: { color: '#666' },
  datePill: {
    backgroundColor: '#e6efd9',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
  },
  datePillText: { color: palette.primary, fontWeight: '700', fontSize: 13 },
  logistics: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 14,
    padding: 16,
  },
  stepRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 },
  stepDotOk: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDot: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#e0e0e0' },
  stepDotBrown: { backgroundColor: palette.accent },
  stepDotMuted: { backgroundColor: '#e8e8e8' },
  stepText: { fontSize: 15, color: '#000', fontWeight: '700' },
  stepTextOk: { color: '#000' },
  stepTextBrown: { color: palette.accent },
  stepTextMuted: { color: '#aaa', fontWeight: '600' },
  stepPress: { marginBottom: 0 },
});
