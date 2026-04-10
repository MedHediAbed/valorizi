import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppLogo, serif } from '@/components/wireframe-ui';
import { useAppContext } from '@/context/app-context';
import { translations } from '@/constants/translations';
import { palette } from '@/constants/ui';

export default function LoginScreen() {
  const { language } = useAppContext();
  const t = translations[language ?? 'fr'];
  const isArabic = language === 'ar';
  const [showPw, setShowPw] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <AppLogo size={46} />
        <Text style={[styles.title, isArabic && styles.rtl]}>{t.loginTitle}</Text>

        <Text style={[styles.label, isArabic && styles.rtl]}>{t.emailOrPhone}</Text>
        <TextInput
          placeholder={t.emailOrPhone}
          style={[styles.input, isArabic && styles.rtl]}
          placeholderTextColor="#6d8f4a"
          textAlign={isArabic ? 'right' : 'left'}
        />

        <Text style={[styles.label, styles.labelSpacing, isArabic && styles.rtl]}>{t.password}</Text>
        <View style={styles.pwWrap}>
          <TextInput
            placeholder="********"
            secureTextEntry={!showPw}
            style={[styles.input, styles.pwInput, isArabic && styles.rtl]}
            placeholderTextColor="#6d8f4a"
            textAlign={isArabic ? 'right' : 'left'}
          />
          <Pressable style={styles.eye} onPress={() => setShowPw((s) => !s)}>
            <Text style={styles.eyeTxt}>👁</Text>
          </Pressable>
        </View>

        <Text style={[styles.forgot, isArabic && styles.rtl]}>{t.forgotPassword}</Text>

        <Pressable style={styles.primaryBtn} onPress={() => router.push('/(auth)/register-producteur')}>
          <Text style={styles.primaryText}>{t.next.toUpperCase()}</Text>
        </Pressable>

        <View style={styles.orRow}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.orLine} />
        </View>

        <Pressable style={styles.social}>
          <Text style={styles.socialTxt}>Continuer avec Apple</Text>
        </Pressable>
        <Pressable style={styles.social}>
          <Text style={styles.socialTxt}>Continuer avec Google</Text>
        </Pressable>
        <Pressable style={styles.social}>
          <Text style={styles.socialTxt}>Continuer avec Facebook</Text>
        </Pressable>

        <Pressable style={styles.createAccount} onPress={() => router.push('/(auth)/register')}>
          <Text style={styles.createAccountTxt}>Créer un compte</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 28 },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: palette.accent,
    marginBottom: 24,
    fontFamily: serif,
  },
  label: { color: palette.accent, fontSize: 17, fontWeight: '600', marginBottom: 8, fontFamily: serif },
  labelSpacing: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 10,
    backgroundColor: palette.card,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: serif,
  },
  pwWrap: { position: 'relative' },
  pwInput: { paddingRight: 44 },
  eye: { position: 'absolute', right: 14, top: 14 },
  eyeTxt: { fontSize: 18, color: palette.primary },
  forgot: { textAlign: 'right', marginTop: 12, marginBottom: 20, fontSize: 15, color: palette.accent, fontFamily: serif },
  primaryBtn: {
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: palette.primary,
    paddingVertical: 16,
  },
  primaryText: { color: '#fff', textAlign: 'center', fontWeight: '800', fontSize: 17 },
  orRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 22, gap: 12 },
  orLine: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: palette.border },
  orText: { color: '#888', fontSize: 14, fontFamily: serif },
  social: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 24,
    paddingVertical: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  socialTxt: { textAlign: 'center', fontSize: 15, color: palette.text, fontFamily: serif },
  createAccount: { marginTop: 18, paddingVertical: 12 },
  createAccountTxt: { textAlign: 'center', fontSize: 16, color: '#000', fontWeight: '600', fontFamily: serif },
  rtl: { writingDirection: 'rtl' },
});
