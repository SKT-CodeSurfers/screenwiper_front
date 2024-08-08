import React from 'react';
import styled from 'styled-components/native';
import IcLocation from '@/assets/icon/ic_location.svg';

interface CardProps {
  title: string;
  location: string;
  descriptions: string[];
}

const Card: React.FC<CardProps> = ({ title, location, descriptions }) => {
  return (
    <StyledCard>
      <TitleText>{title}</TitleText>
      <LocationRow>
        <IcLocation width={13} height={13} />
        <LocationText>{location}</LocationText>
      </LocationRow>
      <DescriptionText>
        {descriptions.map((desc, index) => (
          <BulletPointWrapper key={index}>
            <BulletPoint>•</BulletPoint>
            <BulletText>{desc}</BulletText>
          </BulletPointWrapper>
        ))}
      </DescriptionText>
    </StyledCard>
  );
};

const StyledCard = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
`;

const TitleText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_17};
  color: #333;
  margin-bottom: 5px;
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

const DescriptionText = styled.View`
  background-color: #F5F5F6;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
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

export default Card;
