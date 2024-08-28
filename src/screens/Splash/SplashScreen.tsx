import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMemberInfo } from '@/hooks/queries/users/useMemberInfo';
import useNavigator from '@/navigators/useNavigator';

const SplashScreen: React.FC = () => {
  const { stackNavigation } = useNavigator();
  const { data: memberInfo, isLoading, error } = useMemberInfo();

  const navigateTo = async (screenName: 'Main' | 'SignIn') => {
    if (screenName === 'SignIn') {
      await AsyncStorage.removeItem('accessToken');
    }
    stackNavigation.reset({
      index: 0,
      routes: [{ name: screenName }],
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (memberInfo) {
        navigateTo('Main');
      } else if (error) {
        navigateTo('SignIn');
      }
    }
  }, [isLoading, memberInfo, error]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
