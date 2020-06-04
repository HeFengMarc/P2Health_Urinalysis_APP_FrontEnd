/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome as Icon } from "@expo/vector-icons";
import type { ColorProp } from 'react-native/Libraries/StyleSheet/ColorPropType';

// import colors
import Colors from "../../theme/colors";

// PriceRating Config
const CURRENCY_ICON = "dollar";
const MAX_PRICE = 4;
const defaultCurrencyColor = Colors.primaryColor;
const emptyCurrencyColor = "rgba(0, 0, 0, 0.48)";

// PriceRating Styles
const styles = StyleSheet.create({
  container: {
    left: -1,
    flexDirection: 'row'
  },
  currencyContainer: {
    margin: 1
  }
});

// render price function
const renderPriceRating = (price, currencySize, currencyColor) => {

  const prices = new Array(MAX_PRICE).fill(null);

  return prices.map((item, index) => (
    <View key={index} style={styles.currencyContainer}>
      <Icon
        name={CURRENCY_ICON}
        size={currencySize || 12}
        color={ index < price ? (currencyColor || defaultCurrencyColor) : emptyCurrencyColor}
      />
    </View>
  ));
};

// PriceRating Props
type Props = {
  price: number,
  currencySize: number,
  currencyColor: ColorProp
};

// PriceRating
const PriceRating = ({ price = 0, currencySize, currencyColor }: Props) => (
  <View style={styles.container}>
    {
      renderPriceRating(price, currencySize, currencyColor)
    }
  </View>
);

export default PriceRating;
