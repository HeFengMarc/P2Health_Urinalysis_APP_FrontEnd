/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 1,
    backgroundColor: '#eeeeee'
  },
  mh16: {
    marginHorizontal: 16
  }
});

type Props = {
  marginLeft: number,
  type: 'full-bleed' | 'inset' | 'middle'
};

const Divider = ({ marginLeft, type }: Props) => (
  <View
    style={[styles.container, type === 'inset' && { marginLeft }, type === 'middle' && styles.mh16]}
  />
);

export default Divider;
