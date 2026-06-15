import React, { ReactNode } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Typography } from '../atoms/Typography';
import { COLORS } from '../../utils/colors';

export type HeaderAction = {
  icon: ReactNode;
  onPress?: () => void;
};

export type HeaderProps = {
  title: string;
  titleAlignment?: 'center' | 'left';
  titleProps?: React.ComponentProps<typeof Typography>;
  leftIcon?: ReactNode;
  rightIcons?: HeaderAction[];
  onLeftPress?: () => void;
};

export const Header = ({
  title,
  titleAlignment = 'left',
  titleProps,
  leftIcon,
  rightIcons = [],
  onLeftPress,
}: HeaderProps) => {
  const isCentered = titleAlignment === 'center';
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity style={styles.leftIcon} onPress={onLeftPress}>
          {leftIcon}
        </TouchableOpacity>
      )}

      <View
        style={[
          isCentered ? styles.centerTitleContainer : styles.leftTitleContainer,
          !isCentered && Boolean(leftIcon) && styles.leftTitleWithIcon,
        ]}
      >
        <Typography {...titleProps}>{title}</Typography>
      </View>

      <View style={styles.rightContainer}>
        {rightIcons.map((item, index) => (
          <TouchableOpacity key={index} onPress={item.onPress}>
            {item.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Border,
    minHeight: 60,
  },

  leftIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },

  rightContainer: {
    position: 'absolute',
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    zIndex: 1,
  },

  centerTitleContainer: {
    alignItems: 'center',
  },

  leftTitleContainer: {
    alignItems: 'flex-start',
    paddingStart: 16,
  },

  leftTitleWithIcon: {
    paddingStart: 56,
  },
});
