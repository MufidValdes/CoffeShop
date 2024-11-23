import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import Categories from '../components/categories';
import CoffeeCard from '../components/coffe-card';
import PromoBanner from '../components/promo-banner';

const categories = [
  { id: 'all', name: 'All Coffee' },
  { id: 'machiato', name: 'Machiato' },
  { id: 'latte', name: 'Latte' },
  { id: 'americano', name: 'Americano' },
];

const coffees = [
  {
    id: '1',
    name: 'Caffe Mocha',
    type: 'Deep Foam',
    price: 4.53,
    rating: 4.8,
    image:
      'https://wfg32p.s3.amazonaws.com/media/dishes/caffe-mocha_4475-reg.jpg',
  },
  {
    id: '2',
    name: 'Flat White',
    type: 'Espresso',
    price: 3.53,
    rating: 4.8,
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/08/17/flat-white-1.jpg',
  },
  {
    id: '3',
    name: 'Caffe Mocha',
    type: 'Deep Foam',
    price: 4.53,
    rating: 4.8,
    image:
      'https://wfg32p.s3.amazonaws.com/media/dishes/caffe-mocha_4475-reg.jpg',
  },
  {
    id: '4',
    name: 'Flat White',
    type: 'Espresso',
    price: 3.53,
    rating: 4.8,
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/08/17/flat-white-1.jpg',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.content}>
          <PromoBanner />
          <Categories categories={categories} />
          <View style={styles.coffeeGrid}>
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    padding: 16,
  },
  coffeeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
