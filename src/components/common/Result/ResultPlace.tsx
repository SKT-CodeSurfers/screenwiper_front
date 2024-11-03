import React, {useMemo} from 'react';
import s from './Result.styles';
import {IResultPlace} from '@/types/Result/ResultTypes';
import Map from '@/components/Map/Map';

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

      <Map x={data.xcoordinate} y={data.ycoordinate} />

      <s.SubWrapper isVertical={true} style={{marginTop: 20}}>
        <s.SubTitle>✨ 요약</s.SubTitle>
        <s.SummaryContent>{data.summary}</s.SummaryContent>
      </s.SubWrapper>
    </>
  );
}
