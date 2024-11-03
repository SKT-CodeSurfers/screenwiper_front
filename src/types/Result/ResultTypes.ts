export const enum ResultCategory {
  PLACE = '장소',
  PLAN = '일정',
  OTHER = '기타',
}

export type ResultTypes = IResultPlace | IResultPlan | IResultOther;

export interface IResult {
  categoryName: string;
  title: string;
  photoUrl: string;
}

export interface IResultPlace extends IResult {
  address: string;
  xcoordinate: string;
  ycoordinate: string;
  operatingHours: string;
  summary: string;
}

export interface IResultPlan extends IResult {
  list: {
    name: string;
    date: string;
  }[];
}

export interface IResultOther extends IResult {
  summary: string;
}
