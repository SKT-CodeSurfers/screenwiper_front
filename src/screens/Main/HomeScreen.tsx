import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import SettingIcon from '@/assets/icon/ic_settings.svg';

export default function HomeScreen({navigation}: StackScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StyledView>
        <TopContainer>
          <SettingButton>
            <SettingIcon width={22} height={22} />
          </SettingButton>
          
          <WhiteText>안녕하세요, <TopText>데보션님!</TopText></WhiteText>
          <GrayText>오늘은 어떤 사진을 정리하셨나요?</GrayText>
        </TopContainer>

        <ContentContainer>
          {/* 
          <StyledText>Home</StyledText>
          <Button
            title="Go to Loading"
            onPress={() => navigation.navigate('Loading')}
          />

          <Button
            title="Go to Splash"
            onPress={() => navigation.navigate('Splash')}
          /> */}
          <SectionTitle>이번 주말에는 여기 어때요?</SectionTitle>
            <PlaceCard></PlaceCard>
          
          <SectionTitle>다가오는 일정이에요</SectionTitle>
            <ScheduleCard></ScheduleCard>

          <SectionTitle>이것도 확인해 보세요</SectionTitle>
            <AdditionalCard></AdditionalCard>


        </ContentContainer>
      </StyledView>
    </SafeAreaView>
  );
}

const StyledText = styled.Text`
  ${({theme}) => theme.fonts.title_sb_21};
`;

const TopText = styled.Text`
  ${({theme}) => theme.fonts.title_sb_21};
  color: ${({ theme }) => theme.colors.white};
`;

const WhiteText = styled.Text`
  ${({theme}) => theme.fonts.body_sb_17};
  color: ${({ theme }) => theme.colors.white};
`;

const GrayText = styled.Text`
  ${({theme}) => theme.fonts.body_m_15};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
`;

const StyledView = styled.View`
  flex: 1;
  ${({theme}) => theme.mixins.flexBox('column')};
  gap: 5px;
`;

const TopContainer = styled.View`
  width: 100%;
  background-color: #758CF7;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const SettingButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px;
  margin-top: -30px;
`;

const SectionTitle = styled.Text`
  ${({theme}) => theme.fonts.title_sb_21};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`

const PlaceCard = styled.View`
  flex-direction: row;
  background-color: #F6F7FB;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

const ScheduleCard = styled.View`
  flex-direction: row;
  background-color: #F6F7FB;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

const AdditionalCard = styled.View`
  flex-direction: row;
  background-color: #F6F7FB;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;