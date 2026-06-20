import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ICONS } from '../utils/icons';
import { COLORS } from '../utils/colors';
import { AppFontFamily } from '../components/atoms/Typography';
import { HomeStack } from './HomeStack';
import { SearchStack } from './SearchStack';
import { WatchListStack } from './WatchListStack';

export const BottomTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,

    tabBarStyle: {
      backgroundColor: COLORS.Background,
      borderTopWidth: 0,
      paddingVertical: 22,
    },

    tabBarActiveTintColor: COLORS.Primary,
    tabBarInactiveTintColor: COLORS.text2,

    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: AppFontFamily.Inter,
    },
  },

  screens: {
    HomeTab: {
      screen: HomeStack,
      options: {
        tabBarIcon: ({ focused }) =>
          focused ? <ICONS.Home_Fill /> : <ICONS.Home />,
      },
    },

    SearchTab: {
      screen: SearchStack,
      options: {
        tabBarIcon: ({ focused }) =>
          focused ? <ICONS.Search_Fill /> : <ICONS.Search />,
      },
    },

    WatchListTab: {
      screen: WatchListStack,
      options: {
        tabBarIcon: ({ focused }) =>
          focused ? <ICONS.Watch_List_Fill /> : <ICONS.Watch_List />,
      },
    },
  },
});
