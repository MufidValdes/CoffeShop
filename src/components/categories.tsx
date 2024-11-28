import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Category } from '../types/cofee';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  const [selected, setSelected] = useState(categories[0].id);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            selected === category.id && styles.selectedCategoryButton,
          ]}
          onPress={() => setSelected(category.id)}
        >
          <Text
            style={[
              styles.categoryText,
              selected === category.id && styles.selectedCategoryText,
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  categoryButton: {
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: '#C68666',
  },
  categoryText: {
    color: '#777',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedCategoryText: {
    color: 'white',
  },
});
