import React from 'react';
import styled from 'styled-components/native';

interface ScheduleCardProps {
  date: string;
  title: string;
  description: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ date, title, description }) => {
  return (
    <CardContainer>
      <DateContainer>
        <DateText>{date}</DateText>
      </DateContainer>
      <DetailsContainer>
        <TitleText numberOfLines={1} ellipsizeMode="tail">{title}</TitleText>
        <DescriptionText numberOfLines={1} ellipsizeMode="tail">{description}</DescriptionText>
      </DetailsContainer>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;

`;

const DateContainer = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 15px;
`;

const DateText = styled.Text`
  ${({ theme }) => theme.fonts.title_sb_21};
  color: #333;
`;

const DetailsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const TitleText = styled.Text`
  ${({ theme }) => theme.fonts.title_b_16};
  color: #333;
  margin-bottom: 5px;
  text-align: right;
`;

const DescriptionText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_12};
  color: #666;
  text-align: right;
`;

export default ScheduleCard;
