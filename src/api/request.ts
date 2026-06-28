import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';

export const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${Config.TMDB_API_TOKEN}`,
    Accept: 'application/json',
  },
});

let showingOfflineToast = false;

client.interceptors.request.use(async config => {
  const state = await NetInfo.fetch();

  if (!state.isInternetReachable) {
    if (!showingOfflineToast) {
      showingOfflineToast = true;

      Toast.show({
        type: 'error',
        text1: 'No Internet Connection',
        text2: 'Please connect to the internet.',
        onHide: () => {
          showingOfflineToast = false;
        },
      });
    }

    return Promise.reject(new Error('Please connect to the internet'));
  }

  return config;
});
