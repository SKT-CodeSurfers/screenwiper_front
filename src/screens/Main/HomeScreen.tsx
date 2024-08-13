import { StackScreenProps } from '@/navigators/StackNavigator/StackNavigator';
import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingIcon from '@/assets/icon/ic_settings.svg';
import PlaceCard from '@/components/CardView/PlaceCard';
import PlanCard from '@/components/CardView/PlanCard';
import OthersCard from '@/components/CardView/OthersCard';
import data from '@/screens/Main/HomeDummies.json';
import * as s from './HomeScreen.style';

const cardWidth = 300; 
const cardMargin = 15;
export default function HomeScreen({ navigation }: StackScreenProps) {

  const { placeCards, planCards, othersCards } = data;

  const renderPlaceCard = ({ item }: { item: any }) => (
        <s.CardWrapper>
          <PlaceCard
            title={item.title}
            location={item.location}
            descriptions={item.descriptions}
          />
        </s.CardWrapper>
  );

  const renderPlanCard = ({ item }: { item: any }) => (
        <s.CardWrapper>
          <PlanCard
            date={item.date}
            title={item.title}
            description={item.description}
          />
        </s.CardWrapper>
  );

  const renderOthersCard = ({ item }: { item: any }) => (
        <s.CardWrapper>
          <OthersCard 
            title={item.title}
          />
        </s.CardWrapper>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <s.StyledScrollView>
        <s.TopContainer>
          <s.SettingButton>
            <SettingIcon width={22} height={22} />
          </s.SettingButton>

          <s.WhiteText>안녕하세요, <s.TopText>데보션님!</s.TopText></s.WhiteText>
          <s.GrayText>오늘은 어떤 사진을 정리하셨나요?</s.GrayText>
        </s.TopContainer>

        <s.ContentContainer>
          <s.SectionTitle>이번 주말에는 여기 어때요?</s.SectionTitle>
          <FlatList
            data={placeCards}
            renderItem={renderPlaceCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={cardWidth + cardMargin * 2}
            snapToAlignment="center"
            contentContainerStyle={{ alignItems: 'center', padding: 10, justifyContent: 'center' }}
          />

          <s.SectionTitle>다가오는 일정이에요</s.SectionTitle>
          <FlatList
            data={planCards}
            renderItem={renderPlanCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={cardWidth + cardMargin * 2}
            snapToAlignment="center"
            contentContainerStyle={{ alignItems: 'center', padding: 10, justifyContent: 'center' }}
          />

          <s.SectionTitle>이것도 확인해 보세요</s.SectionTitle>
          <FlatList
            data={othersCards}
            renderItem={renderOthersCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={cardWidth + cardMargin * 2}
            snapToAlignment="center"
            contentContainerStyle={{ alignItems: 'center', padding: 10, justifyContent: 'center' }}
          />
        </s.ContentContainer>
      </s.StyledScrollView>
    </SafeAreaView>
  );
}