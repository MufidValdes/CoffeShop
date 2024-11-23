import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function PromoBanner() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 6000, easing: Easing.linear }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedTextContainer, animatedStyle]}>
        <Text style={styles.animatedText}>BOGO</Text>
      </Animated.View>
      <View style={styles.contentContainer}>
        <View style={styles.promoTag}>
          <Text style={styles.promoTagText}>Promo</Text>
        </View>
        <Text style={styles.title}>Buy one get{'\n'}one FREE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: width - 32,
    backgroundColor: '#8B6E5E',
    borderRadius: 24,
    padding: 24,
    overflow: 'hidden',
  },
  animatedTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.1)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  promoTag: {
    backgroundColor: '#FF4D4D',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  promoTagText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});
