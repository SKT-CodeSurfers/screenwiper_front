import { TopTabNavigatorProps, CardItem } from '@/types/Main/CardTypes';

export const categorizeData = (rawData: any): TopTabNavigatorProps => {
  const placeCards: CardItem[] = [];
  const planCards: CardItem[] = [];
  const otherCards: CardItem[] = [];

  const photos = rawData?.photos || [];

  photos.forEach((item: any) => {
    const card: CardItem = {
      id: String(item.photoId),
      title: item.title,
      address: item.address,
      descriptions: item.summary,
      category: item.categoryId === 1 ? 'Place' : item.categoryId === 2 ? 'Plan' : 'Other',
      date: item.date ?? ''
    };

    switch (item.categoryId) {
      case 1:
        placeCards.push(card);
        break;
      case 2:
        planCards.push(card);
        break;
      case 3:
        otherCards.push(card);
        break;
      default:
        break;
    }
  });

  return {
    placeCards,
    planCards,
    otherCards
  };
};
