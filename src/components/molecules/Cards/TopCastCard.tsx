import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';

type TopCastCardProps = {
  image?: string;
  actorName: string;
  characterName: string;
};

export const TopCastCard = ({
  image,
  actorName,
  characterName,
}: TopCastCardProps) => {
  const initials = actorName
    .split(' ')
    .filter(Boolean)
    .map(name => name.charAt(0).toUpperCase())
    .join('');
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Typography
            fontFamily={AppFontFamily.InterBold}
            fontSize={24}
            color={COLORS.text2}
          >
            {initials}
          </Typography>
        </View>
      )}

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

  placeholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.Border,
    backgroundColor: COLORS.Background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
