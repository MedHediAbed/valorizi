import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function OfferSentScreen() {
  const home = '/(producteur)/dashboard';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <Text style={styles.pageTitle}>Mon offre</Text>
      <View style={styles.divider} />
      <View style={styles.body}>
        <View style={styles.confirmBox}>
          <Text style={styles.confirmTxt}>Offre envoyée</Text>
          <MaterialCommunityIcons name="check" size={56} color="#fff" />
        </View>
        <Pressable onPress={() => router.replace('/(producteur)/dashboard')}>
          <Text style={styles.backLink}>Retour</Text>
        </Pressable>
      </View>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  pageTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    fontFamily: serif,
    color: '#111',
    paddingTop: 12,
    paddingBottom: 10,
  },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: '#ccc' },
  body: { flex: 1, justifyContent: 'center', paddingHorizontal: 32 },
  confirmBox: {
    backgroundColor: palette.primary,
    borderRadius: 20,
    paddingVertical: 36,
    alignItems: 'center',
    gap: 12,
  },
  confirmTxt: { color: '#fff', fontSize: 22, fontWeight: '800', fontFamily: serif },
  backLink: {
    textAlign: 'center',
    marginTop: 28,
    fontSize: 17,
    fontWeight: '800',
    color: '#000',
    fontFamily: serif,
  },
});
