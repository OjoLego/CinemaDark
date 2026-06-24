import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { HomeNavigationProp } from '../navigation/HomeStack';
import { useNavigation } from '@react-navigation/native';
import { homeSelector } from '../redux/selectors/homeSelector';
import { useSelector } from 'react-redux';
import { TopRatedCard } from '../components/molecules/Cards/TopRatedCard';
import { useTmdbImage } from '../hooks/useTmdbImage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils/colors';
import { Header } from '../components/molecules/Header';
import { AppFontFamily } from '../components/atoms/Typography';
import { ICONS } from '../utils/icons';
import { Spacer } from '../components/atoms/Spacer';

const TopRatedMovieList = () => {
  const { getImageUrl } = useTmdbImage();
  const navigation = useNavigation<HomeNavigationProp>();

  const home = useSelector(homeSelector);

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
        data={home.topRated}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TopRatedCard
              image={getImageUrl(item.poster_path, 'w500') ?? ''}
              title={item.title}
              rating={item.vote_average.toFixed(1)}
              variant="compact"
              onPress={() =>
                navigation.navigate('Details', {
                  movieId: item.id,
                })
              }
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default TopRatedMovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  item: {
    flex: 1,
    marginHorizontal: 6,
    marginBottom: 16,
  },
});
