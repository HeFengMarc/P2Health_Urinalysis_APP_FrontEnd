/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import type ReactElement from 'react';
import {Platform, StyleSheet, Text as RNText} from 'react-native';

// import colors
import Colors from '../../theme/colors';

// CustomText Config
const platform = Platform.OS;
const fontConfig = {
  ios: {
    thin: {
      fontFamily: 'System',
      fontWeight: '100',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300',
    },
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontWeight: '700',
    },
  },
  android: {
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    bold: {
      fontWeight: 'bold',
    },
  },
};
const fonts = fontConfig[platform];

// CustomText Styles
const styles = StyleSheet.create({
  h1: {
    // fontWeight: '300',
    ...fonts.light,
    fontSize: 96,
    letterSpacing: -1.5,
    color: Colors.primaryText,
  },
  h2: {
    // fontWeight: '300',
    ...fonts.light,
    fontSize: 60,
    letterSpacing: -0.5,
    color: Colors.primaryText,
  },
  h3: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 48,
    color: Colors.primaryText,
  },
  h4: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 34,
    letterSpacing: 0.25,
    color: Colors.primaryText,
  },
  h5: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 24,
    color: Colors.primaryText,
  },
  h6: {
    // fontWeight: '500',
    ...fonts.medium,
    fontSize: 20,
    letterSpacing: 0.15,
    color: Colors.primaryText,
  },
  title: {
    // fontWeight: '500',
    ...fonts.medium,
    fontSize: 25,
    lineHeight: 30,
    color: Colors.primaryText,
  },
  subtitle1: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: Colors.primaryText,
  },
  subtitle2: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.1,
    color: Colors.secondaryText,
  },
  text: {
    // fontWeight: '400'
    ...fonts.regular,
  },
  // body1
  paragraph: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: Colors.secondaryText,
  },
  // body 2
  smallText: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: Colors.secondaryText,
  },
  buttonText: {
    // fontWeight: '500',
    ...fonts.medium,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.75,
  },
  caption: {
    // fontWeight: '400',
    ...fonts.regular,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: Colors.secondaryText,
  },
});

export const Heading1 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.h1, style]} {...props} />
);

export const Heading2 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.h2, style]} {...props} />
);

export const Heading3 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.h3, style]} {...props} />
);

export const Heading4 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.h4, style]} {...props} />
);

export const Heading5 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.h5, style]} {...props} />
);

export const Heading6 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.h6, style]} {...props} />
);

export const Title = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.title, style]} {...props} />
);

export const Subtitle1 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.subtitle1, style]} {...props} />
);

export const Subtitle2 = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.subtitle2, style]} {...props} />
);

export const Text = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.text, style]} {...props} />
);

export const Paragraph = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.paragraph, style]} {...props} />
);

export const SmallText = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.smallText, style]} {...props} />
);

export const ButtonText = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.buttonText, style]} {...props} />
);

export const Caption = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.caption, style]} {...props} />
);
