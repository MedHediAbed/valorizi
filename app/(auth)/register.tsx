import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackChevron, serif } from '@/components/wireframe-ui';
import { useAppContext } from '@/context/app-context';
import { translations } from '@/constants/translations';
import { palette } from '@/constants/ui';

export default function ChooseUserTypeScreen() {
  const { language } = useAppContext();
  const t = translations[language ?? 'fr'];
  const isArabic = language === 'ar';

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <BackChevron onPress={() => router.replace('/(auth)/login')} color={palette.primary} />
        <Text style={[styles.title, isArabic && styles.rtl]}>{t.chooseRole.toUpperCase()}</Text>

        <View style={styles.grid}>
          <Pressable style={styles.roleCard} onPress={() => router.push('/(auth)/register-producteur')}>
            <MaterialCommunityIcons name="recycle" size={48} color="#fff" />
            <Text style={styles.roleText}>{t.producteur}</Text>
          </Pressable>
          <Pressable style={styles.roleCard} onPress={() => router.push('/(auth)/register-valorisateur')}>
            <MaterialCommunityIcons name="storefront-outline" size={48} color="#fff" />
            <Text style={styles.roleText}>{t.valorisateur}</Text>
          </Pressable>
        </View>

        <Pressable style={[styles.roleCard, styles.transport]} onPress={() => router.push('/(auth)/register-transporteur')}>
          <MaterialCommunityIcons name="truck-outline" size={48} color="#fff" />
          <Text style={styles.roleText}>{t.transporteur}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  content: { paddingTop: 8, paddingBottom: 28 },
  title: {
    fontSize: 22,
    lineHeight: 30,
    color: palette.accent,
    fontWeight: '800',
    marginBottom: 36,
    textAlign: 'center',
    fontFamily: serif,
  },
  grid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
  roleCard: {
    backgroundColor: palette.mutedGreen,
    borderRadius: 28,
    width: '47%',
    paddingVertical: 28,
    alignItems: 'center',
    gap: 10,
  },
  transport: { width: '55%', alignSelf: 'center' },
  roleText: { fontSize: 22, color: palette.accent, fontWeight: '700', fontFamily: serif },
  rtl: { writingDirection: 'rtl' },
});
