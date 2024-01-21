import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Chip} from 'react-native-material-chips';

import {CloseIcon, DeleteIcon} from '../assets/icons';
import Text from './common/Text';

const ChipExample = () => {
  const onChipItemPress = () => {
    Alert.alert('Alert', 'Item pressed!');
  };

  const onRemoveIconPress = () => {
    Alert.alert('Alert', 'Remove icon pressed!');
  };

  const renderOutlinedLeadingIcon = () => (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      }}
      style={styles.avatar}
    />
  );

  const renderOutlinedTrailingIcon = () => (
    <TouchableOpacity onPress={onRemoveIconPress}>
      <CloseIcon />
    </TouchableOpacity>
  );

  const renderDisabledTrailingIcon = () => <DeleteIcon />;

  return (
    <>
      <Text variant="title" content="Chip" />

      <Text variant="subtitle" content="Solid" />
      <Chip
        variant="solid"
        label="What's on your mind?"
        style={styles.chip}
        onPress={onChipItemPress}
      />

      <Text variant="subtitle" content="Outlined" />
      <Chip
        variant="outlined"
        label="emily.johnson@gmail.com"
        leadingIcon={renderOutlinedLeadingIcon}
        trailingIcon={renderOutlinedTrailingIcon}
        style={styles.chip}
        onPress={onChipItemPress}
      />

      <Text variant="subtitle" content="Disabled" />
      <Chip
        variant="disabled"
        label="Delete"
        trailingIcon={renderDisabledTrailingIcon}
        style={styles.chip}
        onPress={onChipItemPress}
      />
    </>
  );
};

export default ChipExample;

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
});
