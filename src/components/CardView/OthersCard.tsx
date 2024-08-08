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
