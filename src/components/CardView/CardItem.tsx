import React from 'react';
import * as S from '@/components/CardView/CardStyles';  // 스타일 가져오기

interface CardItemProps {
  title: string;
  location?: string;
  descriptions: string[];
  category: 'Place' | 'Schedule' | 'Others';
}

const CardItem: React.FC<CardItemProps> = ({ title, location, descriptions, category }) => {
  const isPlace = category === 'Place';

  return (
    <S.StyledCard>
      <S.HeaderRow>
        <S.TitleText>{title}</S.TitleText>
        <S.CategoryBadge>{isPlace ? '장소' : category === 'Schedule' ? '일정' : '기타'}</S.CategoryBadge>
      </S.HeaderRow>
      {isPlace && location && (
        <S.LocationRow>
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
  );
};

export default CardItem;
