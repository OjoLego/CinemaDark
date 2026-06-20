import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Spacer } from '../atoms/Spacer';
import SectionHeader from '../molecules/SectionHeader';
import { TopCastCard } from '../molecules/Cards/TopCastCard';
import { useTmdbImage } from '../../hooks/useTmdbImage';
import { CastMember } from '../../utils/types';

type TopCastSectionProps = {
  cast: CastMember[];
  onViewAll?: () => void;
};

export const TopCastSection = ({ cast, onViewAll }: TopCastSectionProps) => {
  const { getImageUrl } = useTmdbImage();
  return (
    <>
      <SectionHeader
        title="Top Cast"
        actionText="View All"
        onActionPress={onViewAll}
      />

      <Spacer height={24} />

      <View style={styles.castRow}>
        {cast.slice(0, 3).map(member => (
          <TopCastCard
            key={member.id}
            image={getImageUrl(member.profile_path, 'w500') ?? ''}
            actorName={member.original_name}
            characterName={member.character}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  castRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
