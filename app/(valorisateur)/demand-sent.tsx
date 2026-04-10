import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function DemandSentScreen() {
  const home = '/(valorisateur)/dashboard';

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.body}>
        <View style={styles.confirmBox}>
          <Text style={styles.confirmTxt}>Demande publiée</Text>
          <MaterialCommunityIcons name="check" size={56} color="#fff" />
        </View>
        <Pressable onPress={() => router.replace('/(valorisateur)/dashboard')}>
          <Text style={styles.backLink}>Retour</Text>
        </Pressable>
      </View>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
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
