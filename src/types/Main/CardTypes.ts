export type CategoryType = 'Place' | 'Plan' | 'Other';

export interface CardItem {
    id: string;
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
