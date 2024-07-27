import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from './StackNavigator/StackNavigator';
import {TabParamList} from './BottomTabNavigator/BottomTabNavigator';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<StackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<TabParamList>>();

  return {stackNavigation, tabNavigation};
};

export default useNavigator;
