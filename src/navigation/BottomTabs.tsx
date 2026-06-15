import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import WatchList from '../screens/WatchList';
import { ICONS } from '../utils/icons';
import { COLORS } from '../utils/colors';
import { AppFontFamily } from '../components/atoms/Typography';

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
    Home: {
      screen: Home,
      options: {
        tabBarIcon: ({ focused }) =>
          focused ? <ICONS.Home_Fill /> : <ICONS.Home />,
      },
    },

    Search: {
      screen: Search,
      options: {
        tabBarIcon: ({ focused }) =>
          focused ? <ICONS.Search_Fill /> : <ICONS.Search />,
      },
    },

    WatchList: {
      screen: WatchList,
      options: {
        tabBarIcon: ({ focused }) =>
          focused ? <ICONS.Watch_List_Fill /> : <ICONS.Watch_List />,
      },
    },
  },
});
