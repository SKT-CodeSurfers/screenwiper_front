import React from 'react';
import s from './Result.styles';
import {IResultOther} from '@/types/Result/ResultTypes';

interface ResultOtherProps {
  data: IResultOther;
}
export default function ResultOther({data}: ResultOtherProps) {
  return (
    <>
      <s.SubWrapper isVertical={true}>
        <s.SubTitle>✨ 요약</s.SubTitle>
        <s.SubContent>{data.summary}</s.SubContent>
      </s.SubWrapper>
    </>
  );
}
