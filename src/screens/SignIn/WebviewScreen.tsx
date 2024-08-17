import React from 'react';
import { WebView } from 'react-native-webview';
import useNavigator from '@/navigators/useNavigator';
import { Text } from 'react-native';

const WebviewScreen: React.FC = () => {
  const { stackNavigation } = useNavigator();
  const { url } = stackNavigation.getState().routes.find(route => route.name === 'WebView')?.params ?? {};

  const getQueryParam = (url: string, param: string): string | null => {
    const queryString = url.split('?')[1];
    if (!queryString) {
      return null;
    }

    const params = queryString.split('&');
    for (const paramPair of params) {
      const [key, value] = paramPair.split('=');
      if (key === param) {
        return decodeURIComponent(value);
      }
    }

    return null;
  };

  const onNavigationStateChange = (navState: any) => {
    const { url } = navState;

    if (url.includes('http://43.201.193.38:8080/callback')) {
      const code = getQueryParam(url, 'code');
      if (code) {
        fetch(`http://43.201.193.38:8080/api/callback?code=${code}`)
          .then(response => response.text())
          .then(data => {
            console.log('Login successful:', data);
            stackNavigation.navigate('Main');
          })
          .catch(error => console.error('Error during callback processing:', error));
      }
    }
  };

  if (!url) {
    return <Text>Loading...</Text>;
  }

  return (
    <WebView
      source={{ uri: url }}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
};

export default WebviewScreen;