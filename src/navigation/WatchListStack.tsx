import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import WatchList from '../screens/WatchList';
import Details from '../screens/Details';

export type WatchListStackParamList = {
  WatchList: undefined;
  Details: {
    movieId: number;
  };
};

export type WatchListNavigationProp = NativeStackNavigationProp<
  WatchListStackParamList,
  'WatchList'
>;

export const WatchListStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    WatchList,
    Details,
  },
});
