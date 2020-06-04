/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Color from 'color';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import components
import ActivityIndicatorModal from '../../components/modals/ActivityIndicatorModal';
import Button from '../../components/buttons/Button';
import {Caption, Paragraph} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';
import UnderlineTextInput from '../../components/textinputs/UnderlineTextInput';

// import colors
import Colors from '../../theme/colors';

// EditAddressB Config
const HOME_ICON = 'home-variant-outline';
const OFFICE_ICON = 'briefcase-outline';
const APARTMAN_ICON = 'office-building';
const ICON_COLOR = 'rgb(35, 47, 52)';
const PLACEHOLDER_TEXT_COLOR = 'rgba(0, 0, 0, 0.4)';
const INPUT_TEXT_COLOR = 'rgba(0, 0, 0, 0.87)';
const INPUT_BORDER_COLOR = 'rgba(0, 0, 0, 0.2)';
const INPUT_FOCUSED_BORDER_COLOR = '#000';

// EditAddressB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  instructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 104,
  },
  touchArea: {
    marginHorizontal: 16,
    marginBottom: 6,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(35, 47, 52, 0.12)',
    overflow: 'hidden',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  instruction: {
    marginTop: 32,
    paddingHorizontal: 40,
    fontSize: 14,
    textAlign: 'center',
  },
  form: {
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  inputContainer: {
    margin: 8,
  },
  small: {
    flex: 2,
  },
  large: {
    flex: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  extraSmallButton: {
    width: '48%',
  },
});

// EditAddressB
export default class EditAddressB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addressType: 'home',
      number: '221B',
      numberFocused: false,
      street: 'Baker Street',
      streetFocused: false,
      district: 'North West',
      districtFocused: false,
      zip: 'NW1A',
      zipFocused: false,
      city: 'London',
      cityFocused: false,
      modalVisible: false,
      messageTitle: 'Saving address details',
    };
  }

  componentDidMount = () => {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  };

  // avoid memory leak
  componentWillUnmount = () => {
    clearTimeout(this.timeout);
    this.keyboardDidHideListener.remove();
  };

  keyboardDidHide = () => {
    this.setState({
      numberFocused: false,
      streetFocused: false,
      districtFocused: false,
      zipFocused: false,
      cityFocused: false,
    });
  };

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  setAddressType = (type) => () => {
    this.setState({
      addressType: type,
    });
  };

  onChangeText = (key) => (text) => {
    this.setState({
      [key]: text,
    });
  };

  onFocus = (key) => () => {
    let focusedInputs = {
      numberFocused: false,
      streetFocused: false,
      districtFocused: false,
      zipFocused: false,
      cityFocused: false,
    };
    focusedInputs[key] = true;

    this.setState({
      ...focusedInputs,
    });
  };

  focusOn = (nextFiled) => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  removeAddress = () => {
    Keyboard.dismiss();

    this.setState(
      {
        messageTitle: 'Removing address',
      },
      () => {
        this.setState(
          {
            modalVisible: true,
          },
          () => {
            // for demo purpose after 3s close modal
            this.timeout = setTimeout(() => {
              this.closeModal();
            }, 3000);
          },
        );
      },
    );
  };

  saveAddress = () => {
    Keyboard.dismiss();

    this.setState(
      {
        messageTitle: 'Saving address details',
      },
      () => {
        this.setState(
          {
            modalVisible: true,
          },
          () => {
            // for demo purpose after 3s close modal
            this.timeout = setTimeout(() => {
              this.closeModal();
            }, 3000);
          },
        );
      },
    );
  };

  closeModal = () => {
    // for demo purpose clear timeout if user request close modal before 3s timeout
    clearTimeout(this.timeout);
    this.setState(
      {
        modalVisible: false,
      },
      () => {
        this.goBack();
      },
    );
  };

  render() {
    const {
      addressType,
      number,
      numberFocused,
      street,
      streetFocused,
      district,
      districtFocused,
      zip,
      zipFocused,
      city,
      cityFocused,
      modalVisible,
      messageTitle,
    } = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />

        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.row}>
            <View style={styles.picker}>
              <View
                style={[
                  styles.touchArea,
                  addressType == 'apartment' && {
                    backgroundColor: Colors.primaryColor,
                  },
                ]}>
                <TouchableItem onPress={this.setAddressType('apartment')}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name={APARTMAN_ICON}
                      size={19}
                      color={
                        addressType == 'apartment'
                          ? Colors.onPrimaryColor
                          : ICON_COLOR
                      }
                    />
                  </View>
                </TouchableItem>
              </View>
              <Caption>Apartment</Caption>
            </View>

            <View style={styles.picker}>
              <View
                style={[
                  styles.touchArea,
                  addressType == 'home' && {
                    backgroundColor: Colors.primaryColor,
                  },
                ]}>
                <TouchableItem onPress={this.setAddressType('home')}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name={HOME_ICON}
                      size={19}
                      color={
                        addressType == 'home'
                          ? Colors.onPrimaryColor
                          : ICON_COLOR
                      }
                    />
                  </View>
                </TouchableItem>
              </View>
              <Caption>Home</Caption>
            </View>

            <View style={styles.picker}>
              <View
                style={[
                  styles.touchArea,
                  addressType == 'office' && {
                    backgroundColor: Colors.primaryColor,
                  },
                ]}>
                <TouchableItem onPress={this.setAddressType('office')}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name={OFFICE_ICON}
                      size={19}
                      color={
                        addressType == 'office'
                          ? Colors.onPrimaryColor
                          : ICON_COLOR
                      }
                    />
                  </View>
                </TouchableItem>
              </View>
              <Caption>Office</Caption>
            </View>
          </View>

          <View style={styles.instructionContainer}>
            <Paragraph style={styles.instruction}>
              Edit your delivery address details
            </Paragraph>
          </View>

          <View style={styles.form}>
            <View style={styles.row}>
              <View style={[styles.inputContainer, styles.small]}>
                <UnderlineTextInput
                  onChangeText={this.onChangeText('number')}
                  onFocus={this.onFocus('numberFocused')}
                  inputFocused={numberFocused}
                  onSubmitEditing={this.focusOn(this.street)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  placeholder="Number"
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  value={number}
                  inputTextColor={INPUT_TEXT_COLOR}
                  borderColor={INPUT_BORDER_COLOR}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                />
              </View>

              <View style={[styles.inputContainer, styles.large]}>
                <UnderlineTextInput
                  onRef={(r) => {
                    this.street = r;
                  }}
                  onChangeText={this.onChangeText('street')}
                  onFocus={this.onFocus('streetFocused')}
                  inputFocused={streetFocused}
                  onSubmitEditing={this.focusOn(this.district)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  placeholder="Street name"
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  value={street}
                  inputTextColor={INPUT_TEXT_COLOR}
                  borderColor={INPUT_BORDER_COLOR}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <UnderlineTextInput
                onRef={(r) => {
                  this.district = r;
                }}
                onChangeText={this.onChangeText('district')}
                onFocus={this.onFocus('districtFocused')}
                inputFocused={districtFocused}
                onSubmitEditing={this.focusOn(this.zip)}
                returnKeyType="next"
                blurOnSubmit={false}
                placeholder="District"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                inputTextColor={INPUT_TEXT_COLOR}
                value={district}
                borderColor={INPUT_BORDER_COLOR}
                focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.inputContainer, styles.small]}>
                <UnderlineTextInput
                  onRef={(r) => {
                    this.zip = r;
                  }}
                  onChangeText={this.onChangeText('zip')}
                  onFocus={this.onFocus('zipFocused')}
                  inputFocused={zipFocused}
                  onSubmitEditing={this.focusOn(this.city)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  placeholder="ZIP Code"
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  value={zip}
                  inputTextColor={INPUT_TEXT_COLOR}
                  borderColor={INPUT_BORDER_COLOR}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                />
              </View>

              <View style={[styles.inputContainer, styles.large]}>
                <UnderlineTextInput
                  onRef={(r) => {
                    this.city = r;
                  }}
                  onChangeText={this.onChangeText('city')}
                  onFocus={this.onFocus('cityFocused')}
                  inputFocused={cityFocused}
                  onSubmitEditing={this.saveAddress}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  placeholder="City"
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  value={city}
                  inputTextColor={INPUT_TEXT_COLOR}
                  borderColor={INPUT_BORDER_COLOR}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              onPress={this.removeAddress}
              disabled={false}
              color={Color(Colors.secondaryColor).alpha(0.12).rgb().string()}
              small
              title={'Remove'.toUpperCase()}
              titleColor={Colors.secondaryColor}
              buttonStyle={styles.extraSmallButton}
            />

            <Button
              onPress={this.saveAddress}
              disabled={false}
              small
              title={'Save'.toUpperCase()}
              buttonStyle={styles.extraSmallButton}
            />
          </View>

          <ActivityIndicatorModal
            statusBarColor={Color(Colors.primaryColorDark)
              .darken(0.4)
              .rgb()
              .string()}
            message="Please wait . . ."
            onRequestClose={this.closeModal}
            title={messageTitle}
            visible={modalVisible}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
