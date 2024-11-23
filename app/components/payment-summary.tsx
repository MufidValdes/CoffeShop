import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PaymentSummary as PaymentSummaryType } from '../types/order';

interface PaymentSummaryProps {
  summary: PaymentSummaryType;
  onSelectPayment: () => void;
}

export default function PaymentSummary({
  summary,
  onSelectPayment,
}: PaymentSummaryProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.discountButton}>
        <Feather
          name="percent"
          size={20}
          color="#C68666"
        />
        <Text style={styles.discountText}>1 Discount is Applies</Text>
        <Feather
          name="chevron-right"
          size={20}
          color="#666"
        />
      </TouchableOpacity>

      <Text style={styles.title}>Payment Summary</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Price</Text>
        <Text style={styles.value}>${summary.price.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Delivery Fee</Text>
        <View style={styles.feeContainer}>
          <Text style={styles.strikethrough}>
            ${summary.deliveryFee.toFixed(2)}
          </Text>
          <Text style={styles.value}>$1.0</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={onSelectPayment}
      >
        <View style={styles.paymentLeft}>
          <Feather
            name="credit-card"
            size={20}
            color="#C68666"
          />
          <Text style={styles.paymentText}>Cash/Wallet</Text>
        </View>
        <View style={styles.paymentRight}>
          <Text style={styles.totalAmount}>${summary.total.toFixed(2)}</Text>
          <Feather
            name="chevron-down"
            size={20}
            color="#666"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  discountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  discountText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  strikethrough: {
    fontSize: 16,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: '500',
  },
  paymentRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#C68666',
  },
});
