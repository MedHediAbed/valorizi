import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Image,
  LayoutChangeEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { palette } from '@/constants/ui';

export const serif = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'serif',
});

export function AppLogo({ size = 44 }: { size?: number }) {
  return (
    <Image
      source={require('../figma/valorizi.png')}
      style={{ width: size * 4.2, height: size }}
      resizeMode="contain"
    />
  );
}

type BottomNavProps = { homeHref: string };

export function BottomNav({ homeHref }: BottomNavProps) {
  const goHome = () => router.replace(homeHref as never);
  const goProfile = () => {
    if (homeHref.includes('(transporteur)')) {
      router.replace('/(transporteur)/dashboard' as never);
      return;
    }
    router.push(
      (homeHref.includes('(producteur)') ? '/(producteur)/profile' : '/(valorisateur)/profile') as never
    );
  };
  return (
    <View style={navStyles.bar}>
      <View style={navStyles.item}>
        <MaterialCommunityIcons name="chart-pie" size={22} color="#1a1a1a" />
        <Text style={navStyles.label}>Aide</Text>
      </View>
      <View style={navStyles.item}>
        <MaterialCommunityIcons name="card-account-details-outline" size={22} color="#1a1a1a" />
        <Text style={navStyles.label}>Accès</Text>
      </View>
      <Pressable style={navStyles.homeWrap} onPress={goHome}>
        <MaterialCommunityIcons name="home" size={26} color="#1a1a1a" />
      </Pressable>
      <View style={navStyles.item}>
        <MaterialCommunityIcons name="wallet-outline" size={22} color="#1a1a1a" />
        <Text style={navStyles.label}>Crédit</Text>
      </View>
      <Pressable style={navStyles.item} onPress={goProfile}>
        <Ionicons name="person" size={22} color={palette.accent} />
        <Text style={[navStyles.label, { color: palette.accent }]}>Profile</Text>
      </Pressable>
    </View>
  );
}

type KgSliderProps = {
  value: number;
  onChange: (kg: number) => void;
  min?: number;
  max?: number;
  /** Par défaut : « X kg » */
  formatLabel?: (value: number) => string;
};

export function KgSlider({ value, onChange, min = 1, max = 50, formatLabel }: KgSliderProps) {
  const [trackW, setTrackW] = useState(280);
  const label = formatLabel ? formatLabel(value) : `${value} kg`;

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setTrackW(Math.max(1, e.nativeEvent.layout.width));
  }, []);

  const setFromX = (x: number) => {
    const ratio = Math.max(0, Math.min(1, x / trackW));
    const v = Math.round(min + ratio * (max - min));
    onChange(v);
  };

  const span = Math.max(1, max - min);
  const fillRatio = (value - min) / span;
  const thumbLeft = fillRatio * trackW - 6;

  return (
    <View style={kgStyles.wrap}>
      <Text style={kgStyles.kgLabel}>{label}</Text>
      <Pressable style={kgStyles.track} onLayout={onLayout} onPress={(e) => setFromX(e.nativeEvent.locationX)}>
        <View style={[kgStyles.fill, { width: `${fillRatio * 100}%` }]} />
        <View style={[kgStyles.thumb, { left: Math.max(0, Math.min(trackW - 12, thumbLeft)) }]} />
      </Pressable>
    </View>
  );
}

export function BackChevron({ onPress, color = palette.primary }: { onPress: () => void; color?: string }) {
  return (
    <Pressable onPress={onPress} hitSlop={12} style={styles.backBtn}>
      <Ionicons name="chevron-back" size={28} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backBtn: { paddingVertical: 4, paddingRight: 8, alignSelf: 'flex-start' },
});

const navStyles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: palette.border,
  },
  item: { alignItems: 'center', width: 56, gap: 2 },
  label: { fontSize: 10, color: '#1a1a1a', fontFamily: serif },
  homeWrap: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
});

const kgStyles = StyleSheet.create({
  wrap: { gap: 8 },
  kgLabel: { textAlign: 'center', fontSize: 22, fontWeight: '700', color: palette.text, fontFamily: serif },
  track: {
    height: 14,
    borderRadius: 7,
    backgroundColor: '#e8dff5',
    overflow: 'visible',
    justifyContent: 'center',
    position: 'relative',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: palette.primary,
    borderRadius: 7,
  },
  thumb: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#9b7cbf',
    top: 1,
    zIndex: 2,
  },
});
