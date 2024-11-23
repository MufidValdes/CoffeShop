import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface DetailHeaderProps {
  onBack: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
}

export default function DetailHeader({
  onBack,
  onToggleFavorite,
  isFavorite,
}: DetailHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity
        onPress={onBack}
        style={styles.backButton}
      >
        <Feather
          name="chevron-left"
          size={28}
          color="#000"
        />
      </TouchableOpacity>
      <Text style={styles.title}>Detail</Text>
      <TouchableOpacity
        onPress={onToggleFavorite}
        style={styles.favoriteButton}
      >
        <Feather
          name={isFavorite ? 'heart' : 'heart'}
          size={24}
          color={isFavorite ? '#C68666' : '#000'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  favoriteButton: {
    padding: 8,
    marginRight: -8,
  },
});
