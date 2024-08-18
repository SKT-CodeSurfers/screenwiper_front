import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import useNavigator from '@/navigators/useNavigator';
import { useMemberInfo } from '@/hooks/queries/users/useMemberInfo';

const SplashScreen: React.FC = () => {
  const { stackNavigation } = useNavigator();
  const { data, isLoading, isError } = useMemberInfo();

  useEffect(() => {
    console.log('hi');
    if (!isLoading) {
      if (data) {
        console.log('Member Info:', data);
        stackNavigation.navigate('Main');
      } else {
        stackNavigation.navigate('SignIn');
      }
    }

    if (isError) {
      stackNavigation.navigate('SignIn');
    }
  }, [isLoading, data, isError]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default SplashScreen;
