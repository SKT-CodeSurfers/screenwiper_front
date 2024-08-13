import useNavigator from '@/navigators/useNavigator';
import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopTabNavigator from '@/navigators/TobTabNavigator/TobTabNavigator';

export default function ListScreen() {
  const {stackNavigation, tabNavigation} = useNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopTabNavigator />
    </SafeAreaView>
  );
}
