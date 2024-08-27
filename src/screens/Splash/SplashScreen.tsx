import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useNavigator from '@/navigators/useNavigator';

const SplashScreen: React.FC = () => {
  const { stackNavigation } = useNavigator();


const removeAccessToken = async () => {
  try {
    await AsyncStorage.removeItem('accessToken');
    console.log('Access token removed');
  } catch (error) {
    console.error('Error removing access token:', error);
  }
};

  
  const checkToken = async () => {
    //removeAccessToken();
    const token = await AsyncStorage.getItem('accessToken');
    
    if (token) {
      console.log('Token found:', token);
      
      stackNavigation.navigate('Main');
    } else {
      stackNavigation.navigate('SignIn');
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default SplashScreen;
