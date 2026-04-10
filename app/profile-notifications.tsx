import { router } from 'expo-router';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { palette } from '@/constants/ui';
import { serif } from '@/components/wireframe-ui';

export default function ProfileNotificationsScreen() {
  const [commonNotif, setCommonNotif] = useState(true);
  const [sound, setSound] = useState(false);
  const [vibration, setVibration] = useState(true);
  const [appUpdate, setAppUpdate] = useState(false);
  const [payReminder, setPayReminder] = useState(true);
  const [promotion, setPromotion] = useState(true);
  const [payRequest, setPayRequest] = useState(false);
  const [newService, setNewService] = useState(false);
  const [newOccasion, setNewOccasion] = useState(true);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.body}>
        <View style={styles.topRow}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#111" />
          </Pressable>
          <Text style={styles.title}>Notifications</Text>
          <View style={styles.spacer} />
        </View>

        <Text style={styles.section}>Commun</Text>
        <ToggleRow label="Notifications" value={commonNotif} onChange={setCommonNotif} />
        <ToggleRow label="Son" value={sound} onChange={setSound} />
        <ToggleRow label="Vibration" value={vibration} onChange={setVibration} />

        <View style={styles.hr} />

        <Text style={styles.section}>Mise à Jour</Text>
        <ToggleRow label="Mise à jour de l’App" value={appUpdate} onChange={setAppUpdate} />
        <ToggleRow label="Rappel Paiement" value={payReminder} onChange={setPayReminder} />
        <ToggleRow label="Promotion" value={promotion} onChange={setPromotion} />
        <ToggleRow label="Demande de Paiement" value={payRequest} onChange={setPayRequest} />

        <View style={styles.hr} />

        <Text style={styles.section}>Autre</Text>
        <ToggleRow label="Nouveau Service" value={newService} onChange={setNewService} />
        <ToggleRow label="Nouvelle occasion" value={newOccasion} onChange={setNewOccasion} />
      </View>
    </SafeAreaView>
  );
}

function ToggleRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: '#d6d6d6', true: '#4a8b0a' }}
        thumbColor="#f2f2f2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  body: { flex: 1, padding: 20 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 },
  title: { fontSize: 22, fontWeight: '800', color: '#111', fontFamily: serif },
  spacer: { width: 24 },
  section: { fontSize: 42 / 2, fontWeight: '800', color: '#111', marginTop: 6, marginBottom: 8, fontFamily: serif },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 },
  rowLabel: { fontSize: 18, color: '#1f1f1f', fontFamily: serif },
  hr: { height: StyleSheet.hairlineWidth, backgroundColor: '#ddd', marginVertical: 14 },
});
