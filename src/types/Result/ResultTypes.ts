export const enum ResultCategory {
  PLACE = '장소',
  PLAN = '일정',
  OTHER = '기타',
}

export type ResultTypes = IResultPlace | IResultPlan | IResultOther;

export interface IResultPlace {
  title: string;
  photoUrl: string;
  categoryName: string;

  address: string;
  xcoordinate: string;
  ycoordinate: string;
  operatingHours: string;
  summary: string;
}

export interface IResultPlan {
  title: string;
  photoUrl: string;
  categoryName: string;

  list: {
    name: string;
    date: string;
  }[];
}

export interface IResultOther {
  title: string;
  photoUrl: string;
  categoryName: string;

  summary: string;
}
