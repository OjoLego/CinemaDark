import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Typography, AppFontFamily } from '../atoms/Typography';
import { COLORS } from '../../utils/colors';

type SectionHeaderProps = {
  title: string;
  actionText?: string;
  onActionPress?: () => void;
};

const SectionHeader = ({
  title,
  actionText,
  onActionPress,
}: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.verticalLine} />

        <Typography fontFamily={AppFontFamily.MontserratSemiBold} fontSize={20}>
          {title}
        </Typography>
      </View>

      {actionText && (
        <Pressable onPress={onActionPress}>
          <Typography
            fontFamily={AppFontFamily.InterMedium}
            fontSize={14}
            color={COLORS.Primary}
          >
            {actionText}
          </Typography>
        </Pressable>
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  verticalLine: {
    width: 6,
    backgroundColor: COLORS.Primary,
    alignSelf: 'stretch',
    borderRadius: 3,
  },
});
