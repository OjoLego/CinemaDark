import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';
import { RouteProp } from '@react-navigation/native';
import CastList from '../screens/CastList';
import TopRatedMovieList from '../screens/TopRatedMovieList';

export type HomeStackParamList = {
  Home: undefined;
  Details: {
    movieId: number;
  };
  CastList: {
    movieId: number;
  };
  TopRatedMovieList: undefined;
};

export type HomeNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

export type DetailsRouteProp = RouteProp<HomeStackParamList, 'Details'>;

export type CastListRouteProp = RouteProp<HomeStackParamList, 'CastList'>;

export const HomeStack = createNativeStackNavigator<HomeStackParamList>({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home,
    Details,
    CastList,
    TopRatedMovieList,
  },
});
