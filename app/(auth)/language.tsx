import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AppLanguage, useAppContext } from '@/context/app-context';
import { translations } from '@/constants/translations';
import { palette } from '@/constants/ui';

export default function LanguageScreen() {
  const { setLanguage } = useAppContext();

  const onSelectLanguage = (lang: AppLanguage) => {
    setLanguage(lang);
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>Valorizi</Text>
        <Text style={styles.subtitle}>{translations.fr.chooseLanguage}</Text>
        <View style={styles.buttonGroup}>
          <Pressable style={styles.languageButton} onPress={() => onSelectLanguage('fr')}>
            <Text style={styles.buttonLabel}>Francais</Text>
          </Pressable>
          <Pressable style={styles.languageButton} onPress={() => onSelectLanguage('ar')}>
            <Text style={styles.buttonLabel}>العربية</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { flex: 1, paddingHorizontal: 28, justifyContent: 'center' },
  logo: {
    fontSize: 50,
    color: palette.primary,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 22,
    color: palette.accent,
    fontWeight: '700',
    marginBottom: 28,
  },
  buttonGroup: { gap: 14 },
  languageButton: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 12,
    backgroundColor: palette.card,
    paddingVertical: 14,
  },
  buttonLabel: { textAlign: 'center', fontSize: 18, color: palette.text, fontWeight: '600' },
});
