import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '@/context/app-context';
import { translations } from '@/constants/translations';
import { palette } from '@/constants/ui';

export default function RegisterScreen() {
  const { language, setRole } = useAppContext();
  const t = translations[language ?? 'fr'];
  const isArabic = language === 'ar';

  const chooseRole = (role: 'producteur' | 'valorisateur' | 'transporteur') => {
    setRole(role);
    router.replace(`/${`(${role})`}/dashboard`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, isArabic && styles.rtl]}>{t.chooseRole}</Text>

        <View style={styles.grid}>
          <Pressable style={styles.roleCard} onPress={() => chooseRole('producteur')}>
            <Text style={styles.emoji}>♻️</Text>
            <Text style={styles.roleText}>{t.producteur}</Text>
          </Pressable>
          <Pressable style={styles.roleCard} onPress={() => chooseRole('valorisateur')}>
            <Text style={styles.emoji}>🏪</Text>
            <Text style={styles.roleText}>{t.valorisateur}</Text>
          </Pressable>
        </View>

        <Pressable style={[styles.roleCard, styles.transport]} onPress={() => chooseRole('transporteur')}>
          <Text style={styles.emoji}>🚚</Text>
          <Text style={styles.roleText}>{t.transporteur}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 80 },
  title: {
    fontSize: 44,
    lineHeight: 52,
    color: palette.accent,
    fontWeight: '800',
    marginBottom: 44,
  },
  grid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
  roleCard: {
    backgroundColor: palette.mutedGreen,
    borderRadius: 30,
    width: '47%',
    paddingVertical: 24,
    alignItems: 'center',
  },
  transport: { width: '55%', alignSelf: 'center' },
  emoji: { fontSize: 40, marginBottom: 10 },
  roleText: { fontSize: 30, color: palette.accent, fontWeight: '600' },
  rtl: { writingDirection: 'rtl' },
});
