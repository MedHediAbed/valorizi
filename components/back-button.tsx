import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { palette } from '@/constants/ui';

type Props = {
  onPress?: () => void;
  color?: string;
};

export function BackButton({ onPress, color = palette.primary }: Props) {
  return (
    <Pressable
      hitSlop={12}
      style={styles.btn}
      onPress={onPress ?? (() => router.back())}
      accessibilityRole="button"
      accessibilityLabel="Retour">
      <Ionicons name="chevron-back" size={28} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { paddingVertical: 4, paddingRight: 8, alignSelf: 'flex-start' },
});
