import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '@/navigators/StakNavigator/StackNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;