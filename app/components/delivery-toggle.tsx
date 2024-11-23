import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface DeliveryToggleProps {
  isDelivery: boolean;
  onToggle: (isDelivery: boolean) => void;
}

export default function DeliveryToggle({
  isDelivery,
  onToggle,
}: DeliveryToggleProps) {
  const backgroundStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(isDelivery ? 0 : width / 2 - 32) }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.activeBackground, backgroundStyle]} />
      <TouchableOpacity
        style={styles.option}
        onPress={() => onToggle(true)}
      >
        <Text style={[styles.optionText, isDelivery && styles.activeText]}>
          Deliver
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => onToggle(false)}
      >
        <Text style={[styles.optionText, !isDelivery && styles.activeText]}>
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
    position: 'relative',
    marginHorizontal: 16,
  },
  activeBackground: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    width: '48%',
    backgroundColor: '#C68666',
    borderRadius: 8,
  },
  option: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activeText: {
    color: 'white',
  },
});
