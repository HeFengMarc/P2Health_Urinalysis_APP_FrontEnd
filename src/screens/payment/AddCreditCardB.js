/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  Animated,
  I18nManager,
  Keyboard,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from 'color';
import {FontAwesome as FAIcon} from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import components
import Button from '../../components/buttons/Button';
import {Caption, Heading6, Subtitle2} from '../../components/text/CustomText';
import GradientContainer from '../../components/gradientcontainer/GradientContainer';
import UnderlineTextInput from '../../components/textinputs/UnderlineTextInput';

// import colors, layout
import Colors from '../../theme/colors';
import Layout from '../../theme/layout';

// AddCreditCardB Config
const isRTL = I18nManager.isRTL;
const INPUT_FOCUSED_BORDER_COLOR = '#000';

// AddCreditCardB Styles
const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    flex: 1,
    ...Platform.select({
      android: {
        minHeight: Layout.SCREEN_HEIGHT - 3 * 56,
      },
    }),
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Layout.SCREEN_WIDTH,
    height: 228,
  },
  creditCard: {
    width: Layout.SCREEN_WIDTH - 32,
    height: 196,
    backfaceVisibility: 'hidden',
  },
  creditCardContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardBrand: {
    height: 38,
  },
  cardNumberContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxWidth: 290,
  },
  digitsGroup: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  digit: {
    width: 13,
    color: Colors.white,
    textAlign: 'center',
  },
  lowOpacity: {
    opacity: 0.4,
  },
  caption: {
    marginRight: 38,
    color: Color(Colors.white).alpha(0.76),
    textAlign: 'left',
  },
  whiteText: {
    color: Colors.white,
  },
  cardHolder: {
    flex: 1,
    marginRight: 12,
    height: 44,
  },
  cardHolderName: {
    textAlign: 'left',
  },
  expiryDate: {
    flexDirection: 'row',
  },
  expiry: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
  },
  creditCardBack: {
    position: 'absolute',
  },
  creditCardBackContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  magneticStripe: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.black,
  },
  cvcRow: {
    flexDirection: 'row',
    justifyContent: isRTL ? 'flex-start' : 'flex-end',
    marginTop: 24,
    paddingHorizontal: 28,
    width: '100%',
    height: 40,
  },
  cvcContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 36,
    backgroundColor: Colors.white,
  },
  cvc: {
    textAlign: 'center',
  },
  form: {
    paddingTop: 8,
    paddingBottom: 24,
  },
  horizontalForm: {
    paddingLeft: 24,
  },
  overline: {
    color: Color(Colors.secondaryText).alpha(0.6),
    textAlign: 'left',
  },
  inputWrapper: {
    marginRight: 24,
    width: Layout.SCREEN_WIDTH / 1.7,
  },
  smallInputWrapper: {
    marginRight: 24,
    width: Layout.SCREEN_WIDTH / 4,
  },
  inputContainerStyle: {
    marginTop: 0,
    marginBottom: 16,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  flipButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    width: 48,
    height: 48,
    backgroundColor: 'rgba(35, 47, 52, 0.12)',
  },
  button: {width: '82%'},
});

