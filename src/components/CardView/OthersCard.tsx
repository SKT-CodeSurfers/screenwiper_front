import React from 'react';
import styled from 'styled-components/native';

interface OthersCardProps {
  title: string;
}

const OthersCard: React.FC<OthersCardProps> = ({ title }) => {
  return (
    <CardContainer>
      <DetailsContainer>
        <TitleText numberOfLines={1} ellipsizeMode="tail">{title}</TitleText>
      </DetailsContainer>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
`;

const DetailsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const TitleText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_17};
  color: #333;
`;

export default OthersCard;
