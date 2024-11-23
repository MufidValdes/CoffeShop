import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Coffee } from '../types/cofee';
interface CoffeeCardProps {
  coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: coffee.image }}
          style={styles.image}
        />
        <View style={styles.ratingContainer}>
          <Feather
            name="star"
            size={12}
            color="#FFD700"
          />
          <Text style={styles.ratingText}>{coffee.rating}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{coffee.name}</Text>
        <Text style={styles.type}>{coffee.type}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            <Text style={styles.currency}>$</Text>
            {coffee.price.toFixed(2)}
          </Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 16,
  },
  imageContainer: {
    aspectRatio: 1,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
  },
  infoContainer: {
    paddingHorizontal: 4,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    color: '#777',
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#C68666',
    borderRadius: 12,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
