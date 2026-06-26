import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: 'Cinema Dark',
})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

reactotron.clear();

export default reactotron;
