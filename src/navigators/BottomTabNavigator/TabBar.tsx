import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabMenuLabel} from './BottomTabNavigator';
import {IcCalendar, IcHome, IcList, IcMap} from '@/assets/icon';
import styled from 'styled-components/native';
import theme from '@/styles/theme';

export default function TabBar({state, navigation}: BottomTabBarProps) {
  const {bottom: bottomSize} = useSafeAreaInsets();

  const {routeNames, routes, index} = state;
  const routeNameLabels = useMemo(() => {
    return routeNames.map(
      value => TabMenuLabel[value as keyof typeof TabMenuLabel],
    );
  }, [routeNames]);

  const getTabIcon = (routeName: string, focused: boolean) => {
    const fillColor = focused
      ? theme.colors.primary
      : theme.colors.primary_light;

    switch (routeName) {
      case TabMenuLabel.Home:
        return <IcHome fill={fillColor} />;
      case TabMenuLabel.List:
        return <IcList fill={fillColor} />;
      case TabMenuLabel.Map:
        return <IcMap fill={fillColor} />;
      case TabMenuLabel.Calendar:
        return <IcCalendar fill={fillColor} />;
      default:
        return null;
    }
  };

  /**
   * 탭 버튼을 눌렀을 때 페이지 이동하기
   * @param index
   */
  const handlePressTab = (index: number) => {
    navigation.navigate(routes[index].name);
  };

  return (
    <TabBarContainer hasSafeArea={bottomSize}>
      {routeNames.map((name, idx) => (
        <Tab
          key={routes[idx].key}
          accessibilityRole="button"
          onPress={() => handlePressTab(idx)}>
          {getTabIcon(routeNameLabels[idx], index === idx)}
          <TabLabel active={index === idx}>{routeNameLabels[idx]}</TabLabel>
        </Tab>
      ))}
    </TabBarContainer>
  );
}

const TabBarContainer = styled.View<{hasSafeArea: number | undefined}>`
  height: ${({hasSafeArea}) =>
    hasSafeArea ? `${60 + hasSafeArea}px` : '80px'};

  padding-bottom: 10px;
  ${({theme}) => theme.mixins.flexBox()};
  border-top: 1px solid #ededed;
  background: rgba(255, 255, 255, 0.8);
`;

const Tab = styled.TouchableOpacity`
  flex: 1;

  ${({theme}) => theme.mixins.flexBox('column')};
  gap: 5px;
`;

const TabLabel = styled.Text<{active: boolean}>`
  ${({theme, active}) =>
    active ? theme.fonts.tab_active : theme.fonts.tab_inactive};
`;
