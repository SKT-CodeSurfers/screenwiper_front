import React from 'react';
import { FlatList } from 'react-native';
import ListCard from './CardItem';

export function PlaceCardList() {
  const placeCards = [
    {
      id: '1',
      title: '문래 동, 멘',
      location: '영등포구 도림로 139길 19 1층',
      descriptions: ['문래에 생긴 라멘+마제소바 성지', '일본 여행온 듯한 분위기'],
      category: 'Place' as const,
    },
  ];

  return (
    <FlatList
      data={placeCards}
      renderItem={({ item }) => <ListCard {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export function ScheduleCardList() {
  const scheduleCards = [
    {
      id: '1',
      title: '서울에서 꼭 가봐야 할 전시회 13곳...',
      descriptions: [
        '24/04/25 미래공정: 노문의 휴식과...',
        '24/05/13 <길드는 서울들>',
        '24/12/13 <카르디에> 잊혀진...',
      ],
      category: 'Schedule' as const,
    },
  ];

  return (
    <FlatList
      data={scheduleCards}
      renderItem={({ item }) => <ListCard {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export function OthersCardList() {
  const othersCards = [
    {
      id: '1',
      title: '웜톤/쿨톤/뉴트럴톤 별 하이라이트 추천',
      descriptions: ['오프라인 추가 쿠키', '크림톤 #듀오링', '컬러그램 #샌드피치'],
      category: 'Others' as const,
    },
  ];

  return (
    <FlatList
      data={othersCards}
      renderItem={({ item }) => <ListCard {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
