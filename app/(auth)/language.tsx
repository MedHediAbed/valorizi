import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppLogo, BackChevron } from '@/components/wireframe-ui';
import { AppLanguage, useAppContext } from '@/context/app-context';
import { translations } from '@/constants/translations';
import { palette } from '@/constants/ui';

export default function LanguageScreen() {
  const { setLanguage } = useAppContext();
  const navigation = useNavigation();

  const onSelectLanguage = (lang: AppLanguage) => {
    setLanguage(lang);
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topBar}>
          <BackChevron
            onPress={() => {
              if (navigation.canGoBack()) navigation.goBack();
            }}
          />
        </View>
        <AppLogo size={48} />
        <Text style={styles.subtitle}>{translations.fr.chooseLanguage}</Text>
        <View style={styles.buttonGroup}>
          <Pressable style={styles.languageButton} onPress={() => onSelectLanguage('fr')}>
            <Text style={styles.buttonLabel}>Francais</Text>
          </Pressable>
          <Pressable style={styles.languageButton} onPress={() => onSelectLanguage('ar')}>
            <Text style={styles.buttonLabel}>العربية</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  topBar: { paddingHorizontal: 16, paddingTop: 4 },
  content: { flexGrow: 1, paddingHorizontal: 28, justifyContent: 'center', paddingBottom: 24 },
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
