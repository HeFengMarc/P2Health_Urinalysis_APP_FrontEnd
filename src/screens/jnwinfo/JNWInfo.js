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
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Color from 'color';

// import components
import Icon from '../../components/icon/Icon';
import {Caption, Subtitle1, Subtitle2} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';
import CreditCard from '../../components/creditcard/CreditCard';

// DeliveryAddressA Config
const IOS = Platform.OS === 'ios';
const RADIO_OFF_ICON = IOS ? 'ios-radio-button-off' : 'md-radio-button-off';
const RADIO_ON_ICON = IOS ? 'ios-radio-button-on' : 'md-radio-button-on';
const EDIT_ICON = IOS ? 'ios-more' : 'md-more';
const FAB_ICON = IOS ? 'ios-add' : 'md-add';
const HOME_ICON = IOS ? 'ios-home' : 'md-home';
const LOCATION_ICON = IOS ? 'ios-pin' : 'md-pin';

// DeliveryAddressA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  addressList: {
    paddingVertical: 8,
  },
  addressCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: Colors.surface,
  },
  leftAddresContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  addressInfo: {
    flex: 1,
    marginRight: 6,
  },
  caption: {
    paddingVertical: 2,
    color: Colors.accentColor,
    textAlign: 'left',
  },
  radioIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    width: 24,
    height: 24,
  },
  addressText: {
    paddingVertical: 4,
    textAlign: 'left',
  },
  editIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  defaultPaymentContainer: {
    marginTop: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: Color(Colors.primaryColor).alpha(0.1),
  },
});

// DeliveryAddressA Props
type Props = {
  onPress: () => {},
  onPressEdit: () => {},
  indicator: string,
  info: string,
  district: string,
  city: string,
  zip: string,
  number: string,
  active: boolean,
};

// DeliveryAddressA Components
const Address = ({
  onPress,
  onPressEdit,
  indicator,
  info,
  district,
  city,
  zip,
  number,
  active,
}: Props) => (
  <TouchableItem onPress={onPress} useForeground>
    <View style={styles.addressCard}>
      <View style={styles.leftAddresContainer}>


        <View style={styles.addressInfo}>
          {indicator !== '' && (
            <Caption style={styles.caption}>
              {`${indicator.toUpperCase()}`}
            </Caption>
          )}
          <Subtitle1 style={styles.addressText}>
            {`${info}`}
          </Subtitle1>
          <Subtitle2 style={styles.addressText}>{`${city}`}</Subtitle2>

        </View>
      </View>


    </View>
  </TouchableItem>
);

// DeliveryAddressA
export default class DeliveryAddressA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [
        {
          id: 'address1',
          indicator: 'Leukocyte',
          info: 'The detection of white blood cells in the urine suggests a possible UTI.',
          city: 'Note: This parameter is commonly used to screen for possible Urinary Tract Infection (UTI). \n\nExpected result : Negative\n\n* Any degree of brown is positive.',
          active: false,
        },
        {
          id: 'address2',
          indicator: 'Nitrite',
          info: 'Screening for possible asymptomatic infections caused by nitrate-reducing bacteria – Suggesting a possible UTI. ',
          city: 'Note: This parameter is commonly used to screen for possible Urinary Tract Infection (UTI). \n\nExpected result : Negative\n\n* Any degree of pink is positive.',
          active: false,
        },
        {
          id: 'address3',
          indicator: 'PH Level',
          info: 'Measures the acidity in your urine which may be a sign of kidney stones. Your pH varies during the day going from more acid in the am to more alkaline in the pm.',
          city: 'Expected result : Normal range 5.0 - 8.5 \n\n* Urine under 5.0 is acidic, and urine higher than 8.0 is alkaline, or basic.',
          active: true,
        },


      ],
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

  setDeliveryAddress = (item) => () => {
    const {addresses} = this.state;
    const index = addresses.indexOf(item);
    const activeIndex = addresses.findIndex((e) => e.active === true);

    if (activeIndex !== index) {
      addresses[activeIndex].active = false;
      addresses[index].active = true;

      this.setState({
        addresses: [...addresses],
      });
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderAddressItem = ({item}) => (
    <Address
      key={item.id}
      onPress={this.setDeliveryAddress(item)}
      onPressEdit={this.navigateTo('EditAddress')}
      indicator={item.indicator}
      building={item.building}
      info={item.info}
      zip={item.zip}
      city={item.city}
      active={item.active}
    />
  );

  handleFabPress = () => {
    // alert('FAB Pressed');
  };

  renderFAB_ICON = () => (
    <Icon name={FAB_ICON} size={24} color={Colors.onAccentColor} />
  );

  render() {
    const {addresses} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
      <View style={styles.defaultPaymentContainer}>


          <CreditCard

            cardHolder="Mission Urine Strip"
            colors={['#A9DFBF', '#1E8449']}
          />
        </View>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.container}>
          <FlatList
            data={addresses}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderAddressItem}
            contentContainerStyle={styles.addressList}
          />

          <ActionButton
            buttonColor={Colors.accentColor}
            onPress={this.handleFabPress}
            offsetX={20}
            offsetY={20}
            renderIcon={this.renderFAB_ICON}
            bgColor="rgba(255, 255, 255, 0.56)"
            hideShadow
            fixNativeFeedbackRadius>
            <ActionButton.Item
              buttonColor={Colors.primaryColor}
              textContainerStyle={{
                backgroundColor: 'rgba(35, 47, 52, 0.1)',
              }}
              title="Add new address"
              onPress={this.navigateTo('AddAddress')}>
              <Icon name={HOME_ICON} size={22} color={Colors.onPrimaryColor} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor={Colors.tertiaryColor}
              textContainerStyle={{
                backgroundColor: 'rgba(35, 47, 52, 0.1)',
              }}
              title="Use current location"
              onPress={() => {}}>
              <Icon
                name={LOCATION_ICON}
                size={22}
                color={Colors.onTertiaryColor}
              />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </SafeAreaView>
    );
  }
}
