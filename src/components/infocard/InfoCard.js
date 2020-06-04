/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Fragment} from 'react';
import {I18nManager, StyleSheet, View} from 'react-native';
import Color from 'color';
import {FontAwesome as FAIcon} from '@expo/vector-icons';

// import components
import GradientContainer from '../gradientcontainer/GradientContainer';
import {Caption, Heading6} from '../text/CustomText';

// import colors
import Colors from '../../theme/colors';

// CreditCard Config
const isRTL = I18nManager.isRTL;

// CreditCard Styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    height: 228,
  },
  creditCard: {
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
  expiry: {
    textAlign: 'left',
  },
  lowOpacity: {
    opacity: 0.4,
  },
});

// CreditCard Props
type Props = {
  brand: 'visa' | 'mastercard' | 'discover' | 'amex',
  colors: Array<string>,
  cardHolder: string,
  expiry: string,
  last4Digits: number,
};

// CreditCard
const CreditCard = ({
  brand,
  colors,
  cardHolder,
  expiry,
  last4Digits,
}: Props) => (
  <View style={styles.container}>
    <GradientContainer colors={colors} containerStyle={styles.creditCard}>


      <View style={styles.cardNumberContainer}>
        {last4Digits && (
          <Fragment>




          </Fragment>
        )}
      </View>

      <View style={styles.cardInfo}>
        <View style={styles.cardHolder}>
          <Heading6
            style={[styles.cardHolderName, styles.whiteText]}
            numberOfLines={10}>
            {cardHolder}
          </Heading6>
        </View>


      </View>
    </GradientContainer>
  </View>
);

export default CreditCard;
