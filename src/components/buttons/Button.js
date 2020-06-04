/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { FontAwesome as FAIcon } from "@expo/vector-icons";

// import components
import { ButtonText } from "../text/CustomText";

// import colors, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

// Button Config
const BUTTON_BORDER_RADIUS = 4;
const BUTTON_HEIGHT = 48;
const BUTTON_WIDTH = "100%";
const BUTTON_HEIGHT_SM = 40;
const BUTTON_WIDTH_SM = Layout.SCREEN_WIDTH / 2.2;

// Button Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: BUTTON_BORDER_RADIUS
  },
  defaultContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT
  },
  smallContainer: {
    maxWidth: BUTTON_WIDTH_SM,
    height: BUTTON_HEIGHT_SM,
    paddingHorizontal: 16
  },
  disabled: {
    opacity: 0.72
  },
  socialIconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 52
  },
  outlined: {
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    backgroundColor: "transparent"
  },
  rounded: {
    borderRadius: BUTTON_HEIGHT / 2
  },
  title: {
    color: Colors.onPrimaryColor
  },
  outlinedTitle: {
    color: Colors.primaryColor
  }
});

// Button Props
type Props = {
  /**
   * Handler to be called when the user taps the button
   */
  onPress: () => void,

  /**
   * If true, disable all interactions for this component.
   */
  disabled: boolean,

  /**
   * Determines what the opacity of the wrapped view should be when touch is active.
   * The value should be between 0 and 1
   */
  activeOpacity: number,
  height: number,
  buttonStyle: ViewStyle,
  borderRadius: number,
  borderColor: string,

  /**
   * Button background color
   */
  color: string,
  iconColor: string,
  socialIconName: string, // Social FontAwesome Icon Name
  small: boolean,

  /**
   * Text to display inside the button
   */
  title: string,

  /**
   * Button title color
   */
  titleColor: string,
  rounded: boolean,
  outlined: boolean
};

// Button
const Button = ({
  onPress,
  disabled,
  activeOpacity = 0.85,
  height,
  buttonStyle,
  borderRadius,
  borderColor,
  color,
  iconColor,
  socialIconName,
  small,
  title,
  titleColor,
  rounded,
  outlined
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
    style={[
      styles.container,
      borderRadius && { borderRadius },
      color && { backgroundColor: color },
      styles.defaultContainer,
      height && { height },
      small && styles.smallContainer,
      rounded && styles.rounded,
      outlined && styles.outlined,
      height && rounded && { borderRadius: height / 2 },
      borderColor && { borderColor },
      disabled && styles.disabled,
      buttonStyle
    ]}
  >
    {socialIconName && (
      <View style={styles.socialIconContainer}>
        <FAIcon name={socialIconName} size={20} color={iconColor} />
      </View>
    )}
    <ButtonText
      style={[
        styles.title,
        outlined && styles.outlinedTitle,
        titleColor && { color: titleColor }
      ]}
    >
      {title || "Button"}
    </ButtonText>
  </TouchableOpacity>
);

export default Button;
