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
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from 'color';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import WideProductCard from '../../components/cards/WideProductCard';
import RestaurantCard from '../../components/cards/RestaurantCard';
import LinkButton from '../../components/buttons/LinkButton';
import {Heading6} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';

// HomeC Config
const imgHolder = require('../../assets/img/imgholder.png');

// HomeC Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  titleText: {
    fontWeight: '700',
  },
  cityText: {
    color: Colors.primaryColor,
  },
  productsList: {
    // spacing = paddingHorizontal + WideProductCard marginHorizontal = 10 + 6 = 16
    paddingHorizontal: 10,
    // spacing = paddingHorizontal + WideProductCard marginVertical = 12 + 4 = 16
    paddingBottom: 12,
  },
  viewAllText: {
    color: Colors.primaryColor,
  },
  categoriesList: {
    paddingTop: 4,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 8,
  },
  cardImg: {borderRadius: 46},
  card: {
    marginLeft: 8,
    width: 92,
    height: 92,
    resizeMode: 'cover',
  },
  cardOverlay: {
    flex: 1,
    borderRadius: 44,
    backgroundColor: Color(Colors.black).alpha(0.16),
    overflow: 'hidden',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  restauratnsList: {
    // spacing = paddingHorizontal + RestaurantCard margin = 12 + 4 = 16
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
});

export default class HomeC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          imageUri: require('../../assets/img/pizza_1.jpg'),
          name: 'Pizza Carbonara 35cm',
          rating: 4.8,
          price: 10.99,
          label: 'new',
          favorite: false,
        },
        {
          imageUri: require('../../assets/img/sandwich_2.jpg'),
          name: 'Subway sandwich',
          rating: 4.2,
          price: 4.99,
          favorite: false,
        },
        {
          imageUri: require('../../assets/img/cake_1.jpg'),
          name: 'Cake Cherries Pie',
          rating: 3.8,
          price: 8.49,
          discountPercentage: 10,
          favorite: false,
        },
      ],
      categories: [
        {
          key: 1,
          imageUri: require('../../assets/img/pizza_3.jpg'),
          name: 'Pizza',
        },
        {
          key: 2,
          imageUri: require('../../assets/img/meat_1.jpg'),
          name: 'Grill',
        },
        {
          key: 3,
          imageUri: require('../../assets/img/spaghetti_2.jpg'),
          name: 'Pasta',
        },
        {
          key: 4,
          imageUri: require('../../assets/img/soup_1.jpg'),
          name: 'Soups',
        },
        {
          key: 5,
          imageUri: require('../../assets/img/salad_1.jpg'),
          name: 'Salads',
        },
        {
          key: 6,
          imageUri: require('../../assets/img/cake_2.jpg'),
          name: 'Dessert',
        },
      ],
      restauratns: [
        {
          imageUri: require('../../assets/img/about_2.jpg'),
          name: 'The Glass Onion',
          rating: 5.0,
          price: 3,
          cuisines: 'Japanese, Sushi, Thai, Italian, Pizza',
        },
        {
          imageUri: require('../../assets/img/about_1.jpg'),
          name: 'Jekyll & Hyde Club',
          rating: 4.9,
          price: 4,
          cuisines: 'Soups, BBQ, Wings, Hamburger',
        },
        {
          imageUri: require('../../assets/img/about_3.jpg'),
          name: '2 Dudes Brew & Que',
          rating: 4.8,
          price: 3,
          cuisines: 'Italian, Mediterranean, European',
        },
      ],
    };
  }

  navigateTo = screen => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = (item, index) => index.toString();

  renderProductItem = ({item, index}) => (
    <WideProductCard
      onPress={this.navigateTo('Product')}
      key={index}
      imageUri={item.imageUri}
      title={item.name}
      rating={item.rating}
      price={item.price}
      discountPercentage={item.discountPercentage}
      label={item.label}
      favorite={item.favorite}
      onPressFavorite={this.onPressFavorite(item)}
    />
  );

  onPressFavorite = item => () => {
    let {favorite} = item;

    const {products} = this.state;
    const index = products.indexOf(item);

    products[index].favorite = !favorite;

    this.setState({
      products: [...products],
    });
  };

  renderCategoryItem = ({item, index}) => (
    <ImageBackground
      key={index}
      defaultSource={imgHolder}
      source={getImgSource(item.imageUri)}
      imageStyle={styles.cardImg}
      style={styles.card}>
      <View style={styles.cardOverlay}>
        <TouchableItem
          onPress={this.navigateTo('Category')}
          style={styles.cardContainer}
          // borderless
        >
          <Text style={styles.cardTitle}>{item.name}</Text>
        </TouchableItem>
      </View>
    </ImageBackground>
  );

  renderRestaurantItem = ({item, index}) => (
    <RestaurantCard
      // onPress={this.navigateTo("Restaurant")}
      key={index}
      imageUri={item.imageUri}
      name={item.name}
      rating={item.rating}
      price={item.price}
      cuisines={item.cuisines}
    />
  );

  render() {
    const {categories, products, restauratns} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.container}>
          <ScrollView>
            <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>
                Discover{' '}
                <Heading6 style={[styles.titleText, styles.cityText]}>
                  Melbourne
                </Heading6>
              </Heading6>
            </View>

            <FlatList
              data={products}
              horizontal
              showsHorizontalScrollIndicator={false}
              alwaysBounceHorizontal={false}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderProductItem}
              contentContainerStyle={styles.productsList}
            />

            <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Categories</Heading6>
              <LinkButton
                title="View all"
                titleStyle={styles.viewAllText}
                onPress={this.navigateTo('Categories')}
              />
            </View>

            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              alwaysBounceHorizontal={false}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderCategoryItem}
              contentContainerStyle={styles.categoriesList}
            />

            <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Popular restaurants</Heading6>
              <LinkButton
                title="View all"
                titleStyle={styles.viewAllText}
                onPress={this.navigateTo('SearchResults')}
              />
            </View>

            <FlatList
              data={restauratns}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderRestaurantItem}
              contentContainerStyle={styles.restauratnsList}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
