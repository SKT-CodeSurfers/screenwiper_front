import React from 'react';
import { FlatList, View } from 'react-native';
import ListCard from './CardItem';
import { CardItem } from '@/types/Main/CardTypes'; // 타입 가져오기

interface ListProps {
  data: CardItem[];
}

export function PlaceCardList({ data }: ListProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListCard {...item} />}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: '#FCFCFC' }}
      contentContainerStyle={{ alignItems: 'center', paddingVertical: 10 }}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
    />
  );
}

export function PlanCardList({data}: ListProps) {

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListCard {...item} />}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: '#FCFCFC' }}
      contentContainerStyle={{ alignItems: 'center', paddingVertical: 10 }}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
    />
  );
}

export function OthersCardList({ data }: ListProps) {

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListCard {...item} />}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: '#FCFCFC' }}
      contentContainerStyle={{ alignItems: 'center', paddingVertical: 10 }}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
    />
  );
}
