import React from 'react';
import styled from 'styled-components/native';
import IcLocation from '@/assets/icon/ic_location.svg';

interface CardProps {
  header: string;
  subHeader: string;
  descriptions: string[];
}

const Card: React.FC<CardProps> = ({ header, subHeader, descriptions }) => {
  return (
    <StyledCard>
      <CardHeader>{header}</CardHeader>
      <SubHeaderRow>
        <IcLocation width={13} height={13}/>
        <CardSubHeader>{subHeader}</CardSubHeader>
      </SubHeaderRow>
      <CardDescription>
        {descriptions.map((desc, index) => (
            <BulletPointWrapper key={index}>
                <BulletPoint>•</BulletPoint>
                <BulletText>{desc}</BulletText>
            </BulletPointWrapper>
        ))}
      </CardDescription>
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

const CardHeader = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_17};
  color: #333;
  margin-bottom: 5px;
`;

const CardSubHeader = styled.Text`
  ${({ theme }) => theme.fonts.body_m_8};
  color: #666;
  margin-left: 5px;
`;

const SubHeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const CardDescription = styled.View`
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
