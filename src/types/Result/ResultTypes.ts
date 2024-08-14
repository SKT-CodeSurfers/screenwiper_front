export const enum ResultCategory {
  PLACE = '장소',
  PLAN = '일정',
  OTHER = '기타',
}

export interface IResultPlace {
  category: string;
  title: string;
  address: string;
  operatingHours: string;
  summary: string;
  image: string;
}

export interface IResultPlan {
  category: string;
  title: string;
  list: Array<{
    name: string;
    date: string;
  }>;
  image: string;
}

export interface IResultOther {
  category: string;
  title: string;
  summary: string;
  image: string;
}
