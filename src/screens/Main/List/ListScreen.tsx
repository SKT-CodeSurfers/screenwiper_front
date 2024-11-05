import React from 'react';
import TopTabNavigator from '@/navigators/TobTabNavigator/TobTabNavigator';
import SafeAreaTabView from '@/components/common/SafeAreaTabView/SafeAreaTabView';

export default function ListScreen() {
  return (
    <SafeAreaTabView>
      <TopTabNavigator />
    </SafeAreaTabView>
  );
}
