import {TopTabNavigatorProps, CardItem} from '@/types/Main/CardTypes';

export const categorizeData = (rawData: any): TopTabNavigatorProps => {
  const placeCards: CardItem[] = [];
  const planCards: CardItem[] = [];
  const otherCards: CardItem[] = [];

  rawData.data.forEach((item: any) => {
    const card: CardItem = {
      photoId: 7,
      title: item.title,
      address: item.address,
      descriptions: item.descriptions || [item.description],
      category: item.category as 'Place' | 'Plan' | 'Other',
      date: item.date ?? '',
    };

    switch (item.category) {
      case 'Place':
        placeCards.push(card);
        break;
      case 'Plan':
        planCards.push(card);
        break;
      case 'Other':
        otherCards.push(card);
        break;
      default:
        break;
    }
  });

  return {
    placeCards,
    planCards,
    otherCards,
  };
};
