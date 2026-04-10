import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNav, serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function OrderDeliveredScreen() {
  const home = '/(valorisateur)/dashboard';
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="check" size={40} color="#1a1a1a" />
        </View>
        <Text style={styles.mainTitle}>Commande Livrée !</Text>
        <View style={styles.divider} />

        <View style={styles.reviewCard}>
          <Text style={styles.reviewTitle}>Laisser un avis</Text>
          <TextInput
            value={comment}
            onChangeText={setComment}
            placeholder="Votre commentaire (facultatif)."
            placeholderTextColor="#a0a0a0"
            multiline
            style={styles.input}
            textAlignVertical="top"
          />
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Pressable key={n} onPress={() => setRating(n)}>
                <MaterialCommunityIcons
                  name={n <= rating ? 'star-circle' : 'star-circle-outline'}
                  size={36}
                  color={n <= rating ? palette.primary : '#c8c8c8'}
                />
              </Pressable>
            ))}
          </View>
        </View>

        <Pressable style={styles.sendBtn} onPress={() => setSent(true)}>
          <Text style={styles.sendTxt}>Envoyer</Text>
        </Pressable>
        {sent ? <Text style={styles.thanks}>Merci pour votre vote !</Text> : null}
      </ScrollView>
      <BottomNav homeHref={home} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#5cb82e',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    color: palette.primary,
    fontFamily: serif,
    marginBottom: 12,
  },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: palette.border, marginBottom: 12 },
  reviewCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 16,
    padding: 16,
    marginTop: 18,
    marginBottom: 28,
  },
  reviewTitle: {
    fontSize: 40 / 2,
    fontWeight: '800',
    color: palette.primary,
    textAlign: 'center',
    marginBottom: 14,
    fontFamily: serif,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 8,
    minHeight: 110,
    padding: 12,
    fontSize: 15,
    color: '#333',
    fontFamily: serif,
    marginBottom: 16,
  },
  starsRow: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
  sendBtn: {
    backgroundColor: palette.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  sendTxt: { color: '#fff', fontSize: 40 / 2, fontWeight: '800', fontFamily: serif },
  thanks: { textAlign: 'center', color: palette.primary, fontSize: 16, fontFamily: serif, fontWeight: '700' },
});
