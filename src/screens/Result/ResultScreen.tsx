import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect} from 'react';
import dummies from './dummies.json';
import styled from 'styled-components/native';
import {IcDown} from '@/assets/icon';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ResultScreen = ({navigation}: StackScreenProps) => {
  const {result} = dummies;
  const data = result[0];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <ResultHeader />,
    });
  }, [navigation]);

  return (
    <CustomHeaderContainer>
      <StyledImage source={{uri: data.image}} />

      <BottomSheet snapPoints={['75%', '100%']}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <StyledCategoryButton>
            <StyledCategoryText>{data.category}</StyledCategoryText>
            <IcDown />
          </StyledCategoryButton>

          <StyledTitle>{data.title}</StyledTitle>

          <StyledSubTitle>
            주소 <StyledSubContent>{data.address}</StyledSubContent>{' '}
          </StyledSubTitle>

          <StyledSubTitle>
            영업시간
            <StyledSubContent>{data.operatingHours}</StyledSubContent>
          </StyledSubTitle>

          <StyledSubTitle>✨ 요약</StyledSubTitle>
          <StyledSubContent>{data.summary}</StyledSubContent>
        </BottomSheetScrollView>
      </BottomSheet>
    </CustomHeaderContainer>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
});

const StyledImage = styled.Image`
  width: 100%;
  height: 50%;
`;

const StyledCategoryButton = styled.TouchableOpacity`
  width: 80px;
  padding: 8px 20px;
  border-radius: 20px;
  background: #4277ff;

  ${({theme}) => theme.mixins.flexBox()};
  gap: 5px;
`;

const StyledCategoryText = styled.Text`
  ${({theme}) => theme.fonts.body_b_16};
  color: ${({theme}) => theme.colors.white};
`;

const StyledTitle = styled.Text`
  ${({theme}) => theme.fonts.title_eb_21};
  margin: 17px 0;
`;

const StyledSubTitle = styled.Text`
  ${({theme}) => theme.fonts.body_b_16};
  margin-bottom: 10px;
`;

const StyledSubContent = styled.Text`
  ${({theme}) => theme.fonts.body_m_16};
`;
