/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component, Fragment} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';

// import components
import Icon from '../../components/icon/Icon';
import {Caption, Subtitle1, Subtitle2} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';

// DeliveryAddressA Config
const IOS = Platform.OS === 'ios';
const RADIO_OFF_ICON = IOS ? 'ios-radio-button-off' : 'md-radio-button-off';
const RADIO_ON_ICON = IOS ? 'ios-radio-button-on' : 'md-radio-button-on';
const EDIT_ICON = IOS ? 'ios-more' : 'md-more';
const FAB_ICON = IOS ? 'ios-add' : 'md-add';
const HOME_ICON = IOS ? 'ios-home' : 'md-home';
const LOCATION_ICON = IOS ? 'ios-pin' : 'md-pin';

// DeliveryAddressB Styles
const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: Colors.primaryColor},
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
});

// DeliveryAddressB Props
type Props = {
  onPress: () => {},
  onPressEdit: () => {},
  type: string,
  street: string,
  district: string,
  city: string,
  zip: string,
  number: string,
  active: boolean,
};

// DeliveryAddressB Components
const Address = ({
  onPress,
  onPressEdit,
  type,
  street,
  district,
  city,
  zip,
  number,
  active,
}: Props) => (
  <TouchableItem onPress={onPress} useForeground>
    <View style={styles.addressCard}>
      <View style={styles.leftAddresContainer}>
        <View style={styles.radioIconContainer}>
          {active ? (
            <Icon
              name={RADIO_ON_ICON}
              size={21}
              color={Colors.secondaryColor}
            />
          ) : (
            <Icon
              name={RADIO_OFF_ICON}
              size={21}
              color={Colors.secondaryColor}
            />
          )}
        </View>

        <View style={styles.addressInfo}>
          {type !== '' && (
            <Caption style={styles.caption}>
              {`${type.toUpperCase()} ADDRESS`}
            </Caption>
          )}
          <Subtitle1 style={styles.addressText}>
            {`${number} ${street}, ${district}`}
          </Subtitle1>
          <Subtitle2 style={styles.addressText}>{`${city} ${zip}`}</Subtitle2>
        </View>
      </View>

      <View style={{height: 50}}>
        <TouchableItem onPress={onPressEdit} borderless>
          <View style={styles.editIconContainer}>
            <Icon name={EDIT_ICON} size={24} color={Colors.black} />
          </View>
        </TouchableItem>
      </View>
    </View>
  </TouchableItem>
);

// DeliveryAddressB
export default class DeliveryAddressB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [
        {
          id: 'address1',
          type: 'Office',
          street: 'Pennsylvania Avenue',
          district: '',
          city: 'Washington DC',
          zip: '22',
          number: '1600',
          active: false,
        },
        {
          id: 'address2',
          type: 'Home',
          street: 'Baker Street',
          district: '',
          city: 'London',
          zip: 'WC2N 5DU',
          number: '221B',
          active: true,
        },
        {
          id: 'address3',
          type: 'Apartment',
          street: 'King Abdulaziz Road',
          district: 'Al Amal',
          city: 'Riyadh',
          zip: '12643',
          number: '2121',
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
      type={item.type}
      building={item.building}
      street={item.street}
      district={item.district}
      city={item.city}
      zip={item.zip}
      number={item.number}
      active={item.active}
    />
  );

  handleFabPress = () => {
    // alert('FAB Pressed');
  };

  renderFabIcon = () => (
    <Icon name={FAB_ICON} size={24} color={Colors.onAccentColor} />
  );

  render() {
    const {addresses} = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.screenContainer}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
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
                <Icon
                  name={HOME_ICON}
                  size={22}
                  color={Colors.onPrimaryColor}
                />
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
      </Fragment>
    );
  }
}
