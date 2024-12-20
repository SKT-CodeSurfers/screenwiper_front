export type CategoryType = '장소' | '일정' | '기타';

export interface CardItem {
  photoId: number;
  title: string;
  address?: string;
  descriptions: string[];
  category: CategoryType;
  date: string;
}

export interface TopTabNavigatorProps {
  placeCards: CardItem[];
  planCards: CardItem[];
  otherCards: CardItem[];
}
