import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../utils/colors';

export const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.Border,
  },
});
