/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import {ButtonText} from '../text/CustomText';
import Icon from '../icon/Icon';
import TouchableItem from '../TouchableItem';

// import colors, layout
import Colors from '../../theme/colors';
import Layout from '../../theme/layout';

// ActionProductCard Config
const IOS = Platform.OS === 'ios';
const MINUS_ICON = IOS ? 'ios-remove' : 'md-remove';
const PLUS_ICON = IOS ? 'ios-add' : 'md-add';
const imgHolder = require('../../assets/img/imgholder.png');

// ActionProductCard Styles
const styles = StyleSheet.create({
  container: {
    margin: 4,
    width: (Layout.SCREEN_WIDTH - 5 * 8) / 2,
  },
  borderContainer: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: Colors.surface,
    overflow: 'hidden',
  },
  productImg: {
    width: '100%',
    height: 132,
    resizeMode: 'cover',
  },
  titleContainer: {
    paddingTop: 12,
    paddingHorizontal: 12,
    height: 52,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.primaryText,
    letterSpacing: 0.15,
    textAlign: 'left',
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  oldPriceContainer: {marginLeft: 5, paddingTop: 2},
  oldPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8e8e8e',
  },
  hr: {
    position: 'absolute',
    top: 13,
    width: '100%',
    height: 1,
    backgroundColor: '#8e8e8e',
  },
  price: {
    paddingTop: 4,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.primaryColor,
  },
  actionContainer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: Colors.secondaryColor,
    overflow: 'hidden',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 42,
    overflow: 'hidden',
  },
  actionTitle: {
    color: Colors.onSecondaryColor,
    textAlign: 'center',
  },
  quantity: {
    top: -1,
    paddingHorizontal: 20,
    fontSize: 18,
    color: Colors.onSecondaryColor,
    textAlign: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    width: 25,
    height: 25,
  },
  newLabelContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: Colors.primaryColor,
  },
  discountLabelContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: Colors.tertiaryColor,
  },
  label: {
    fontSize: 11,
    color: Colors.onPrimaryColor,
  },
});

// ActionProductCard State
type State = {
  /**
   * Product in cart quantity
   */
  quantity: number,
};

// ActionProductCard Props
type Props = {
  activeOpacity: number,
  /**
   * Product image uri
   */
  imageUri: string,
  /**
   * Product name
   */
  title: string,

  /**
   * Product price
   */
  price: number,

  /**
   * Product discount percentage
   */
  discountPercentage: number,

  /**
   * Handler to be called when the user taps on product card
   */
  onPress: () => void,
  label: 'new',
};

// ActionProductCard
export default class ActionProductCard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  onPressAdd = () => {
    const {quantity} = this.state;
    const newQuantity = quantity + 1;

    this.setState({
      quantity: newQuantity,
    });
  };

  onPressRemove = () => {
    const {quantity} = this.state;
    const newQuantity = quantity - 1;

    this.setState({
      quantity: newQuantity,
    });
  };

  renderLabel = (label, discountPercentage) => {
    if (label === 'new') {
      return (
        <View style={styles.newLabelContainer}>
          <Text style={styles.label}>NEW</Text>
        </View>
      );
    }
    if (discountPercentage) {
      return (
        <View style={styles.discountLabelContainer}>
          <Text style={styles.label}>{`- ${discountPercentage}%`}</Text>
        </View>
      );
    }

    return <View />;
  };

  render() {
    const {
      activeOpacity,
      onPress,
      imageUri,
      title,
      price = 0,
      discountPercentage,
      label,
    } = this.props;

    const {quantity} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.borderContainer}>
          <TouchableItem
            activeOpacity={activeOpacity}
            onPress={onPress}
            borderless
            useForeground>
            <View>
              <Image
                defaultSource={imgHolder}
                source={getImgSource(imageUri)}
                style={styles.productImg}
              />

              <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.title}>
                  {title}
                </Text>
              </View>

              {discountPercentage ? (
                <View style={styles.productFooter}>
                  <Text style={styles.price}>
                    {`$ ${(((100 - discountPercentage) / 100) * price).toFixed(
                      2,
                    )}`}
                  </Text>
                  <View style={styles.oldPriceContainer}>
                    <Text style={styles.oldPrice}>
                      {`$ ${price.toFixed(2)}`}
                    </Text>
                    <View style={styles.hr} />
                  </View>
                </View>
              ) : (
                <View style={styles.productFooter}>
                  <Text style={styles.price}>{`$ ${price.toFixed(2)}`}</Text>
                </View>
              )}

              {this.renderLabel(label, discountPercentage)}
            </View>
          </TouchableItem>
        </View>

        <View style={styles.actionContainer}>
          {quantity === 0 ? (
            <TouchableItem
              activeOpacity={activeOpacity}
              onPress={this.onPressAdd}
              // borderless
            >
              <View style={styles.action}>
                <ButtonText style={styles.actionTitle}>
                  {'Order'.toUpperCase()}
                </ButtonText>
              </View>
            </TouchableItem>
          ) : (
            <View style={styles.action}>
              <TouchableItem onPress={this.onPressRemove} borderless>
                <View style={styles.iconContainer}>
                  <Icon
                    name={MINUS_ICON}
                    size={20}
                    color={Colors.onPrimaryColor}
                  />
                </View>
              </TouchableItem>

              <Text style={styles.quantity}>{quantity}</Text>

              <TouchableItem onPress={this.onPressAdd} borderless>
                <View style={styles.iconContainer}>
                  <Icon
                    name={PLUS_ICON}
                    size={20}
                    color={Colors.onPrimaryColor}
                  />
                </View>
              </TouchableItem>
            </View>
          )}
        </View>
      </View>
    );
  }
}
