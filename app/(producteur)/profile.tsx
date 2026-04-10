import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function ProducteurProfileScreen() {
  const home = '/(producteur)/dashboard';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerBg}>
          <View style={styles.topIcons}>
            <Ionicons name="notifications-outline" size={24} color="#111" />
            <View style={styles.topRight}>
              <Ionicons name="time-outline" size={22} color="#111" />
              <Ionicons name="ellipsis-vertical" size={22} color="#111" />
            </View>
          </View>
        </View>

        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={72} color="#fff" />
          </View>
          <Pressable style={styles.editFab} onPress={() => router.push('/profile-edit')}>
            <Ionicons name="create-outline" size={20} color="#111" />
          </Pressable>
        </View>

        <Text style={styles.name}>Lina Nait</Text>
        <Text style={styles.meta}>youremail@domain.com | 06666666</Text>

        <Card>
          <Row icon="id-card-outline" label="Modifier le profil" onPress={() => router.push('/profile-edit')} />
          <Row icon="notifications-outline" label="Notifications" value="ON" onPress={() => router.push('/(producteur)/notifications')} />
          <Row icon="language-outline" label="Langue" value="Français" onPress={() => router.push('/profile-language')} />
        </Card>

        <Card>
          <Row icon="shield-checkmark-outline" label="Sécurité" onPress={() => router.push('/profile-security')} />
          <Row icon="color-palette-outline" label="Thème" onPress={() => router.push('/profile-theme')} />
        </Card>

        <Card>
          <Row icon="help-circle-outline" label="Aide" onPress={() => router.push('/profile-help')} />
          <Row icon="chatbox-ellipses-outline" label="Contact" onPress={() => router.push('/profile-contact')} />
          <Row icon="lock-closed-outline" label="Compte privé" onPress={() => router.push('/profile-privacy')} />
        </Card>

        <Pressable style={styles.logoutBtn} onPress={() => router.replace('/(auth)/login')}>
          <MaterialCommunityIcons name="logout" size={20} color="#fff" />
          <Text style={styles.logoutTxt}>Log out</Text>
        </Pressable>
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

function Card({ children }: { children: any }) {
  return <View style={styles.card}>{children}</View>;
}

function Row({
  icon,
  label,
  value,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value?: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={styles.rowLeft}>
        <Ionicons name={icon} size={20} color="#111" />
        <Text style={styles.rowLabel}>{label}</Text>
      </View>
      {value ? <Text style={styles.rowValue}>{value}</Text> : <Ionicons name="chevron-forward" size={16} color="#999" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { paddingBottom: 20 },
  headerBg: { height: 180, backgroundColor: palette.primary, borderBottomLeftRadius: 80, borderBottomRightRadius: 80 },
  topIcons: { paddingHorizontal: 20, paddingTop: 14, flexDirection: 'row', justifyContent: 'space-between' },
  topRight: { flexDirection: 'row', gap: 14 },
  avatarWrap: { alignItems: 'center', marginTop: -56, marginBottom: 10 },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#8ab4e0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  editFab: {
    position: 'absolute',
    right: '33%',
    bottom: 2,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: { textAlign: 'center', fontSize: 42 / 2, fontWeight: '800', color: '#111', fontFamily: serif },
  meta: { textAlign: 'center', color: '#444', marginTop: 6, marginBottom: 14, fontFamily: serif },
  card: {
    marginHorizontal: 20,
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rowLabel: { fontSize: 17 / 1.1, color: '#111', fontFamily: serif },
  rowValue: { fontSize: 17 / 1.2, color: '#6d2d07', fontFamily: serif },
  logoutBtn: {
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 24,
    backgroundColor: palette.accent,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  logoutTxt: { color: '#fff', fontWeight: '700', fontSize: 16, fontFamily: serif },
});
