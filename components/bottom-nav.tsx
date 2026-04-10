import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import { palette } from '@/constants/ui';

type Role = 'producteur' | 'valorisateur';

type Props = {
  role: Role;
  /** Tab stylé comme actif (souvent Profile sur les maquettes) */
  active: 'home' | 'profile' | 'other';
};

export function BottomNav({ role, active }: Props) {
  const homeHref: Href = role === 'producteur' ? '/(producteur)/dashboard' : '/(valorisateur)/dashboard';

  const goHome = () => router.replace(homeHref);
  const goProfile = () => router.push(role === 'producteur' ? '/(producteur)/profile' : '/(valorisateur)/profile');

  const iconColor = (tab: 'home' | 'profile') => {
    if (tab === 'home' && active === 'home') return palette.primary;
    if (tab === 'profile' && active === 'profile') return palette.accent;
    return '#1f1f1f';
  };

  return (
    <View style={styles.bar}>
      <NavItem icon="pie-chart-outline" label="Aide" />
      <NavItem icon="card-outline" label="Accès" />
      <Pressable style={[styles.homeWrap, active === 'home' && styles.homeActive]} onPress={goHome}>
        <Ionicons name="home" size={22} color={iconColor('home')} />
      </Pressable>
      <NavItem icon="wallet-outline" label="Crédit" />
      <Pressable style={styles.profileCol} onPress={goProfile}>
        <Ionicons name="person-outline" size={22} color={iconColor('profile')} />
        <Text style={[styles.label, active === 'profile' && styles.labelProfile]}>Profile</Text>
      </Pressable>
    </View>
  );
}

function NavItem({ icon, label }: { icon: keyof typeof Ionicons.glyphMap; label: string }) {
  return (
    <View style={styles.item}>
      <Ionicons name={icon} size={22} color="#1f1f1f" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: palette.border,
  },
  item: { alignItems: 'center', gap: 2, minWidth: 52 },
  profileCol: { alignItems: 'center', gap: 2, minWidth: 52 },
  label: { fontSize: 10, color: '#333' },
  labelProfile: { color: palette.accent, fontWeight: '600' },
  homeWrap: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#f3f3f3',
  },
  homeActive: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: palette.border,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
});
