/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  I18nManager,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from 'color';
import {SwipeRow} from 'react-native-swipe-list-view';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import Icon from '../icon/Icon';
import {Subtitle1, Subtitle2} from '../text/CustomText';
import TouchableItem from '../TouchableItem';

// import colors, layout
import Colors from '../../theme/colors';
import Layout from '../../theme/layout';

// ProductCard Config
const isRTL = I18nManager.isRTL;
const IOS = Platform.OS === 'ios';
const ITEM_WIDTH = Layout.SCREEN_WIDTH;

const MINUS_ICON = IOS ? 'ios-remove' : 'md-remove';
const PLUS_ICON = IOS ? 'ios-add' : 'md-add';
const DELETE_ICON = IOS ? 'ios-close' : 'md-close';

const imgHolder = require('../../assets/img/imgholder.png');

// ProductCard Styles
const styles = StyleSheet.create({
  cardBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 1,
    backgroundColor: Color(Colors.error).alpha(0.12).string(),
  },
  deleteButtonContainer: {
    width: 88,
    overflow: 'hidden',
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    backgroundColor: Colors.background,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: ITEM_WIDTH,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: 98,
    height: 82,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontWeight: '700',
    color: Colors.primaryText,
    textAlign: 'left',
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  secondLine: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  thirdLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    flex: 1,
    lineHeight: 20,
    color: Colors.secondaryText,
    textAlign: 'left',
  },
  priceText: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.primaryColor,
    textAlign: 'left',
  },
  amountButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  quantity: {
    top: -1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 14,
    width: 28,
    height: 28,
    backgroundColor: '#cacaca',
  },
});

// ProductCard State
type State = {};

// ProductCard Props
type Props = {
  onPress: () => {},
  onPressRemove: () => void,
  onPressAdd: () => void,
  activeOpacity: number,
  imageUri: string,
  title: string,
  description: string,
  price: number,
  quantity: number,
  swipeoutDisabled: boolean,
  swipeoutOnPressRemove: () => {},
};

// ProductCard DeleteButton
const DeleteButton = ({onPress}) => (
  <View style={styles.deleteButtonContainer}>
    <TouchableItem onPress={onPress} style={styles.deleteButton}>
      <Icon name={DELETE_ICON} size={26} color={Colors.error} />
    </TouchableItem>
  </View>
);

// ProductCard
export default class ProductCard extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressAdd = () => {
    const {onPressAdd = () => {}} = this.props;
    onPressAdd();
  };

  onPressRemove = () => {
    const {onPressRemove = () => {}} = this.props;
    onPressRemove();
  };

  render() {
    const {
      activeOpacity,
      onPress,
      imageUri,
      title,
      description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price = 0,
      quantity = 0,
      swipeoutDisabled,
      swipeoutOnPressRemove,
    } = this.props;

    return (
      <SwipeRow
        disableLeftSwipe={isRTL ? true : swipeoutDisabled}
        disableRightSwipe={isRTL ? swipeoutDisabled : true}
        directionalDistanceChangeThreshold={16}
        rightOpenValue={isRTL ? 0 : -88}
        leftOpenValue={isRTL ? 88 : 0}>
        <View style={styles.cardBack}>
          <DeleteButton onPress={swipeoutOnPressRemove} />
        </View>

        {/** FIX ME:
         * extra View was added because of iOS ToucableOpacity bug
         */}
        <View style={styles.bg}>
          <TouchableItem
            onPress={onPress}
            activeOpacity={activeOpacity}
            useForeground>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  defaultSource={imgHolder}
                  source={getImgSource(imageUri)}
                  style={[styles.image]}
                />
              </View>

              <View style={styles.textContainer}>
                <View style={styles.firstLine}>
                  <Subtitle1 numberOfLines={1} style={styles.title}>
                    {title}
                  </Subtitle1>
                </View>

                <View style={styles.secondLine}>
                  <Subtitle2 numberOfLines={2} style={styles.descriptionText}>
                    {description}
                  </Subtitle2>
                </View>

                <View style={styles.thirdLine}>
                  <Text style={styles.priceText}>
                    {`$ ${price.toFixed(2)}`}
                  </Text>

                  <View style={styles.amountButtonsContainer}>
                    <TouchableOpacity
                      onPress={this.onPressRemove}
                      activeOpacity={0.85}>
                      <View style={styles.iconContainer}>
                        <Icon
                          name={MINUS_ICON}
                          size={20}
                          color={Colors.white}
                        />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.quantity}>{quantity}</Text>

                    <TouchableOpacity
                      onPress={this.onPressAdd}
                      activeOpacity={0.85}>
                      <View style={styles.iconContainer}>
                        <Icon name={PLUS_ICON} size={20} color={Colors.white} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableItem>
        </View>
      </SwipeRow>
    );
  }
}
