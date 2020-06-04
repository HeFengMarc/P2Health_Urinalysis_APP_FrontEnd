/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {View} from 'react-native';
import {HeaderHeightContext} from '@react-navigation/stack';

// HeaderHeight
const HeaderHeight = () => (
  <HeaderHeightContext.Consumer>
    {headerHeight => <View style={{height: headerHeight}} />}
  </HeaderHeightContext.Consumer>
);

export default HeaderHeight;
