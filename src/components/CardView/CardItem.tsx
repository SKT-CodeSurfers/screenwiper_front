import React from 'react';
import IcLocation from '@/assets/icon/ic_location.svg';
import * as S from '@/components/CardView/CardStyles';
import { Shadow } from 'react-native-shadow-2';

interface CardItemProps {
  title: string;
  location?: string;
  descriptions: string[];
  category: 'Place' | 'Schedule' | 'Others';
}

const CardItem: React.FC<CardItemProps> = ({ title, location, descriptions, category }) => {
  const isPlace = category === 'Place';

  return (
    <Shadow
      distance={10}
      startColor={'#00000008'}
      offset={[0, 0]}
    >
    <S.StyledCard>
      <S.HeaderRow>
        <S.TitleText
          numberOfLines={isPlace ? 1 : 2}
          ellipsizeMode='tail'
        >
          {title}
        </S.TitleText>
        <S.CategoryBadge category={category}>
          {isPlace ? '장소' : category === 'Schedule' ? '일정' : '기타'}
        </S.CategoryBadge>
      </S.HeaderRow>
      {isPlace && location && (
        <S.LocationRow>
          <IcLocation width={13} height={13} />
          <S.LocationText>{location}</S.LocationText>
        </S.LocationRow>
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
