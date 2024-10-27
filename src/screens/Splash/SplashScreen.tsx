import React, {useEffect, useMemo} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetUser} from '@/hooks/queries/users/useGetUser';
import useNavigator from '@/navigators/useNavigator';

const SplashScreen: React.FC = () => {
  const {stackNavigation} = useNavigator();
  const {data: user, isLoading, isError} = useGetUser();

  const navigateTo = async (screenName: 'Main' | 'SignIn') => {
    if (screenName === 'SignIn') {
      await AsyncStorage.removeItem('accessToken');
    }
    stackNavigation.reset({
      index: 0,
      routes: [{name: screenName}],
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        navigateTo('Main');
      } else if (isError) {
        navigateTo('SignIn');
      }
    }
  }, [isLoading, user, isError]);

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
