import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Coffee } from '../types/cofee';
import DetailHeader from '../components/headerAll';
import CoffeeDetails from '../components/coffe-detail';
import { SafeAreaView } from 'react-native-safe-area-context';

const sampleCoffee: Coffee = {
  id: '1',
  name: 'Caffe Mocha',
  type: 'Ice/Hot',
  price: 4.53,
  rating: 4.8,
  reviews: 230,
  description:
    'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam. The word cappuccino comes from the Capuchin friars, referring to the color of their habits.',
  image:
    'https://wfg32p.s3.amazonaws.com/media/dishes/caffe-mocha_4475-reg.jpg',
  sizes: ['S', 'M', 'L'],
  defaultSize: 'M',
};

export default function DetailScreen() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleBuyNow = () => {
    // Handle buy now action
    console.log('Buy now pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <DetailHeader
        onBack={handleBack}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
        headerName={'Detail'}
      />
      <ScrollView>
        <View style={styles.content}>
          <CoffeeDetails
            coffee={sampleCoffee}
            onBuyNow={handleBuyNow}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 8,
    marginBottom: 10,
  },
});
