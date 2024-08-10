  import React from 'react';
  import styled from 'styled-components/native';
  import { Shadow } from 'react-native-shadow-2';

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
      <CardContainer>
        <DetailsContainer>
          <TitleText numberOfLines={1} ellipsizeMode="tail">{title}</TitleText>
        </DetailsContainer>
      </CardContainer>
      </Shadow>
    );
  };

  const CardContainer = styled.View`
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    width: 300;
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
