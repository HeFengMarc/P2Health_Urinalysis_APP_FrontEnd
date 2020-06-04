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
  Alert,
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
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
});

// TermsConditionsA
export default class TermsConditionsA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      striptype: this.props.route.params.striptype,
    };
    console.log(this.state.striptype)
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  navigateTo = screen => () => {
    const {navigation} = this.props;
    navigation.navigate(screen, {user:this.props.route.params.user, striptype: this.props.route.params.striptype});
  };

  render() {
    // const sourcePath = '../../assets/img/demo1.jpg';
    if (this.state.striptype == 3) {
      var demoimage = require('../../assets/img/demo3.jpg');
    } else if (this.state.striptype == 2) {
      var demoimage = require('../../assets/img/demo2.jpg');
    } else {
      var demoimage = require('../../assets/img/demo1.jpg');
    };

    if (this.state.striptype == 1) {
      var nextstep = this.navigateTo('CameraPage');
    } else if (this.state.striptype == 2) {
      var nextstep = this.navigateTo('CameraPage');
    } else if (this.state.striptype == 3) {
      var nextstep = this.navigateTo('CameraPage');
    } else {
      var nextstep = Alert.alert('Please go back and select a strip.')
    }

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
              }>{`Please put the strip on the color card as the picture shows below. Please make sure the right hand side of the strip is align with the black line. Please take the picture from the top to increase the testing accuracy.`}</Text>
            <Image

                source={demoimage}
                style={{ width: '100%', height: 400, alignItems: 'center',}}
            />
            <Text
              style={
                styles.textBlock
              }>{``}</Text>



          </View>
        </ScrollView>
        <View style={styles.bottomButtonContainer}>
          <Button onPress={nextstep} title={'Start Testing'.toUpperCase()} />
        </View>




      </SafeAreaView>
    );
  }
}
