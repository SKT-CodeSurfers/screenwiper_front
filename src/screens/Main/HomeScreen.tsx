import { StackScreenProps } from '@/navigators/StackNavigator/StackNavigator';
import React from 'react';
import { Button, Text, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import SettingIcon from '@/assets/icon/ic_settings.svg';
import PlaceCard from '@/components/CardView/PlaceCard';
import ScheduleCard from '@/components/CardView/ScheduleCard';
import OthersCard from '@/components/CardView/OthersCard';
import { Shadow } from 'react-native-shadow-2';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }: StackScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledScrollView>
        <TopContainer>
          <SettingButton>
            <SettingIcon width={22} height={22} />
          </SettingButton>

          <WhiteText>안녕하세요, <TopText>데보션님!</TopText></WhiteText>
          <GrayText>오늘은 어떤 사진을 정리하셨나요?</GrayText>
        </TopContainer>

        <ContentContainer>
          <SectionTitle>이번 주말에는 여기 어때요?</SectionTitle>
          <ShadowContainer>
            <Shadow
              distance={10}
              startColor={'#00000020'}
              offset={[0, 2]}
            >
              <CardWrapper>
                <PlaceCard
                  title="문래 동, 멘"
                  location="영등포구 도림로 139길 19 1층"
                  descriptions={[
                    "문래에 생긴 라멘+마제소바 성지",
                    "일본 여행온 듯한 분위기"
                  ]}
                />
              </CardWrapper>
            </Shadow>
          </ShadowContainer>

          <SectionTitle>다가오는 일정이에요</SectionTitle>
          <ShadowContainer>
            <Shadow
              distance={10}
              startColor={'#00000020'}
              offset={[0, 2]}
            >
              <CardWrapper>
                <ScheduleCard
                  date="22"
                  title="미래공정: 노문의 휴식"
                  description="서울에서 꼭 가봐야 할 전시회 13곳"
                />
              </CardWrapper>
            </Shadow>
          </ShadowContainer>

          <SectionTitle>이것도 확인해 보세요</SectionTitle>
          <ShadowContainer>
            <Shadow
              distance={10}
              startColor={'#00000020'}
              offset={[0, 2]}
            >
              <CardWrapper>
                <OthersCard 
                  title="웜톤/쿨톤/뉴트럴톤 별 하이라이트 추천"
                />
              </CardWrapper>
            </Shadow>
          </ShadowContainer>
        </ContentContainer>
      </StyledScrollView>
    </SafeAreaView>
  );
}

const StyledScrollView = styled(ScrollView)`
  flex: 1;
  background-color: #FFF;
`;

const TopText = styled.Text`
  ${({ theme }) => theme.fonts.title_sb_21};
  color: ${({ theme }) => theme.colors.white};
`;

const WhiteText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_17};
  color: ${({ theme }) => theme.colors.white};
`;

const GrayText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_15};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
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
  ${({ theme }) => theme.fonts.title_b_18};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`;

const CardWrapper = styled.View`
  width: ${screenWidth * 0.85}px;
`;

const ShadowContainer = styled.View`
  margin-bottom: 20px;
`;
