/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Color from 'color';

// import components
import {Caption, Subtitle1} from '../../components/text/CustomText';
import CreditCard from '../../components/creditcard/CreditCard';
import HeaderIconButton from '../../components/navigation/HeaderIconButton';
import LinkButtn from '../../components/buttons/LinkButton';
import PaymentPicker from '../../components/pickers/PaymentPicker';

// import colors
import Colors from '../../theme/colors';

// PaymentMethodC Config
const IOS = Platform.OS === 'ios';
const saveIcon = IOS ? 'ios-checkmark' : 'md-checkmark';

// PaymentMethodC Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultPaymentContainer: {
    marginTop: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: Color(Colors.primaryColor).alpha(0.1),
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  boldText: {
    fontWeight: '700',
    color: Colors.black,
  },
  method: {
    paddingTop: 4,
  },
  newPaymentContainer: {
    marginTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 24,
    backgroundColor: '#ededed',
  },
  paymentMethodsList: {
    paddingTop: 16,
    paddingHorizontal: 10,
    paddingBottom: 24,
  },
});

// PaymentMethodC
export default class PaymentMethodC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethods: [
        {
          iconName: 'credit-card',
          title: 'Credit Card',
          numberOfItems: 2,
        },
        {
          iconName: 'paypal',
          title: 'PayPal',
        },
        {
          iconName: 'google-wallet',
          title: 'Google Wallet',
        },
        {
          iconName: 'google',
          title: 'Google Pay',
          numberOfItems: 1,
        },
        {
          iconName: 'apple',
          title: 'Apple Pay',
        },
        {
          iconName: 'cc-stripe',
          title: 'Stripe',
        },
        {
          iconName: 'money',
          title: 'Cash on Delivery',
        },
        {
          iconName: 'bank',
          title: 'Bank Account',
        },
      ],
    };
  }

  // react navigatin header options
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <HeaderIconButton
        onPress={() => navigation.goBack()}
        name={saveIcon}
        color={Colors.onPrimaryColor}
      />
    ),
  });

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  keyExtractor = (item, index) => index.toString();

  renderPaymentMethodItem = ({item, index}) => (
    <PaymentPicker
      iconName={item.iconName}
      title={item.title}
      numberOfItems={item.numberOfItems}
    />
  );

  render() {
    const {paymentMethods} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <ScrollView>
          <View style={styles.defaultPaymentContainer}>
            <View style={styles.sectionTitleContainer}>
              <View>
                <Caption style={styles.boldText}>
                  DEFAULT PAYMENT METHOD
                </Caption>
                <Subtitle1 style={styles.method}>Credit Card</Subtitle1>
              </View>

              <LinkButtn title="Change" />
            </View>

            <CreditCard
              brand="visa"
              cardHolder="Kristin Evans"
              expiry="09 / 21"
              last4Digits="3456"
              colors={['#784BA0', '#2B86C5']}
            />
          </View>

          <View style={styles.newPaymentContainer}>
            <View style={styles.sectionTitleContainer}>
              <Caption style={styles.boldText}>ADD NEW PAYMENT METHOD</Caption>
            </View>

            <FlatList
              data={paymentMethods}
              horizontal
              showsHorizontalScrollIndicator={false}
              alwaysBounceHorizontal={false}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderPaymentMethodItem}
              contentContainerStyle={styles.paymentMethodsList}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
