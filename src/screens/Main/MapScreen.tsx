import useNavigator from '@/navigators/useNavigator';
import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MapScreen() {
  const {stackNavigation, tabNavigation} = useNavigator();
  return (
    <SafeAreaView>
      <Text>List</Text>
      <Button
        title="Go to Loading (stackNavigation Hook)"
        onPress={() => stackNavigation.navigate('Loading')}
      />

      <Button
        title="Go to Result (stackNavigation Hook)"
        onPress={() => stackNavigation.navigate('Result')}
      />

      <Button
        title="Go to Detail (stackNavigation Hook)"
        onPress={() => stackNavigation.navigate('Detail')}
      />
    </SafeAreaView>
  );
}
