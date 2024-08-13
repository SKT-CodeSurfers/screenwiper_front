import React from 'react';
import styled from 'styled-components/native';

interface CardItemProps {
  title: string;
  location?: string;
  descriptions: string[];
  category: 'Place' | 'Schedule' | 'Others';
}

const CardItem: React.FC<CardItemProps> = ({ title, location, descriptions, category }) => {
  const isPlace = category === 'Place';
  
  return (
    <StyledCard>
      <HeaderRow>
        <TitleText>{title}</TitleText>
        <CategoryBadge>{isPlace ? '장소' : category === 'Schedule' ? '일정' : '기타'}</CategoryBadge>
      </HeaderRow>
      {isPlace && location && (
        <LocationRow>
          <LocationText>{location}</LocationText>
        </LocationRow>
      )}
      <DescriptionContainer>
        {descriptions.slice(0, isPlace ? 2 : 3).map((desc, index) => (
          <BulletPointWrapper key={index}>
            <BulletPoint>•</BulletPoint>
            <BulletText>{desc}</BulletText>
          </BulletPointWrapper>
        ))}
      </DescriptionContainer>
    </StyledCard>
  );
};

const StyledCard = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  elevation: 5;
`;

const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_17};
  color: #333;
`;

const CategoryBadge = styled.Text`
  background-color: #758CF7;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  ${({ theme }) => theme.fonts.body_m_12};
`;

const LocationText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_8};
  color: #666;
  margin-left: 5px;
`;

const LocationRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const DescriptionContainer = styled.View`
  margin-top: 10px;
  background-color: #F5F5F6;
  border-radius: 5px;
  padding: 10px;
`;

const BulletPointWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const BulletPoint = styled.Text`
  color: #666;
  margin-right: 5px;
`;

const BulletText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_12};
  color: #666;
`;

export default CardItem;
