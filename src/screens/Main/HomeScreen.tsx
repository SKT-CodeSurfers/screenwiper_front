import { StackScreenProps } from '@/navigators/StackNavigator/StackNavigator';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingIcon from '@/assets/icon/ic_settings.svg';
import PlaceCard from '@/components/CardView/PlaceCard';
import PlanCard from '@/components/CardView/PlanCard';
import OtherCard from '@/components/CardView/OtherCard';
import rawData from '@/screens/Main/HomeDummies.json';
import { categorizeData } from '@/utils/CategoryUtils';
import * as s from './HomeScreen.style';
import { CardItem } from '@/types/Main/CardTypes';

const cardWidth = 300; 
const cardMargin = 15;

export default function HomeScreen({ navigation }: StackScreenProps) {

  const [placeCards, setPlaceCards] = useState<CardItem[]>([]);
  const [planCards, setPlanCards] = useState<CardItem[]>([]);
  const [otherCards, setOtherCards] = useState<CardItem[]>([]);

  useEffect(() => {
    const { placeCards, planCards, otherCards } = categorizeData(rawData);
    setPlaceCards(placeCards);
    setPlanCards(planCards);
    setOtherCards(otherCards);
  }, []);

  const renderPlaceCard = ({ item }: { item: any }) => (
    <s.CardWrapper>
      <PlaceCard
        title={item.title}
        address={item.address}
        descriptions={item.descriptions}
      />
    </s.CardWrapper>
  );

  const renderPlanCard = ({ item }: { item: any }) => (
    <s.CardWrapper>
      <PlanCard
        date={item.date}
        title={item.title}
        descriptions={item.descriptions}
      />
    </s.CardWrapper>
  );

  const renderOtherCard = ({ item }: { item: any }) => (
    <s.CardWrapper>
      <OtherCard 
        title={item.title}
      />
    </s.CardWrapper>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <s.StyledScrollView>
        <s.TopContainer>
          <s.SettingButton onPress={() => navigation.navigate('Setting')}>
            <SettingIcon width={22} height={22} />
          </s.SettingButton>

          <s.TitleText>안녕하세요, <s.NameText>데보션님!</s.NameText></s.TitleText>
          <s.Description>오늘은 어떤 사진을 정리하셨나요?</s.Description>
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
            data={otherCards}
            renderItem={renderOtherCard}
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
