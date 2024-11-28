import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OrderItem from '../src/components/order-items';
import DeliveryToggle from '../src/components/delivery-toggle';
import PaymentSummary from '../src/components/payment-summary';
import AddressSection from '../src/components/address-section';
import Button from '../src/components/button';
import DetailHeader from '../src/components/headerAll';

const sampleOrder = {
  item: {
    id: '1',
    name: 'Caffe Mocha',
    type: 'Deep Foam',
    price: 4.53,
    quantity: 1,
    image:
      'https://wfg32p.s3.amazonaws.com/media/dishes/caffe-mocha_4475-reg.jpg',
  },
  address: {
    street: 'Jl. Kpg Sutoyo',
    detail: 'Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.',
  },
  summary: {
    price: 4.53,
    deliveryFee: 2.0,
    discount: 1.0,
    total: 5.53,
  },
};

export function OrderScreen() {
  const insets = useSafeAreaInsets();
  const [isDelivery, setIsDelivery] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleBack = () => {
    // Handle navigation back
  };

  const handleOrder = () => {
    // Handle order submission
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <ScrollView>
        <DetailHeader
          onBack={handleBack}
          headerName={'Order'}
        />
        <View style={styles.content}>
          <DeliveryToggle
            isDelivery={isDelivery}
            onToggle={setIsDelivery}
          />
          {isDelivery && (
            <AddressSection
              address={sampleOrder.address}
              onEdit={() => {}}
              onAddNote={() => {}}
            />
          )}
          <View style={styles.orderContent}>
            <OrderItem
              item={{ ...sampleOrder.item, quantity }}
              onIncrement={() => setQuantity((q) => q + 1)}
              onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
            />
          </View>
          <PaymentSummary
            summary={sampleOrder.summary}
            onSelectPayment={() => {}}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={handleOrder}>Order</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    gap: 12,
  },
  orderContent: {
    borderStyle: 'dashed',
    borderColor: '#000 ',
    borderWidth: 1,
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
});
