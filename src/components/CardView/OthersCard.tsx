import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import * as S from '@/components/CardView/CardStyles';  // 스타일 가져오기

interface OthersCardProps {
  title: string;
}

const OthersCard: React.FC<OthersCardProps> = ({ title }) => {
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

export default OthersCard;
