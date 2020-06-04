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
          indicator: 'Home Page',
          info: 'After you logging in or signing up, the first page appears on the home page. You can check the product introduction, indicator introduction, tutorial, and the color card information on this page. If you have any concerns about using this APP, please visit the home page to get more information.',
          city: 'Function: Product Introduction; Tutorial; Indicator Introduction; Color Card Information.',
          active: false,
        },
        {
          id: 'address1',
          indicator: 'Testing Page',
          info: 'As one of the main functions, the testing page has an icon that will stay at the center of the bottom bar. You can start testing the urine strip by clicking the camera icon on the top. You can also check your historical record and watch the tutorial again on this page.',
          city: 'Function: Camera; Tutorial; Historical Record.',
          active: false,
        },
        {
          id: 'address1',
          indicator: 'Account Page',
          info: 'Similar to the account page in other APPs, the account page offers the personal information and the type of color strip that you are using.',
          city: 'Function: Personal Information; Choosing Color Card',
          active: false,
        },
        {
          id: 'address1',
          indicator: 'Product Introduction',
          info: 'Introduce the overall concept of the APP. What is the product, and how can it influence your lives. If you have no idea or have some confusion about what we are doing, please check the product introduction page for more information.',
          city: '',
          active: false,
        },
        {
          id: 'address2',
          indicator: 'Tutorial',
          info: 'This section teaches you how to use our APP. There are two subsections, the first one uses a video to demonstrate the progress, and the second one uses pictures and paragraphs to demonstrate. The two subsections are doing the same thing, and you can choose whatever you want that makes you comfortable. In each subsection, we also divided each of them into two groups: The first one introduces the functionality of the APP, and the second one shows the detailed ways to do a urine test with this APP.',
          city: 'Function: Video Tutorial; Picture & Paragraphs Tutorial.',
          active: false,
        },
        {
          id: 'address3',
          indicator: 'Indicator Introduction',
          info: 'The product introduction section will introduce the product in a broad perspective, but it does not include the information about each indicator. If you concern about your health issue and you also have no idea about the meaning of each indicator, you can read this section to learn. We will teach you what each indicator is and what do they represent.',
          city: '',
          active: true,
        },
        {
          id: 'address3',
          indicator: 'Color Card Information',
          info: 'The uniqueness of our product compared to the competitors is that it can read multiple versions of the color charts. However, different color charts have diverse color range, and the meaning of the color range is different. Understanding the principle of all indicators does not mean that you can read or understand your result. Therefore, in this section, we will introduce the color cards and their indicators in diverse subsections. We will teach you in which section does the color range seems right, and vice versa.',
          city: 'Mission 14-Indicator Color Card; JNW Direct UTI Color Card; Mission 10-Indicator Color Chart',
          active: true,
        },
        {
          id: 'address1',
          indicator: 'Historical Record',
          info: 'If you register and log into the account before testing, you can save your record in the historical record section. In this case, you can come back and check your physical condition within a period.',
          city: '',
          active: false,
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
