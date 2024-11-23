import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DeliveryAddress } from '../types/order';

interface AddressSectionProps {
  address: DeliveryAddress;
  onEdit: () => void;
  onAddNote: () => void;
}

export default function AddressSection({
  address,
  onEdit,
  onAddNote,
}: AddressSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>
      <Text style={styles.street}>{address.street}</Text>
      <Text style={styles.detail}>{address.detail}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={onEdit}
        >
          <Feather
            name="edit"
            size={18}
            color="#666"
          />
          <Text style={styles.buttonText}>Edit Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onAddNote}
        >
          <Feather
            name="file-text"
            size={18}
            color="#666"
          />
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  street: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#666',
  },
});
