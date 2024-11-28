import React from 'react';
import BottomTabNavigator from '../src/navigation/buttonTabNavigation';
import DetailScreen from '../src/screens/detailScreen';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View } from 'react-native';

export default function DetailPage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: `Detail - ${id}` }} />
      <DetailScreen />
    </View>
  );
}
