import { createStaticNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import { BottomTabs } from './BottomTabs';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  initialRouteName: 'Main',
  screens: {
    SignIn: SignIn,
    SignUp: SignUp,
    Main: BottomTabs,
  },
});

export const Navigation = createStaticNavigation(RootStack);
