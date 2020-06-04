/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import colors, fonts
import Colors from '../../theme/colors';
import Icon from '../icon/Icon';

// Avatar Config
const AVATAR_BG_COLOR = '#9e9e9e';
const AVATAR_ICON = Platform.OS === 'ios' ? 'ios-person' : 'md-person';
const AVATAR_S = 40;
const AVATAR_M = 56;
const AVATAR_L = 80;

// Avatar Styles
const styles = StyleSheet.create({
  smallAvatar: {
    width: AVATAR_S,
    height: AVATAR_S,
  },
  mediumAvatar: {
    width: AVATAR_M,
    height: AVATAR_M,
  },
  largeAvatar: {
    width: AVATAR_L,
    height: AVATAR_L,
  },
  rounded: {
    borderRadius: AVATAR_M / 2,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AVATAR_BG_COLOR,
  },
  initials: {
    top: -1,
    fontWeight: '500',
    color: Colors.white,
    fontSize: 22,
    letterSpacing: 1.2,
  },
  smallInitials: {fontSize: 12, letterSpacing: 0.8},
  largeInitials: {top: -2, fontSize: 30, letterSpacing: 1.4},
});

const renderAvatar = (name, size) => {
  let initials;
  let content;
  let avatarIconSize = 32;

  if (name === undefined || name === '') {
    if (size === 'small') avatarIconSize = 24;
    if (size === 'large') avatarIconSize = 44;

    content = (
      <Icon name={AVATAR_ICON} size={avatarIconSize} color={Colors.white} />
    );
  } else {
    const a = name.split(' ');

    const firstLetter = a[0].charAt(0).toUpperCase();

    let secondLetter = '';
    if (a.length > 1) {
      secondLetter = a[a.length - 1].charAt(0).toUpperCase();
    }

    initials = firstLetter + secondLetter;

    content = (
      <Text
        style={[
          styles.initials,
          (size === 'small' || (size > 30 && size <= 50)) &&
            styles.smallInitials,
          (size === 'large' || size > 80) && styles.largeInitials,
        ]}>
        {initials}
      </Text>
    );
  }

  return content;
};

// Avatar Props
type Props = {
  borderRadius: number,
  color: string,
  imageUri: string,
  name: string,
  rounded: boolean,
  size: 'small' | 'large' | number,
};

// Avatar
const Avatar = ({
  borderRadius,
  color,
  imageUri,
  name,
  rounded,
  size,
}: Props) => {
  if (imageUri === undefined) {
    return (
      <View
        style={[
          styles.avatarContainer,
          color && {backgroundColor: color},
          styles.mediumAvatar,
          size === 'small' && styles.smallAvatar,
          size === 'large' && styles.largeAvatar,
          rounded && styles.rounded,
          rounded && size === 'small' && {borderRadius: AVATAR_S / 2},
          rounded && size === 'large' && {borderRadius: AVATAR_L / 2},
          borderRadius && {borderRadius},
          typeof size === 'number' && {
            width: size,
            height: size,
            borderRadius: rounded ? size / 2 : 0,
          },
        ]}>
        {renderAvatar(name, size)}
      </View>
    );
  }
  return (
    <Image
      source={getImgSource(imageUri)}
      style={[
        styles.mediumAvatar,
        size === 'small' && styles.smallAvatar,
        size === 'large' && styles.largeAvatar,
        rounded && styles.rounded,
        rounded && size === 'small' && {borderRadius: AVATAR_S / 2},
        rounded && size === 'large' && {borderRadius: AVATAR_L / 2},
        borderRadius && {borderRadius},
        typeof size === 'number' && {
          width: size,
          height: size,
          borderRadius: rounded ? size / 2 : 0,
        },
      ]}
    />
  );
};

export default Avatar;