// AddCreditCardB
export default class AddCreditCardB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frontCardVisible: true,
      backspacePress: false,
      cardNumber: '',
      cardNumberFocused: false,
      cardHolder: 'Full Name',
      cardHolderFocused: false,
      expiry: '',
      expiryFocused: false,
      cvc: '',
      cvcFocused: false,
    };

    this.animatedValue = new Animated.Value(0);
    this.value = 0;

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }

  componentDidMount = () => {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  };

  // avoid memory leak
  componentWillUnmount = () => {
    this.keyboardDidHideListener.remove();
  };

  keyboardDidHide = () => {
    this.setState({
      cardNumberFocused: false,
      cardHolderFocused: false,
      expiryFocused: false,
      cvcFocused: false,
    });
  };

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  flipCreditCard = () => {
    const {frontCardVisible} = this.state;

    if (frontCardVisible) {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    }

    this.setState({
      frontCardVisible: !frontCardVisible,
    });
  };

  onKeyPress = ({nativeEvent}) => {
    if (nativeEvent.key === 'Backspace') {
      this.setState({
        backspacePress: true,
      });
    }
  };

  // TODO: Find a more elegant solution, maybe with template string
  changeCardNumber = (text) => {
    const {backspacePress} = this.state;
    let {cardNumber} = this.state;

    let char;
    const lastCharIndex = text.length - 1;

    // type logic
    if (lastCharIndex > -1) {
      char = text.charAt(lastCharIndex);

      if (char.match(/^[0-9]$/)) {
        if (
          lastCharIndex === 4 ||
          lastCharIndex === 9 ||
          lastCharIndex === 14
        ) {
          cardNumber = cardNumber + ' ' + char;
        } else {
          cardNumber = cardNumber + char;
        }

        if (lastCharIndex === 3) {
          cardNumber = cardNumber + ' ';
        } else if (lastCharIndex === 8) {
          cardNumber = cardNumber + ' ';
        } else if (lastCharIndex === 13) {
          cardNumber = cardNumber + ' ';
        }

        this.setState({
          cardNumber,
          backspacePress: false,
        });
      }
    }

    // delete logic
    if (backspacePress) {
      this.setState({
        cardNumber: text,
        backspacePress: false,
      });
    }
  };

  changeCardHolder = (text) => {
    if (text === '') {
      this.setState({
        cardHolder: 'Full Name',
      });
    } else {
      this.setState({
        cardHolder: text,
      });
    }
  };

  // TODO: Find a more elegant solution, maybe with template string
  changeExpiry = (text) => {
    const {backspacePress} = this.state;
    let {expiry} = this.state;

    let char;
    const lastCharIndex = text.length - 1;

    // type logic
    if (lastCharIndex > -1) {
      char = text.charAt(lastCharIndex);

      if (char.match(/^[0-9]$/)) {
        if (lastCharIndex === 2) {
          expiry = expiry + ' / ' + char;
        } else if (lastCharIndex === 3) {
          expiry = expiry + '/ ' + char;
        } else if (lastCharIndex === 4) {
          expiry = expiry + ' ' + char;
        } else {
          expiry = expiry + char;
        }

        this.setState({
          expiry,
        });
      }
    }

    // delete logic
    if (backspacePress) {
      this.setState({
        expiry: text,
        backspacePress: false,
      });
    }
  };

  changeCVC = (text) => {
    this.setState({
      cvc: text,
    });
  };

  onFocus = (key) => () => {
    const {frontCardVisible} = this.state;
    let focusedInputs = {
      cardNumberFocused: false,
      cardHolderFocused: false,
      expiryFocused: false,
      cvcFocused: false,
    };
    focusedInputs[key] = true;

    if (key === 'cvcFocused' && frontCardVisible) {
      this.setState(
        {
          frontCardVisible: false,
        },
        this.flipCreditCard(),
      );
    } else if (key != 'cvcFocused' && !frontCardVisible) {
      this.flipCreditCard();
    }

    this.setState({
      ...focusedInputs,
    });
  };

  focusOn = (nextFiled) => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  render() {
    const {
      cardNumber,
      cardNumberFocused,
      cardHolder,
      cardHolderFocused,
      expiry,
      expiryFocused,
      cvc,
      cvcFocused,
    } = this.state;

    const frontAnimatedStyle = {
      transform: [{rotateY: this.frontInterpolate}],
    };
    const backAnimatedStyle = {
      transform: [{rotateY: this.backInterpolate}],
    };

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />

        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.flex1}>
            <View style={styles.cardContainer}>
              <Animated.View style={[styles.creditCard, frontAnimatedStyle]}>
                <GradientContainer
                  colors={['#784BA0', '#2B86C5']}
                  containerStyle={styles.creditCardContent}>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardBrand}>
                      {/* TODO: Add logic to recognize the brand: cc-visa | cc-mastercard | cc-discover | cc-amex */}
                      <FAIcon name={'cc-visa'} size={36} color={Colors.white} />
                    </View>
                  </View>

                  <View style={styles.cardNumberContainer}>
                    <View style={styles.digitsGroup}>
                      {[0, 1, 2, 3].map((i) => (
                        <Heading6
                          key={i}
                          style={[
                            styles.digit,
                            !cardNumber[i] && styles.lowOpacity,
                          ]}>
                          {cardNumber[i] || 'X'}
                        </Heading6>
                      ))}
                    </View>

                    <View style={styles.digitsGroup}>
                      {[5, 6, 7, 8].map((i) => (
                        <Heading6
                          key={i}
                          style={[
                            styles.digit,
                            !cardNumber[i] && styles.lowOpacity,
                          ]}>
                          {cardNumber[i] || 'X'}
                        </Heading6>
                      ))}
                    </View>

                    <View style={styles.digitsGroup}>
                      {[10, 11, 12, 13].map((i) => (
                        <Heading6
                          key={i}
                          style={[
                            styles.digit,
                            !cardNumber[i] && styles.lowOpacity,
                          ]}>
                          {cardNumber[i] || 'X'}
                        </Heading6>
                      ))}
                    </View>

                    <View style={styles.digitsGroup}>
                      {[15, 16, 17, 18].map((i) => (
                        <Heading6
                          key={i}
                          style={[
                            styles.digit,
                            !cardNumber[i] && styles.lowOpacity,
                          ]}>
                          {cardNumber[i] || 'X'}
                        </Heading6>
                      ))}
                    </View>
                  </View>

                  <View style={styles.cardInfo}>
                    <View style={styles.cardHolder}>
                      <Caption style={styles.caption}>Card Holder</Caption>
                      <Heading6
                        style={[
                          styles.whiteText,
                          styles.cardHolderName,
                          cardHolder === 'Full Name' && styles.lowOpacity,
                        ]}
                        numberOfLines={1}>
                        {cardHolder}
                      </Heading6>
                    </View>

                    <View>
                      <Caption style={styles.caption}>Expires</Caption>
                      <View style={styles.expiryDate}>
                        <View style={styles.expiry}>
                          {[0, 1].map((i) => (
                            <Heading6
                              key={i}
                              style={[
                                styles.whiteText,
                                !expiry[i] && styles.lowOpacity,
                              ]}>
                              {expiry[i] || 'M'}
                            </Heading6>
                          ))}

                          <Heading6
                            style={[
                              styles.whiteText,
                              !expiry[2] && styles.lowOpacity,
                            ]}>
                            {` / `}
                          </Heading6>

                          {[5, 6].map((i) => (
                            <Heading6
                              key={i}
                              style={[
                                styles.whiteText,
                                !expiry[i] && styles.lowOpacity,
                              ]}>
                              {expiry[i] || 'Y'}
                            </Heading6>
                          ))}
                        </View>
                      </View>
                    </View>
                  </View>
                </GradientContainer>
              </Animated.View>

              <Animated.View
                style={[
                  styles.creditCard,
                  styles.creditCardBack,
                  backAnimatedStyle,
                ]}>
                <GradientContainer
                  colors={['#2B86C5', '#784BA0']}
                  containerStyle={styles.creditCardBackContent}>
                  <View style={styles.magneticStripe} />

                  <View style={styles.cvcRow}>
                    <View style={styles.cvcContainer}>
                      <Heading6 style={styles.cvc}>{cvc}</Heading6>
                    </View>
                  </View>
                </GradientContainer>
              </Animated.View>
            </View>

            <View style={styles.form}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalForm}>
                <View style={styles.inputWrapper}>
                  <Subtitle2 style={styles.overline}>Card Number</Subtitle2>
                  <UnderlineTextInput
                    onChangeText={this.changeCardNumber}
                    onKeyPress={this.onKeyPress}
                    onFocus={this.onFocus('cardNumberFocused')}
                    inputFocused={cardNumberFocused}
                    onSubmitEditing={this.focusOn(this.cardHolder)}
                    blurOnSubmit={false}
                    keyboardType="numeric"
                    maxLength={19}
                    returnKeyType="next"
                    value={cardNumber}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Subtitle2 style={styles.overline}>
                    Card Holder's Name
                  </Subtitle2>
                  <UnderlineTextInput
                    onRef={(r) => {
                      this.cardHolder = r;
                    }}
                    onChangeText={this.changeCardHolder}
                    onFocus={this.onFocus('cardHolderFocused')}
                    inputFocused={cardHolderFocused}
                    onSubmitEditing={this.focusOn(this.expiry)}
                    blurOnSubmit={false}
                    autoCapitalize="words"
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>

                <View style={styles.smallInputWrapper}>
                  <Subtitle2 style={styles.overline}>Expiry</Subtitle2>
                  <UnderlineTextInput
                    onRef={(r) => {
                      this.expiry = r;
                    }}
                    onChangeText={this.changeExpiry}
                    onKeyPress={this.onKeyPress}
                    onFocus={this.onFocus('expiryFocused')}
                    inputFocused={expiryFocused}
                    onSubmitEditing={this.focusOn(this.cvc)}
                    blurOnSubmit={false}
                    keyboardType="numeric"
                    maxLength={7}
                    returnKeyType="next"
                    value={expiry}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>

                <View style={styles.smallInputWrapper}>
                  <Subtitle2 style={styles.overline}>CVC</Subtitle2>
                  <UnderlineTextInput
                    onRef={(r) => {
                      this.cvc = r;
                    }}
                    onChangeText={this.changeCVC}
                    onFocus={this.onFocus('cvcFocused')}
                    inputFocused={cvcFocused}
                    onSubmitEditing={this.flipCreditCard}
                    keyboardType="numeric"
                    maxLength={3}
                    returnKeyType="done"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={this.flipCreditCard}>
              <View style={styles.flipButton}>
                <FAIcon
                  name={'exchange'}
                  size={22}
                  color={Colors.primaryColor}
                />
              </View>
            </TouchableOpacity>
            <Button
              onPress={this.goBack}
              title="Save Credit Card"
              buttonStyle={styles.button}
              rounded
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
