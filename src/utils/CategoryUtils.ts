import { TopTabNavigatorProps, CardItem } from '@/types/Main/CardTypes';
import { GetRecommandResponse } from '@/hooks/queries/home/useRecommand';

export const categorizeData = (rawData: GetRecommandResponse): TopTabNavigatorProps => {
  const placeCards: CardItem[] = [];
  const planCards: CardItem[] = [];
  const otherCards: CardItem[] = [];

  rawData.data.forEach((item: any) => {
    if (item) {
      const dateObject = item.date ? new Date(item.date) : null;
      const day = dateObject ? dateObject.getDate() : '';

      const card: CardItem = {
        id: String(item.photo_id),  // 고유 ID 설정
        title: item.title,
        address: item.address ? item.address : "",
        descriptions: item.summary ? [item.summary] : [],
        category: item.category_name as '장소' | '일정' | '기타',
        date: String(day),
      };

    // 카테고리에 따라 분류
    switch (item.category_name) {
      case '장소':
        placeCards.push(card);
        break;
      case '일정':
        planCards.push(card);
        break;
      case '기타':
        otherCards.push(card);
        break;
      default:
        break;
    }
  }
})
  ;

  return {
    placeCards,
    planCards,
    otherCards,
  };
};
