export const enum ResultCategory {
  PLACE = '장소',
  PLAN = '일정',
  OTHER = '기타',
}

export type ResultTypes = IResultPlace | IResultPlan | IResultOther;

export interface IResultPlace {
  title: string;
  photoId: string;
  photoUrl: string;
  categoryName: ResultCategory;

  address: string;
  xcoordinate: string;
  ycoordinate: string;
  operatingHours: string;
  summary: string;
}

export interface IResultPlan {
  title: string;
  photoId: string;
  photoUrl: string;
  categoryName: ResultCategory;

  list: {
    name: string;
    date: string;
  }[];
}

export interface IResultOther {
  title: string;
  photoId: string;
  photoUrl: string;
  categoryName: ResultCategory;

  summary: string;
}
