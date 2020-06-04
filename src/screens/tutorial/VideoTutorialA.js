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
  notice: {
    paddingBottom: 24,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    fontStyle:'italic',
    color: '#FF0000',
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




            <Text
              style={
                styles.textBlock
              }>{`The video below shows the exact procedures to use our APP for urine testing. Please follow the video step by step. If you want to see the instruction in another format, you can also check the picture & paragraph tutorial in the same section.`}</Text>

              <Video
                source={require('../../assets/pee.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                useNativeControls
                isLooping={false}
                style={{ width: '100%', height: 300, alignItems: 'center',}}
              />

              <Text
                style={
                  styles.notice
                }>{`\nBefore click the camera icon in testing page to start the testing, please select the urine strip type first.`}</Text>



          </View>
        </ScrollView>
          <View style={styles.bottomButtonContainer}>
            <Button onPress={this.navigateTo('PictureTutorial')} title={'Read the Picture Tutorial'.toUpperCase()} />

          </View>



      </SafeAreaView>
    );
  }
}
