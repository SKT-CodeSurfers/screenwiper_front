export type CategoryType = 'Place' | 'Plan' | 'Other';

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
