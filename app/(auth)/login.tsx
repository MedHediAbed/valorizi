import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppContext } from '@/context/app-context';
import { translations } from '@/constants/translations';
import { palette } from '@/constants/ui';

export default function LoginScreen() {
  const { language } = useAppContext();
  const t = translations[language ?? 'fr'];
  const isArabic = language === 'ar';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>Valorizi</Text>
        <Text style={[styles.title, isArabic && styles.rtl]}>{t.loginTitle}</Text>

        <Text style={[styles.label, isArabic && styles.rtl]}>{t.emailOrPhone}</Text>
        <TextInput
          placeholder={t.emailOrPhone}
          style={[styles.input, isArabic && styles.rtl]}
          placeholderTextColor="#7e7e7e"
          textAlign={isArabic ? 'right' : 'left'}
        />

        <Text style={[styles.label, styles.labelSpacing, isArabic && styles.rtl]}>{t.password}</Text>
        <TextInput
          placeholder="********"
          secureTextEntry
          style={[styles.input, isArabic && styles.rtl]}
          placeholderTextColor="#7e7e7e"
          textAlign={isArabic ? 'right' : 'left'}
        />

        <Text style={[styles.forgot, isArabic && styles.rtl]}>{t.forgotPassword}</Text>

        <Pressable style={styles.primaryBtn} onPress={() => router.push('/(auth)/register')}>
          <Text style={styles.primaryText}>{t.next}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 60 },
  logo: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: '800',
    color: palette.primary,
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '700',
    color: palette.accent,
    marginBottom: 28,
  },
  label: { color: palette.accent, fontSize: 22, fontWeight: '600', marginBottom: 8 },
  labelSpacing: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#93ab65',
    borderRadius: 10,
    backgroundColor: palette.card,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
  },
  forgot: { textAlign: 'right', marginTop: 12, marginBottom: 20, fontSize: 16, color: palette.accent },
  primaryBtn: {
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: palette.primary,
    paddingVertical: 14,
  },
  primaryText: { color: '#fff', textAlign: 'center', fontWeight: '700', fontSize: 18 },
  rtl: { writingDirection: 'rtl' },
});
