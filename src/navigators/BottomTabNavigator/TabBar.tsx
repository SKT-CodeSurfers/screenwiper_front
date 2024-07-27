import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function TabBar({state, navigation}: BottomTabBarProps) {
  const {routeNames, routes, index} = state;
  const {bottom: bottomSize} = useSafeAreaInsets();

  /**
   * 탭 버튼을 눌렀을 때 페이지 이동하기
   * @param index
   */
  const handlePressTab = (index: number) => {
    navigation.navigate(routes[index].name);
  };

  return (
    <View
      style={{...styles.container, height: bottomSize ? 50 + bottomSize : 60}}>
      {routeNames.map((name, idx) => (
        <TouchableOpacity
          key={routes[idx].key}
          accessibilityRole="button"
          onPress={() => handlePressTab(idx)}
          style={styles.text}>
          <Text style={{color: index === idx ? '#673ab7' : '#222'}}>
            {name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});
