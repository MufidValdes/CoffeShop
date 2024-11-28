import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/homeScreen';
import DetailScreen from '../screens/detailScreen';
import { OrderScreen } from '../screens/orderScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 50,
          paddingHorizontal: 15,
          paddingVertical: 5,
          height: 60,
          borderRadius: 35,
          shadowColor: '#000',
          flex: 1,

          shadowRadius: 10,
          shadowOpacity: 0.1,
        },

        tabBarActiveTintColor: '#C68666', // Warna aktif sesuai desain
        tabBarInactiveTintColor: '#777',
        headerShown: false, // Menghilangkan header default
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="home"
              color={color}
              size={size || 24} // Sesuaikan ukuran
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="heart"
              color={color}
              size={size || 24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="shopping-bag"
              color={color}
              size={size || 24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="shopping-bag"
              color={color}
              size={size || 24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="bell"
              color={color}
              size={size || 24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
