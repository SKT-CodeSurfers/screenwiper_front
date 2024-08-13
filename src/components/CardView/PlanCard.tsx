import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import * as S from '@/components/CardView/CardStyles';  // 스타일 가져오기

interface PlanCardProps {
  date: string;
  title: string;
  description: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ date, title, description }) => {
  return (
    <Shadow
      distance={10}
      startColor={'#00000008'}
      offset={[0, 0]}
    >
      <S.CardContainer>
        <S.DateContainer>
          <S.DateText>{date}</S.DateText>
        </S.DateContainer>
        <S.DetailsContainer>
          <S.PlanTitleText numberOfLines={1} ellipsizeMode="tail">{title}</S.PlanTitleText>
          <S.PlanDescriptionText numberOfLines={1} ellipsizeMode="tail">{description}</S.PlanDescriptionText>
        </S.DetailsContainer>
      </S.CardContainer>
    </Shadow>
  );
};

export default PlanCard;
