import {StackScreenProps} from '@/navigators/StackNavigator';
import React from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainScreen = ({navigation}: StackScreenProps) => {
  return (
    <SafeAreaView>
      <Text>Main</Text>
      <Button title="Loading" onPress={() => navigation.navigate('Loading')} />
    </SafeAreaView>
  );
};

export default MainScreen;
