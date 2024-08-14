import React from 'react';
import s from './Result.styles';
import {IResultPlace} from '@/types/Result/ResultTypes';

interface ResultPlaceProps {
  data: IResultPlace;
}
export default function ResultPlace({data}: ResultPlaceProps) {
  return (
    <>
      <s.SubWrapper>
        <s.SubTitle>주소</s.SubTitle>
        <s.SubContent>{data.address}</s.SubContent>
      </s.SubWrapper>
      <s.SubWrapper>
        <s.SubTitle>영업시간</s.SubTitle>
        <s.SubContent>{data.operatingHours}</s.SubContent>
      </s.SubWrapper>
      <s.SubWrapper isVertical={true}>
        <s.SubTitle>✨ 요약</s.SubTitle>
        <s.SubContent>{data.summary}</s.SubContent>
      </s.SubWrapper>
    </>
  );
}
