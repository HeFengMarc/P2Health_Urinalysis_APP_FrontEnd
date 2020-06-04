/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from "react";
import { Platform, StyleSheet } from "react-native";
import type { ColorProp } from "react-native/Libraries/StyleSheet/ColorPropType";
import { Ionicons as Ionicon } from "@expo/vector-icons";

// import colors, fonts
import Colors from "../../theme/colors";

// Icon Config
const ICON_COLOR = Colors.black;
const ICON_SIZE = 22;

// Icon Styles
const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    textAlign: "center"
  }
});

// Icon Props
type Props = {
  color: ColorProp,
  name: string,
  size: number
};

// Icon
const Icon = ({ color = ICON_COLOR, name, size = ICON_SIZE }: Props) => {
  const iconSize = Platform.OS === "ios" ? size + 2 : size;

  return (
    <Ionicon
      name={name}
      color={color}
      size={iconSize}
      style={[
        {
          height: iconSize,
          width: iconSize
        },
        styles.icon
      ]}
    />
  );
};

export default Icon;
