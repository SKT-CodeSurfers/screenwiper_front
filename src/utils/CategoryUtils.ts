import { TopTabNavigatorProps, CardItem } from '@/types/Main/CardTypes';
import { GetRecommandResponse } from '@/hooks/queries/home/useRecommand';

export const categorizeData = (rawData: GetRecommandResponse): TopTabNavigatorProps => {
  const placeCards: CardItem[] = [];
  const planCards: CardItem[] = [];
  const otherCards: CardItem[] = [];

  // rawData가 객체 형태로 들어올 경우 각 키에 대해 반복
  Object.entries(rawData).forEach(([key, item]) => {
    // item이 null이 아니거나 undefined가 아니도록 확인
    if (item) {
      const dateObject = new Date(item.date);
      const day = dateObject.getDate();

      const card: CardItem = {
        id: String(item.photo_id),  // 고유 ID 설정
        title: item.title,
        address: item.address ? item.address : "",
        descriptions: item.summary ? [item.summary] : [],
        category: item.category_name as '장소' | '일정' | '기타',
        date: item.date ? String(new Date(item.date).getDate()) : '',
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
