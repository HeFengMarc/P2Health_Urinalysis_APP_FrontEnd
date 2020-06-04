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
  I18nManager,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// import components
import ActionProductCardHorizontal from '../../components/cards/ActionProductCardHorizontal';
import EmptyState from '../../components/emptystate/EmptyState';
import {Heading6, SmallText} from '../../components/text/CustomText';

// import colors
import Colors from '../../theme/colors';


const EMPTY_STATE_ICON = 'star-outline';

// FavoritesA Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 24,
    fontWeight: '700',
    textAlign: 'left',
  },
  productList: {
    // spacing = paddingHorizontal + ActionProductCardHorizontal margin = 12 + 4 = 16
    paddingHorizontal: 12,
  },
  bottomTextInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#f1f1f1',
  },
});

// FavoritesA
export default class FavoritesA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 'product1',
          imageUri: require('../../assets/img/app.jpg'),
          name: 'APP Functionality Tutorial ',
          price: 8.49,
          quantity: 0,
          discountPercentage: 10,
          link: 'FunctionTutorial'
        },
        {
          id: 'product2',
          imageUri: require('../../assets/img/onboarding_003.jpg'),
          name: 'Urine Testing Operation Tutorial',
          quantity: 0,
          price: 10.99,
          link: 'OperationTutorial'
        },

      ],
    };
  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };


  keyExtractor = (item) => item.id.toString();

  renderProductItem = ({item}) => (
    <ActionProductCardHorizontal
      key={item.id}
      onPress={this.navigateTo(item.link)}
      imageUri={item.imageUri}
      title={item.name}
      price={item.price}
      quantity={item.quantity}
      discountPercentage={item.discountPercentage}
      label={item.label}
    />
  );

  render() {
    const {products} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />


        <FlatList
          data={products}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderProductItem}
          contentContainerStyle={styles.productList}
        />

        <View style={styles.bottomTextInfo}>
          <View style={styles.info}>
            <SmallText>
              Select and click your color card.
            </SmallText>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
