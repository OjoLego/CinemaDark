import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';

type TopCastCardProps = {
  image: string;
  actorName: string;
  characterName: string;
};

export const TopCastCard = ({
  image,
  actorName,
  characterName,
}: TopCastCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <Typography
        fontFamily={AppFontFamily.InterMedium}
        fontSize={14}
        color={COLORS.text1}
        style={styles.actorName}
      >
        {actorName}
      </Typography>

      <Typography
        fontFamily={AppFontFamily.InterMedium}
        fontSize={12}
        color={COLORS.text2}
        style={styles.characterName}
      >
        {characterName}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.Border,
  },

  actorName: {
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 18,
  },

  characterName: {
    marginTop: 4,
    textAlign: 'center',
    lineHeight: 16,
  },
});
