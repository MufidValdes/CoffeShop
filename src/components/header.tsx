import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationLabel}>Location</Text>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
          <Feather
            name="chevron-down"
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Feather
            name="search"
            size={20}
            color="#777"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search coffee"
            placeholderTextColor="#777"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Feather
            name="sliders"
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  locationContainer: {
    marginBottom: 16,
  },
  locationLabel: {
    color: '#777',
    fontSize: 14,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 8,
  },
  filterButton: {
    backgroundColor: '#C68666',
    borderRadius: 20,
    padding: 12,
    marginLeft: 12,
  },
});
