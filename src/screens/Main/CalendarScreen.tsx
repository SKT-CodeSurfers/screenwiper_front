import Map from '@/components/Map/Map';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function CalendarScreen() {
  return (
    <SafeAreaView>
      <Text>Calendar</Text>
      <Map />
    </SafeAreaView>
  );
}
