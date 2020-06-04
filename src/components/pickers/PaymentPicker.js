/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "color";
import { FontAwesome as FAIcon } from "@expo/vector-icons";
import type { ColorProp } from "react-native/Libraries/StyleSheet/ColorPropType";

// import components
import { Caption, Subtitle1 } from "../text/CustomText";
import TouchableItem from "../TouchableItem";

// import colors
import Colors from "../../theme/colors";

// PaymentPicker Styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    borderRadius: 8,
    overflow: "hidden"
  },
  paymentPicker: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 16,
    width: 144,
    height: 124,
    backgroundColor: "#fff"
  },
  numberOfItemsContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 22,
    height: 22,
    backgroundColor: Color(Colors.primaryColor).alpha(0.1)
  }
});

// PaymentPicker Props
type Props = {
  iconColor: ColorProp,
  iconName:
    | "credit-card"
    | "money"
    | "bank"
    | "apple"
    | "google"
    | "paypal"
    | "google-wallet"
    | "cc-stripe",
  title: string,
  numberOfItems: number,
  link: string,
};

// PaymentPicker
const PaymentPicker = ({
  iconColor = Color(Colors.black)
    .alpha(0.8)
    .string(),
  iconName,
  title,
  numberOfItems,
}: Props) => (
  <View style={styles.container}>
    <TouchableItem useForeground>
      <View style={styles.paymentPicker}>
        <View style={styles.iconContainer}>
          <FAIcon name={iconName} size={34} color={iconColor} />
        </View>

        {numberOfItems > 0 && (
          <View style={styles.numberOfItemsContainer}>
            <Caption style={styles.numberOfItems}>{numberOfItems}</Caption>
          </View>
        )}

        <Subtitle1>{title}</Subtitle1>
      </View>
    </TouchableItem>
  </View>
);

export default PaymentPicker;
