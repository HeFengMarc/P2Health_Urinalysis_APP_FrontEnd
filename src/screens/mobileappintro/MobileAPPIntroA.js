/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import components
import Button from '../../components/buttons/Button';
import {Caption} from '../../components/text/CustomText';

// import colors
import Colors from '../../theme/colors';

// TermsConditionsA Config
const APP_NAME = 'App Name';

// TermsConditionsA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  caption: {
    paddingBottom: 12,
    textAlign: 'left',
  },
  heading: {
    paddingBottom: 16,
    fontWeight: '700',
    fontSize: 16,
    color: Colors.primaryColor,
    letterSpacing: 0.2,
    textAlign: 'left',
    // writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' // iOS
  },
  textBlock: {
    paddingBottom: 24,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primaryText,
    letterSpacing: 0.4,
    textAlign: 'left',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    backgroundColor: Colors.surface,
  },
  button: {
    width: '48%',
  },
});

// TermsConditionsA
export default class TermsConditionsA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />
        <ScrollView>
          <View style={styles.content}>
            <Caption style={styles.caption}>
              Last update: 18 May, 2020
            </Caption>



            <Text
              style={
                styles.textBlock
              }>{`Urinalysis is often performed as part of a medical examination routine to check various medical conditions, such as urinary tract infections, kidney disease and diabetes. The dry chemical method mainly uses color change of relevant test strips on urine test strips in order to detect the concentration of corresponding chemical components in the urine. Due to its convenience of disposable, cheap, and high-accuracy, urinalysis test strips have increasingly become the most-used urine detection method. `}</Text>


            <Text style={styles.textBlock}>
              {`Since certain chemical reactions are required for converting chemicals into visible indications, each reagent pad changes color in various ways. Exposure process leads to intensity change, hue change, and spots might appear. General urinalysis requires an additional reader or urine analyzer. Yet, most of these instruments are rather expensive and with lower portability to most. In order to facilitate urine analysis without time and location constraints, a reference color chart, that shows the intermediate colors which the test strips may present and their corresponding values, accompanies most of the urinalysis. However, people’s ability to compare colors has proven error prone.`}
            </Text>


            <Text style={styles.textBlock}>
              {`Another method for reading urine test results is to use smartphone cameras to perform image analysis on behalf of the user. Many studies have been conducted on this method, some of which requires additional hardware aids while some don’t. However, smartphones also face a serious problem. The color reading of test strips depends not only solely on the color itself, but also the interference of ambient light and color recognition of different cameras.`}
            </Text>


            <Text style={styles.textBlock}>
              {`Our urine test application algorithm has been tested and proven to remain its high performances under different illumination conditions and different devices, camera models won’t affect the results. With that being said, our ultimate goal is to build a self-health monitoring application based on urinalysis. Our target users would be long-term patients that are required to conduct urine tests routinely.`}
            </Text>

          </View>
        </ScrollView>


      </SafeAreaView>
    );
  }
}
