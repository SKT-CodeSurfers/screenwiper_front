import React from 'react';
import IcLocation from '@/assets/icon/ic_location.svg';
import {Shadow} from 'react-native-shadow-2';
import * as S from '@/components/Main/CardView/CardStyles'; // 스타일 가져오기

interface PlaceCardProps {
  title: string;
  address: string;
  descriptions: string[];
}

const Card: React.FC<PlaceCardProps> = ({title, address, descriptions}) => {
  return (
    <Shadow distance={10} startColor={'#00000008'} offset={[0, 0]}>
      <S.StyledCard>
        <S.TitleText>{title}</S.TitleText>
        {address && (
          <S.AddressRow>
            <IcLocation width={13} height={13} />
            <S.AddressText>{address}</S.AddressText>
          </S.AddressRow>
        )}
        <S.DescriptionText>
          {descriptions.map((desc, index) => (
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

export default Card;
