import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Coffee } from '../types/cofee';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

interface CoffeeDetailsProps {
  coffee: Coffee;
  onBuyNow: () => void;
}

export default function CoffeeDetails({
  coffee,
  onBuyNow,
}: CoffeeDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>(
    coffee.defaultSize!
  );
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: coffee.image }}
        style={styles.image}
        entering={FadeInDown.duration(400)}
      />

      <View style={styles.content}>
        <Animated.View
          style={styles.titleContainer}
          entering={FadeInDown.duration(400).delay(100)}
        >
          <Text style={styles.title}>{coffee.name}</Text>
          <Text style={styles.subtitle}>{coffee.type}</Text>
        </Animated.View>

        <Animated.View
          style={styles.iconsContainer}
          entering={FadeInDown.duration(400).delay(300)}
        >
          <Feather
            name="star"
            size={20}
            color="#FFD700"
          />
          <Text style={styles.rating}>{coffee.rating}</Text>
          <Text style={styles.reviews}>({coffee.reviews})</Text>
          <View style={styles.iconWrapper}>
            <Feather
              name="truck"
              size={24}
              color="#C68666"
            />
          </View>
          <View style={styles.iconWrapper}>
            <Feather
              name="coffee"
              size={24}
              color="#C68666"
            />
          </View>
          <View style={styles.iconWrapper}>
            <Feather
              name="package"
              size={24}
              color="#C68666"
            />
          </View>
        </Animated.View>

        <Animated.View
          style={styles.descriptionContainer}
          entering={FadeInDown.duration(400).delay(400)}
        >
          <Text style={styles.sectionTitle}>Description</Text>
          <Text
            style={styles.description}
            numberOfLines={isDescriptionExpanded ? undefined : 2}
          >
            {coffee.description}
          </Text>
          <TouchableOpacity
            onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          >
            <Text style={styles.readMore}>
              {isDescriptionExpanded ? 'Show Less' : 'Read More'}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={styles.sizesContainer}
          entering={FadeInDown.duration(400).delay(500)}
        >
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeButtons}>
            {coffee?.sizes?.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSizeButton,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeButtonText,
                    selectedSize === size && styles.selectedSizeButtonText,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <Animated.View
          style={styles.footer}
          entering={FadeInDown.duration(400).delay(600)}
        >
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>
              <Text style={styles.currency}>$</Text>
              {coffee.price.toFixed(2)}
            </Text>
          </View>
          <Link href={'/detail'}>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={onBuyNow}
            >
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </Link>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '95%',
    alignSelf: 'center',
    height: width * 0.75,
    borderRadius: 24,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 16,
    color: '#666',
    marginLeft: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 14,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    backgroundColor: '#FFF5F1',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  readMore: {
    color: '#C68666',
    marginTop: 4,
    fontWeight: '500',
  },
  sizesContainer: {
    marginBottom: 24,
  },
  sizeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
  },
  selectedSizeButton: {
    backgroundColor: '#FFF5F1',
    borderColor: '#C68666',
  },
  sizeButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  selectedSizeButtonText: {
    color: '#C68666',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  currency: {
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#C68666',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 24,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
