export type CategoryType = 'Place' | 'Plan' | 'Others';

export interface CardItem {
    id: string;
    title: string;
    location?: string;
    descriptions: string[];
    category: CategoryType;
  }
  
  export interface TopTabNavigatorProps {
    placeCards: CardItem[];
    planCards: CardItem[];
    othersCards: CardItem[];
  }
