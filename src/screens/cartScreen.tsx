import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialCartItems = [
  {
    id: '1',
    name: 'Caffe Mocha',
    variant: 'With Milk',
    price: 20,
    quantity: 1,
  },
  { id: '2', name: 'Liberica', variant: 'With Water', price: 12, quantity: 1 },
  { id: '3', name: 'Cirtus', variant: 'With Lemon', price: 12, quantity: 1 },
  { id: '4', name: 'Cirtus', variant: 'With Lemon', price: 12, quantity: 1 },
  { id: '5', name: 'Cirtus', variant: 'With Lemon', price: 12, quantity: 1 },
  { id: '6', name: 'Cirtus', variant: 'With Lemon', price: 12, quantity: 1 },
  { id: '7', name: 'Cirtus', variant: 'With Lemon', price: 12, quantity: 1 },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 6;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemVariant}>{item.variant}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, item.quantity - 1)}
                style={styles.quantityButton}
              >
                <Ionicons
                  name="remove"
                  size={20}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, item.quantity + 1)}
                style={styles.quantityButton}
              >
                <Ionicons
                  name="add"
                  size={20}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
            </View>
            {item.name === 'Liberica' && (
              <TouchableOpacity
                onPress={() => removeItem(item.id)}
                style={styles.removeButton}
              >
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color="#FF0000"
                />
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.summary}>
        <View style={styles.couponContainer}>
          <TextInput
            style={styles.couponInput}
            placeholder="Enter Coupon Code here"
            placeholderTextColor="#A0A0A0"
            value={couponCode}
            onChangeText={setCouponCode}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Sub-total</Text>
          <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Shipping</Text>
          <Text style={styles.summaryText}>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTextBold}>Total</Text>
          <Text style={styles.summaryTextBold}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.finalizeButton}>
          <Text style={styles.finalizeButtonText}>Finalize Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  listContent: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  itemVariant: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C4846C',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#C4846C',
    borderRadius: 4,
    padding: 4,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginHorizontal: 8,
  },
  removeButton: {
    marginLeft: 16,
  },
  summary: {
    backgroundColor: '#1C1C1E',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  couponContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  couponInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: '#C4846C',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  summaryTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  finalizeButton: {
    backgroundColor: '#C4846C',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  finalizeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default CartScreen;
