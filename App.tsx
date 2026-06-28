import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';

import { Navigation } from './src/navigation/RootNavigator';
import { AppDispatch, persistor, store } from './src/redux/store';
import { fetchTmdbConfig } from './src/redux/thunks/configThunk';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

function AppBootstrap() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTmdbConfig());
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <Navigation />
      <Toast />
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppBootstrap />
      </PersistGate>
    </ReduxProvider>
  );
}
