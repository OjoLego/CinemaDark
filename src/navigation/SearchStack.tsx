import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Search from '../screens/Search';
import Details from '../screens/Details';
import CastList from '../screens/CastList';

export type SearchStackParamList = {
  Search: undefined;
  Details: {
    movieId: number;
  };
  CastList: {
    movieId: number;
  };
};

export type SearchNavigationProp = NativeStackNavigationProp<
  SearchStackParamList,
  'Search'
>;

export const SearchStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Search,
    Details,
    CastList,
  },
});
