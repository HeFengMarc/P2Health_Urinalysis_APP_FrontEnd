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
  Image,
} from 'react-native';
import { Video } from 'expo-av';

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
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 16,
    paddingHorizontal: 24,
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

  navigateTo = screen => () => {
    const {navigation} = this.props;
    navigation.navigate(screen, {username: this.state.userName});
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
              Latest update: May 20, 2020
            </Caption>



            <Text
              style={
                styles.textBlock
              }>{`The following pictures and text show the testing process and other main functions of this product. If you have any questions about the experiment process, please send email to fenghe1996@gmail for more information.`}</Text>

            <Text style={styles.heading}>1. Collect the urine</Text>
            <Text
              style={
                styles.textBlock
              }>{`Collect the urine into a test tube for later use. If you do not have a test tube, you can use another container which is dry and clean.`}</Text>
            <Image
                source={require('../../assets/img/tutorial_001.png')}
                style={{ width: '100%', height: 300, alignItems: 'center',}}
            />
            <Text
              style={
                styles.textBlock
              }>{``}</Text>

            <Text style={styles.heading}>2. Dip the strip in the urine</Text>
            <Text
              style={
                styles.textBlock
              }>{`Take out a strip and soak it in urine for 2-3 seconds. Make sure that each indicator cell is exposed to urine. Remove the strip after soaking and place it on a clean paper towel to drain excess urine from both sides and the back. Do not make direct contact between the front of the strip and the paper towel.`}</Text>
            <Image
                source={require('../../assets/img/tutorial_002.png')}
                style={{ width: '100%', height: 300, alignItems: 'center',}}
            />
            <Text
              style={
                styles.textBlock
              }>{``}</Text>

              <Text style={styles.heading}>3. Let it sit for a minute</Text>
              <Text
                style={
                  styles.textBlock
                }>{`Place the test strip on a paper towel and let it stand for one minute to make sure the reaction is complete.`}</Text>
              <Image
                  source={require('../../assets/img/tutorial_003.png')}
                  style={{ width: '100%', height: 300, alignItems: 'center',}}
              />
              <Text
                style={
                  styles.textBlock
                }>{``}</Text>

                <Text style={styles.heading}>4. Place the strip on the designated area of the color card</Text>
                <Text
                  style={
                    styles.textBlock
                  }>{`Place the strip on the left side of the color card as the picture shown below. Make sure that each indicator cell on the strip is aligned with the indicator cells on the color card. Please cover the text part of the color card with the strip. The first picture below is the color card without the strip, and the second picture is the colorimetric card with the strip. `}</Text>
                <Image
                    source={require('../../assets/img/tutorial_004.png')}
                    style={{ width: '100%', height: 300, alignItems: 'center',}}
                />
                <Image
                    source={require('../../assets/img/tutorial_005.png')}
                    style={{ width: '100%', height: 300, alignItems: 'center',}}
                />
                <Text
                  style={
                    styles.textBlock
                  }>{``}</Text>

                  <Text style={styles.heading}>5. Enter into the testing mode</Text>
                  <Text
                    style={
                      styles.textBlock
                    }>{`Open the APP program and click the testing page. Select the camera button on the top of the page to open the camera function.`}</Text>
                  <Image
                      source={require('../../assets/img/tutorial_006.png')}
                      style={{ width: '100%', height: 300, alignItems: 'center',}}
                  />
                  <Text
                    style={
                      styles.textBlock
                    }>{``}</Text>

                    <Text style={styles.heading}>6. Begin to take a picture</Text>
                    <Text
                      style={
                        styles.textBlock
                      }>{`Place the test strip and color card from step 4 in the center of the screen and click the small camera button below to take a photo. Please stand for 2-3 seconds during the photo shooting. The test result will be automatically generated after 6-7 seconds.`}</Text>
                    <Image
                        source={require('../../assets/img/tutorial_007.png')}
                        style={{ width: '100%', height: 300, alignItems: 'center',}}
                    />
                    <Text
                      style={
                        styles.textBlock
                      }>{``}</Text>

                      <Text style={styles.heading}>7. Read the result</Text>
                      <Text
                        style={
                          styles.textBlock
                        }>{`After the application generate the result, the green border means the indicator value is normal, and the red border means the indicator value is abnormal. You can get more information about each indicator by clicking on it. You can also see the ideal range of each indicator through the color card information function in homepage.`}</Text>


                        <Text style={styles.heading}>8. Search for the historical record</Text>
                        <Text
                          style={
                            styles.textBlock
                        }>{`Click the Back-to-Home button on the top to return to the testing page. Click the history record at the bottom of the page and select the date you want to search the historical result on that specific date.`}</Text>

                        <Text style={styles.heading}>9. Get more information</Text>
                        <Text
                          style={
                            styles.textBlock
                        }>{`If you have any questions about the application, please check through the Indicator Introduction function and Color Chart Information function for more information.`}</Text>





          </View>
        </ScrollView>




      </SafeAreaView>
    );
  }
}
