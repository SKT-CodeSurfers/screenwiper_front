import React, {useEffect, useState} from 'react';
import TopTabNavigator from '@/navigators/TobTabNavigator/TobTabNavigator';
import rawData from '@/screens/Main/List/ListDummies.json';
import {TopTabNavigatorProps} from '@/types/Main/CardTypes';
import {categorizeData} from '@/utils/CategoryUtils';
import SafeAreaTabView from '@/components/common/SafeAreaTabView/SafeAreaTabView';

export default function ListScreen() {
  const [data, setData] = useState<TopTabNavigatorProps | null>(null);

  useEffect(() => {
    const categorizedData = categorizeData(rawData);
    setData(categorizedData);
  }, []);

  if (!data) return null;

  return (
    <SafeAreaTabView>
      <TopTabNavigator
        placeCards={data.placeCards}
        planCards={data.planCards}
        otherCards={data.otherCards}
      />
    </SafeAreaTabView>
  );
}
