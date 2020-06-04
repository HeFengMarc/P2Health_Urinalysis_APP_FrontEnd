/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Ionicons as Icon, FontAwesome as FAIcon} from '@expo/vector-icons';
import Color from 'color';

// import components
import {ButtonText} from '../text/CustomText';
import TouchableItem from '../TouchableItem';

// import colors
import Colors from '../../theme/colors';

// OutlinedButton Config
const BUTTON_BORDER_RADIUS = 4;
const BUTTON_HEIGHT = 44;
const BUTTON_WIDTH = '100%';

// OutlinedButton Styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .12)',
    borderRadius: BUTTON_BORDER_RADIUS,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  outlinedButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 64,
    maxWidth: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
  },
  rounded: {
    borderRadius: BUTTON_HEIGHT / 2,
  },
  socialIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 52,
  },
  iconContainer: {
    marginLeft: 12,
  },
  pl8: {paddingLeft: 8},
  title: {
    paddingHorizontal: 16,
    color: Colors.primaryColor,
    textAlign: 'center',
  },
});

// OutlinedButton Props
type Props = {
  onPress: () => void,
  activeOpacity: number,
  buttonStyle: ViewStyle,
  height: number,
  borderColor: string,
  borderRadius: number,
  color: string,
  iconColor: string,
  iconName: string,
  socialIconName: string,
  title: string,
  titleColor: string,
  rippleColor: string,
  rounded: boolean,
};

// OutlinedButton
const OutlinedButton = ({
  onPress,
  activeOpacity = 0.85,
  buttonStyle,
  height,
  borderColor,
  borderRadius,
  color,
  iconColor,
  iconName,
  socialIconName,
  title,
  titleColor,
  rippleColor = Color(Colors.primaryColor).alpha(0.12).rgb().string(),
  rounded,
}: Props) => (
  <View
    style={[
      styles.container,
      color && {backgroundColor: color},
      borderColor && {borderColor},
      borderRadius && {borderRadius},
      rounded && styles.rounded,
      height && rounded && {borderRadius: height / 2},
      buttonStyle,
    ]}>
    <TouchableItem
      onPress={onPress}
      activeOpacity={activeOpacity}
      rippleColor={rippleColor}>
      <View style={[styles.outlinedButton, height && {height}]}>
        {socialIconName && (
          <View style={styles.socialIconContainer}>
            <FAIcon name={socialIconName} size={20} color={iconColor} />
          </View>
        )}
        {iconName && (
          <View style={styles.iconContainer}>
            <Icon name={iconName} size={18} color={iconColor} />
          </View>
        )}
        <ButtonText
          style={[
            styles.title,
            titleColor && {color: titleColor},
            iconName && styles.pl8,
          ]}>
          {title !== undefined ? title.toUpperCase() : 'BUTTON'}
        </ButtonText>
      </View>
    </TouchableItem>
  </View>
);

export default OutlinedButton;
