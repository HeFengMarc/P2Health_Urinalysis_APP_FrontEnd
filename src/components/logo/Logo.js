/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type { ColorProp } from 'react-native/Libraries/StyleSheet/ColorPropType';

// Logo Config
const LOGO = require('../../assets/img/p2health_logo.png');
const LOGO_TEXT_WIDE = require('../../assets/img/logo_text_wide.png');

// Logo Styles
const styles = StyleSheet.create({
  smallImg: {
    width: 40,
    height: 40
  },
  mediumImg: {
    width: 56,
    height: 56
  },
  largeImg: {
    width: 72,
    height: 72
  },
  textWideImg: {
    width: 144
  }
});

// Logo Props
type Props = {
  logoStyle: StyleProp,
  size: 'small' | 'medium' | 'large' | number,
  tintColor: ColorProp,
  type: 'text-wide'
};

const logoSource = (type) => {
  if (type === 'text-wide') {
    return LOGO_TEXT_WIDE;
  }
  return LOGO;
};

// Logo
const Logo = ({
  logoStyle, size, tintColor, type
}: Props) => (
  <Image
    source={logoSource(type)}
    style={[
      styles.smallImg,
      size === 'medium' && styles.mediumImg,
      size === 'large' && styles.largeImg,
      type === 'text-wide' && styles.textWideImg,
      typeof size === 'number' && { width: size, height: size },
      //{ tintColor },
      //logoStyle && logoStyle
    ]}
    //tintColor={'#fff'}
    resizeMode="contain"
  />
);

export default Logo;
