/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Ionicons as Icon } from "@expo/vector-icons";
import type { ColorProp } from 'react-native/Libraries/StyleSheet/ColorPropType';

// StarRating Config
const IOS = Platform.OS === 'ios';
const star = IOS ? 'ios-star' : 'md-star';
const starHalf = IOS ? 'ios-star-half' : 'md-star-half';
const starOutline = IOS ? 'ios-star-outline' : 'md-star-outline';
const defaultStarColor = '#f6db74';

// StarRating Styles
const styles = StyleSheet.create({
  container: {
    left: -1,
    flexDirection: 'row'
  },
  starContainer: {
    margin: 1
  }
});

// StarRating Props
type Props = {
  rating: number,
  starSize: number,
  starColor: ColorProp
};

// render starts function
const renderStars = (rating, starSize, starColor) => {
  const stars = [star, star, star, star, star];

  const wholePart = Math.floor(rating);
  const decimalPart = (rating * 10) % 10;

  let i = 5;
  for (i; i > wholePart; i -= 1) {
    stars[i - 1] = starOutline;
  }

  if (decimalPart > 5) {
    stars[i] = starHalf;
  }

  return stars.map((item, index) => (
    <View key={index} style={styles.starContainer}>
      <Icon name={item} size={starSize || 14} color={starColor || defaultStarColor} />
    </View>
  ));
};

// StarRating
const StarRating = ({ rating = 0, starSize, starColor }: Props) => (
  <View style={styles.container}>{renderStars(rating, starSize, starColor)}</View>
);

export default StarRating;
