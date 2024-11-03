import React from 'react';
import IcLocation from '@/assets/icon/ic_location.svg';
import * as S from '@/components/Main/CardView/CardStyles';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';
import useNavigator from '@/navigators/useNavigator';
import {TouchableOpacity} from 'react-native';
import {ResultCategory, ResultTypes} from '@/types/Result/ResultTypes';

interface CardItemProps {
  item: ResultTypes;
}

const CardItem: React.FC<CardItemProps> = ({item}) => {
  const {stackNavigation} = useNavigator();

  const isPlace = item.categoryName === ResultCategory.PLACE;

  return (
    <TouchableOpacity
      onPress={() =>
        stackNavigation.navigate('Detail', {photoId: item.photoId})
      }>
      <Shadow distance={10} startColor={'#00000008'} offset={[0, 0]}>
        <S.StyledCard>
          <S.HeaderRow>
            <S.TitleText numberOfLines={isPlace ? 1 : 2} ellipsizeMode="tail">
              {item.title}
            </S.TitleText>
            <S.CategoryBadgeWrapper category={item.categoryName}>
              <S.CategoryBadgeText>
                {isPlace
                  ? '장소'
                  : item.categoryName === ResultCategory.PLAN
                    ? '일정'
                    : '기타'}
              </S.CategoryBadgeText>
            </S.CategoryBadgeWrapper>
          </S.HeaderRow>
          {isPlace && item && (
            <S.AddressRow>
              <IcLocation width={13} height={13} />
              <S.AddressText>{item.address}</S.AddressText>
            </S.AddressRow>
          )}
          <S.DescriptionText>
            <S.BulletText>{item.summary}</S.BulletText>
            {/* {item.summary} */}
            {/* {item.descriptions.slice(0, isPlace ? 2 : 3).map((desc, index) => (
              <S.BulletPointWrapper key={index}>
                <S.BulletPoint>•</S.BulletPoint>
                <S.BulletText>{desc}</S.BulletText>
              </S.BulletPointWrapper>
            ))} */}
          </S.DescriptionText>
        </S.StyledCard>
      </Shadow>
    </TouchableOpacity>
  );
};

export default CardItem;
