import React, {useState} from 'react';
import s from './Result.styles';
import {ResultSearch as SR} from './Result.styles';
import {IResultOther} from '@/types/Result/ResultTypes';

interface ResultOtherProps {
  data: IResultOther;
}
export default function ResultOther({data}: ResultOtherProps) {

  // 임시 데이터 설정
  const [plans, setPlans] = useState([
    {
      name: '서울 전시회',
      date: '2024-11-03',
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      name: '강릉 여행',
      date: '2024-12-10',
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      name: '부산 콘서트',
      date: '2024-12-15',
      imageUrl: 'https://example.com/image3.jpg',
    },
  ]);

  return (
    <>
      <s.SubWrapper isVertical={true}>
        <s.SubTitle>✨ 요약</s.SubTitle>
        <s.SummaryContent>{data.summary}</s.SummaryContent>
        <s.Line/>
        <s.SubTitle>🔎 이미지 검색결과</s.SubTitle>
        <SR.SearchContainer>
          {plans.map((plan, idx) => (
            <SR.SearchBox key={idx}>
              <SR.TextContainer>
                <SR.SearchTitle numberOfLines={2} ellipsizeMode="tail">{plan.name}</SR.SearchTitle>
                <SR.SearchDate>{plan.date}</SR.SearchDate>
              </SR.TextContainer>
              <SR.SearchImage source={{ uri: plan.imageUrl }} />
            </SR.SearchBox>
          ))}
      </SR.SearchContainer>
      </s.SubWrapper>
    </>
  );
}
