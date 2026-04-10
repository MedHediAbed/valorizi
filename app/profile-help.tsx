import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { serif } from '@/components/wireframe-ui';
import { palette } from '@/constants/ui';

export default function ProfileHelpScreen() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: 'Qui sommes-nous ?',
      a: "Valorizi est une initiative d'économie circulaire qui valorise les déchets organiques, notamment les marcs de café et le thé, en les transformant en ressources utiles. Nous connectons producteurs et entreprises de valorisation afin de réduire le gaspillage et créer de la valeur durable. Notre mission est de contribuer à un modèle écologique, responsable et économiquement bénéfique pour tous les acteurs.",
    },
    { q: 'Comment ca marche ?', a: "Vous publiez une offre ou une demande, puis l'app facilite la mise en relation et la logistique." },
    { q: 'Quels déchets collectez-vous ?', a: 'Nous collectons principalement marc de cafe, the usage et autres biodechets compatibles.' },
    { q: "C'est payant ?", a: 'Linscription est gratuite. Certains services avances peuvent etre payants selon les offres.' },
    { q: 'La qualité est-elle garantie ?', a: 'La qualite depend des offres, des notes et des criteres de suivi pour chaque commande.' },
    { q: 'Comment se passe la livraison ?', a: 'Le transporteur est assigne et le suivi logistique confirme chaque etape jusqua la livraison.' },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.topRow}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={26} color="#111" />
          </Pressable>
          <Text style={styles.title}>Aide</Text>
          <Ionicons name="settings-outline" size={24} color="#111" />
        </View>

        <Text style={styles.headline}>Besoin d'aide ? Nous sommes la. Valorizi, toujours a votre service.</Text>
        <Text style={styles.sub}>
          « Chez Valorizi, nous avancons avec vous pour un avenir plus vert. Un souci ou une question ? Notre equipe est a votre ecoute. »
        </Text>

        <View style={styles.search}>
          <Ionicons name="search" size={22} color="#555" />
          <TextInput placeholder="Cherchez" placeholderTextColor="#777" style={styles.searchInput} />
        </View>

        <Text style={styles.faqTitle}>FAQ</Text>
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <View key={item.q} style={styles.faqRowWrap}>
              <Pressable style={styles.faqRow} onPress={() => setOpen(isOpen ? null : idx)}>
                <Text style={styles.faqQ}>{item.q}</Text>
                <Text style={styles.plus}>+</Text>
              </Pressable>
              {isOpen ? <Text style={styles.faqA}>{item.a}</Text> : null}
            </View>
          );
        })}

        <View style={styles.contactBox}>
          <Text style={styles.contactTitle}>Toujours confus ? Envoyez un e-mail.</Text>
          <Pressable style={styles.contactBtn} onPress={() => router.push('/profile-contact')}>
            <Text style={styles.contactTxt}>Contact</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  body: { paddingBottom: 24 },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    marginBottom: 12,
  },
  title: { fontSize: 34 / 2, fontWeight: '700', color: '#6d2d07', fontFamily: serif },
  headline: {
    fontSize: 54 / 2,
    lineHeight: 1.2 * (54 / 2),
    color: '#111',
    fontFamily: serif,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sub: { color: '#555', fontSize: 16 / 1.05, paddingHorizontal: 20, fontFamily: serif, marginBottom: 12 },
  search: {
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 16,
  },
  searchInput: { flex: 1, height: 46, fontSize: 16, fontFamily: serif },
  faqTitle: { paddingHorizontal: 20, fontSize: 36 / 2, fontWeight: '800', color: '#111', marginBottom: 8, fontFamily: serif },
  faqRowWrap: { borderTopWidth: 1, borderTopColor: '#ddd' },
  faqRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  faqQ: { fontSize: 16 / 1.02, color: '#464646', fontWeight: '700', fontFamily: serif },
  plus: { fontSize: 32 / 1.2, color: '#7a7a7a' },
  faqA: { paddingHorizontal: 20, paddingBottom: 12, color: '#474747', fontSize: 16 / 1.1, fontFamily: serif },
  contactBox: { borderTopWidth: 1, borderTopColor: '#ddd', marginTop: 10, paddingTop: 12, paddingHorizontal: 16 },
  contactTitle: { textAlign: 'center', fontSize: 40 / 2, color: '#111', fontWeight: '800', marginBottom: 10, fontFamily: serif },
  contactBtn: {
    backgroundColor: '#6d2000',
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
  },
  contactTxt: { color: '#fff', fontSize: 20, fontWeight: '800', fontFamily: serif },
});
