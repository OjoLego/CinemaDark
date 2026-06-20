import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppFontFamily, Typography } from '../atoms/Typography';
import { COLORS } from '../../utils/colors';
import { Rating } from '../atoms/Rating';

const InfoText = ({ children }: { children: React.ReactNode }) => (
  <Typography
    fontFamily={AppFontFamily.InterBold}
    fontSize={14}
    color={COLORS.text2}
  >
    {children}
  </Typography>
);

const Dot = () => (
  <Typography
    fontFamily={AppFontFamily.InterBold}
    fontSize={14}
    color={COLORS.text2}
  >
    {'•'}
  </Typography>
);

type Props = {
  title: string;
  rating: string | number;
  year: string;
  duration: string;
  isAdult: boolean;
  genres: string[];
};

export const MovieDetailsInfo = ({
  title,
  rating,
  year,
  duration,
  isAdult,
  genres,
}: Props) => {
  return (
    <View>
      <Typography
        fontFamily={AppFontFamily.MontserratBold}
        fontSize={32}
        color={COLORS.White}
      >
        {title}
      </Typography>

      <View style={styles.infoRow}>
        <Rating value={rating} variant="badge" />

        <InfoText>{year}</InfoText>
        <Dot />
        <InfoText>{duration}</InfoText>

        {isAdult && (
          <>
            <Dot />
            <InfoText>18+</InfoText>
          </>
        )}
      </View>

      <View style={styles.genreContainer}>
        {genres.map(genre => (
          <View key={genre} style={styles.genreBadge}>
            <Typography>{genre}</Typography>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 12,
  },

  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 20,
  },

  genreBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: COLORS.Surface,
    borderColor: COLORS.Border,
    borderWidth: 1,
  },
});
