import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useNavigator from '@/navigators/useNavigator';

const SplashScreen: React.FC = () => {
  const { stackNavigation } = useNavigator();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userInfo = await AsyncStorage.getItem('userInfo');
        if (userInfo) {
          stackNavigation.navigate('Main');
        } else {
          stackNavigation.navigate('SignIn');
        }
      } catch (error) {
        console.error('Failed to load user info:', error);
        stackNavigation.navigate('SignIn');
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default SplashScreen;
