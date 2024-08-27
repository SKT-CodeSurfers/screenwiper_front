export const enum ResultCategory {
  PLACE = '장소',
  PLAN = '일정',
  OTHER = '기타',
}

export interface IResult {
  photoId: number;
  category: string;
  categoryName: string;
  photoName: string;
  photoUrl: string;
  date: string;
}

export interface IResultPlace extends IResult {
  address: string;
  xcoordinate: string;
  ycoordinate: string;
  operatingHours: string;
  summary: string;
}

export interface IResultPlan extends IResult {
  list: Array<{
    name: string;
    date: string;
  }>;
}

export interface IResultOther extends IResult {
  summary: string;
}
