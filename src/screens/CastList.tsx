import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTmdbImage } from '../hooks/useTmdbImage';
import { useSelector } from 'react-redux';
import { TopCastCard } from '../components/molecules/Cards/TopCastCard';
import { useMemo } from 'react';
import { makeTopCastSelector } from '../redux/selectors/detailsSelector';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CastListRouteProp, HomeNavigationProp } from '../navigation/HomeStack';
import { COLORS } from '../utils/colors';
import { Header } from '../components/molecules/Header';
import { AppFontFamily } from '../components/atoms/Typography';
import { ICONS } from '../utils/icons';
import { Spacer } from '../components/atoms/Spacer';

const CastList = () => {
  const route = useRoute<CastListRouteProp>();

  const { movieId } = route.params;
  const { getImageUrl } = useTmdbImage();

  const navigation = useNavigation<HomeNavigationProp>();

  const castSelector = useMemo(() => makeTopCastSelector(movieId), [movieId]);

  const cast = useSelector(castSelector);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="CINEMA DARK"
        titleAlignment="left"
        titleProps={{
          fontFamily: AppFontFamily.Montserrat,
          fontSize: 16,
          color: COLORS.text1,
        }}
        leftIcon={<ICONS.Left_Arrow />}
        onLeftPress={() => navigation.goBack()}
      />
      <Spacer height={24} />
      <FlatList
        data={cast}
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TopCastCard
            image={getImageUrl(item.profile_path, 'w500')}
            actorName={item.original_name}
            characterName={item.character}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CastList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 24,
  },
});
