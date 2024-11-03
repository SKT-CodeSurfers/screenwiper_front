import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserInfo} from '@/hooks/queries/users/useGetUser';
import useNavigator from '@/navigators/useNavigator';

const SplashScreen: React.FC = () => {
  const {stackNavigation} = useNavigator();

  const navigateTo = async (screenName: 'Main' | 'SignIn') => {
    if (screenName === 'SignIn') {
      await AsyncStorage.removeItem('accessToken');
    }
    stackNavigation.reset({
      index: 0,
      routes: [{name: screenName}],
    });
  };

  const checkAutoLogin = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        navigateTo('SignIn');
        return;
      }

      const user = await getUserInfo();
      if (user) {
        navigateTo('Main');
      } else {
        navigateTo('SignIn');
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
      navigateTo('SignIn');
    }
  };

  useEffect(() => {
    checkAutoLogin();
  }, []);

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
