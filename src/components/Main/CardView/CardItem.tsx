import React from 'react';
import IcLocation from '@/assets/icon/ic_location.svg';
import * as S from '@/components/Main/CardView/CardStyles';
import {Shadow} from 'react-native-shadow-2';

interface CardItemProps {
  title: string;
  address?: string;
  descriptions: string[];
  category: 'Place' | 'Plan' | 'Other';
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  address,
  descriptions,
  category,
}) => {
  const isPlace = category === 'Place';

  return (
    <Shadow distance={10} startColor={'#00000008'} offset={[0, 0]}>
      <S.StyledCard>
        <S.HeaderRow>
          <S.TitleText numberOfLines={isPlace ? 1 : 2} ellipsizeMode="tail">
            {title}
          </S.TitleText>
          <S.CategoryBadgeWrapper category={category}>
            <S.CategoryBadgeText>
              {isPlace ? '장소' : category === 'Plan' ? '일정' : '기타'}
            </S.CategoryBadgeText>
          </S.CategoryBadgeWrapper>
        </S.HeaderRow>
        {isPlace && address && (
          <S.AddressRow>
            <IcLocation width={13} height={13} />
            <S.AddressText>{address}</S.AddressText>
          </S.AddressRow>
        )}
        <S.DescriptionText>
          {descriptions.slice(0, isPlace ? 2 : 3).map((desc, index) => (
            <S.BulletPointWrapper key={index}>
              <S.BulletPoint>•</S.BulletPoint>
              <S.BulletText>{desc}</S.BulletText>
            </S.BulletPointWrapper>
          ))}
        </S.DescriptionText>
      </S.StyledCard>
    </Shadow>
  );
};

export default CardItem;
