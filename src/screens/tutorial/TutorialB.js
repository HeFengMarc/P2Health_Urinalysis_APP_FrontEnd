/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import node modules
import React, {Component, Fragment} from 'react';
import {
  I18nManager,
  SafeAreaView,
  StatusBar,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import remove from 'lodash/remove';

// import components
import Divider from '../../components/divider/Divider';
import EmptyState from '../../components/emptystate/EmptyState';
import ProductCard from '../../components/cards/ProductCard';
import {Heading6, SmallText} from '../../components/text/CustomText';

// import colors
import Colors from '../../theme/colors';

// FavoritesA Config
const isRTL = I18nManager.isRTL;
const EMPTY_STATE_ICON = 'star-outline';

// FavoritesB Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  titleText: {
    paddingVertical: 16,
    fontWeight: '700',
    textAlign: 'left',
  },
  bottomTextInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 12,
    backgroundColor: '#f1f1f1',
  },
});

// FavoritesB
export default class FavoritesB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 'product1',
          imageUri: require('../../assets/img/pizza_3.jpg'),
          name: 'Pizza One',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          price: 7.99,
          quantity: 0,
        },
        {
          id: 'product2',
          imageUri: require('../../assets/img/barbecue_1.jpg'),
          name: 'Beef',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          price: 8.99,
          quantity: 0,
        },
        {
          id: 'product3',
          imageUri: require('../../assets/img/spaghetti_1.jpg'),
          name: 'Fettuccine Pasta',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          price: 11.99,
          quantity: 0,
        },
      ],
    };
  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  swipeoutOnPressRemove = (item) => () => {
    let {products} = this.state;
    const index = products.indexOf(item);

    products = remove(products, (n) => products.indexOf(n) !== index);

    this.setState({
      products,
    });
  };

  onPressRemove = (item) => () => {
    let {quantity} = item;
    quantity -= 1;

    const {products} = this.state;
    const index = products.indexOf(item);

    if (quantity < 0) {
      return;
    }
    products[index].quantity = quantity;

    this.setState({
      products: [...products],
    });
  };

  onPressAdd = (item) => () => {
    const {quantity} = item;
    const {products} = this.state;

    const index = products.indexOf(item);
    products[index].quantity = quantity + 1;

    this.setState({
      products: [...products],
    });
  };

  keyExtractor = (item) => item.id.toString();

  renderProductItem = ({item}) => (
    <ProductCard
      key={item.id}
      onPress={this.navigateTo('Product')}
      onPressRemove={this.onPressRemove(item)}
      onPressAdd={this.onPressAdd(item)}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      title={item.name}
      price={item.price}
      quantity={item.quantity}
      swipeoutDisabled={false}
      swipeoutOnPressRemove={this.swipeoutOnPressRemove(item)}
    />
  );

  // base on list item dimensions
  // marginLeft={116} // 116 = 100 + 16
  renderSeparator = () => <Divider type="inset" marginLeft={0} />;

  render() {
    const {products} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Favorites</Heading6>
        </View>

        {products.length === 0 ? (
          <EmptyState
            showIcon
            iconName={EMPTY_STATE_ICON}
            title="Your Favorites List is Empty"
            message="Save your favorite food so you can always find it here and make order easier"
          />
        ) : (
          <Fragment>
            <FlatList
              data={products}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderProductItem}
              ItemSeparatorComponent={this.renderSeparator}
            />

            <View style={styles.bottomTextInfo}>
              <View style={styles.info}>
                <SmallText>
                  {`Swipe ${isRTL ? 'right' : 'left'} to remove items`}
                </SmallText>
              </View>
            </View>
          </Fragment>
        )}
      </SafeAreaView>
    );
  }
}
