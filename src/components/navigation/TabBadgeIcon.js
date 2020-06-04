/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';

// import colors
import Colors from '../../theme/colors';

// TabBadgeIcon Config

// TabBadgeIcon Styles
const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.secondaryColor,
  },
  badgeText: {
    top: -0.5,
    fontSize: 10,
    color: Colors.onSecondaryColor,
  },
});

// TabBadgeIcon
const TabBadgeIcon = ({badgeCount, color, focused, name, size}) => (
  <View>
    <Icon name={name} size={size} color={color} />
    {badgeCount > 0 && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badgeCount}</Text>
      </View>
    )}
  </View>
);

export default TabBadgeIcon;
