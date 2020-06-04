/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component, Fragment} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Color from 'color';

// import components
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import Button from '../../components/buttons/Button';
import CreditCard from '../../components/creditcard/CreditCard';
import Icon from '../../components/icon/Icon';
import {Caption, Subtitle1} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';

// PaymentMethodB Config
const IOS = Platform.OS === 'ios';
const MORE_ICON = IOS ? 'ios-more' : 'md-more';
const EDIT_ICON = IOS ? 'ios-create' : 'md-create';
const SAVE_ICON = IOS ? 'ios-save' : 'md-save';
const REMOVE_ICON = IOS ? 'ios-remove-circle' : 'md-remove-circle';
const BOTTOM_SHEET_PB = IOS ? 16 : 0;

// PaymentMethodB Styles
const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: Colors.primaryColor},
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    paddingBottom: 8,
  },
  cardContainer: {
    width: '100%',
    height: 232,
  },
  negativeMargin: {
    marginTop: -16,
  },
  editButtonContainer: {
    position: 'absolute',
    top: 32,
    right: 32,
    borderRadius: 16,
    backgroundColor: Colors.white,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  whiteText: {
    color: Colors.white,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  bottomSheetItem: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    height: 64,
  },
  bottomSheetCaption: {paddingVertical: 2},
  bottomSheetAction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 56,
  },
  bottomSheetIconContainer: {
    marginRight: IOS ? 24 : 32,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// PaymentMethodB
export default class PaymentMethodB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
    };
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  openBottomSheet = (cardNumber) => () => {
    this.setState(
      {
        cardNumber,
      },
      this.bottomSheet.open(), // callback
    );
  };

  render() {
    const {cardNumber} = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.screenContainer}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.cardContainer}>
              <CreditCard
                colors={['#784BA0', '#2B86C5']}
                brand="visa"
                last4Digits="3456"
                cardHolder="Kristin Evans"
                expiry="09 / 21"
              />
              <View style={styles.editButtonContainer}>
                <TouchableItem
                  onPress={this.openBottomSheet('3456')}
                  borderless>
                  <View style={styles.editButton}>
                    <Icon name={MORE_ICON} size={22} color={Colors.black} />
                  </View>
                </TouchableItem>
              </View>
            </View>

            <View style={[styles.cardContainer, styles.negativeMargin]}>
              <CreditCard
                colors={['#0D324D', '#7F5A83']}
                brand="discover"
                last4Digits="0123"
                cardHolder="Kristin Evans"
                expiry="08 / 20"
              />
              <View style={styles.editButtonContainer}>
                <TouchableItem
                  onPress={this.openBottomSheet('0123')}
                  borderless>
                  <View style={styles.editButton}>
                    <Icon name={MORE_ICON} size={22} color={Colors.black} />
                  </View>
                </TouchableItem>
              </View>
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button
              onPress={this.navigateTo('AddCreditCard')}
              title="Add Credit Card"
              rounded
            />
          </View>

          <BottomSheet
            ref={(ref) => {
              this.bottomSheet = ref;
            }}
            // FIX: closeOnSwipeDown need height to work properly
            height={232 + BOTTOM_SHEET_PB} // height of BottomSheet = 64 + 3 * 56 + 16
            rounded
            statusBarColor={Color(Colors.primaryColorDark)
              .darken(0.4)
              .rgb()
              .string()}>
            <View style={styles.bottomSheetItem}>
              <Caption style={styles.bottomSheetCaption}>
                {'Payment Method'.toUpperCase()}
              </Caption>
              <Subtitle1>xxxx xxxx xxxx {cardNumber}</Subtitle1>
            </View>

            <TouchableItem>
              <View style={styles.bottomSheetAction}>
                <View style={styles.bottomSheetIconContainer}>
                  <Icon name={EDIT_ICON} size={22} color={Colors.accentColor} />
                </View>
                <Subtitle1>Edit card details</Subtitle1>
              </View>
            </TouchableItem>

            <TouchableItem>
              <View style={styles.bottomSheetAction}>
                <View style={styles.bottomSheetIconContainer}>
                  <Icon name={SAVE_ICON} size={22} color={Colors.accentColor} />
                </View>
                <Subtitle1>Save for checkouts</Subtitle1>
              </View>
            </TouchableItem>

            <TouchableItem>
              <View style={styles.bottomSheetAction}>
                <View style={styles.bottomSheetIconContainer}>
                  <Icon
                    name={REMOVE_ICON}
                    size={22}
                    color={Colors.accentColor}
                  />
                </View>
                <Subtitle1>Remove card</Subtitle1>
              </View>
            </TouchableItem>
          </BottomSheet>
        </SafeAreaView>
      </Fragment>
    );
  }
}
