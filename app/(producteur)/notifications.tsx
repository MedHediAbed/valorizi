import { router } from 'expo-router';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { notifications } from '@/data/mock';
import { palette } from '@/constants/ui';

export default function ProducteurNotifications() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Notifications</Text>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.notice}>
              <Text style={styles.noticeText}>{item.text}</Text>
            </View>
          )}
        />
        <Pressable style={styles.button} onPress={() => router.push('/(producteur)/make-offer')}>
          <Text style={styles.buttonText}>Soumettre une offre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.background },
  content: { padding: 20, flex: 1 },
  title: { fontSize: 28, color: palette.accent, fontWeight: '800', marginBottom: 16 },
  notice: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: palette.border },
  noticeText: { fontSize: 16, color: palette.text },
  button: { marginTop: 'auto', backgroundColor: palette.primary, padding: 14, borderRadius: 10 },
  buttonText: { textAlign: 'center', color: '#fff', fontWeight: '700', fontSize: 16 },
});
