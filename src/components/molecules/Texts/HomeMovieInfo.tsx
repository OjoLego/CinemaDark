import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';

type HomeMovieInfoProps = {
  title: string;
  description: string;
};

const HomeMovieInfo = ({ title, description }: HomeMovieInfoProps) => {
  return (
    <View style={styles.container}>
      <Typography
        fontFamily={AppFontFamily.MontserratBold}
        fontSize={32}
        color={COLORS.White}
      >
        {title}
      </Typography>

      <Typography
        fontFamily={AppFontFamily.Inter}
        fontSize={14}
        color={COLORS.secondaryText}
        numberOfLines={3}
        ellipsizeMode="tail"
        style={styles.description}
      >
        {description}
      </Typography>
    </View>
  );
};

export default HomeMovieInfo;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },

  description: {
    lineHeight: 22,
  },
});
