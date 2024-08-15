import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import * as S from '@/components/Main/CardView/CardStyles';  // 스타일 가져오기

interface OtherCardProps {
  title: string;
}

const OtherCard: React.FC<OtherCardProps> = ({ title }) => {
  return (
    <Shadow
      distance={10}
      startColor={'#00000008'}
      offset={[0, 0]}
    >
      <S.CardContainer>
        <S.DetailsContainer>
          <S.TitleText numberOfLines={1} ellipsizeMode="tail">{title}</S.TitleText>
        </S.DetailsContainer>
      </S.CardContainer>
    </Shadow>
  );
};

export default OtherCard;
