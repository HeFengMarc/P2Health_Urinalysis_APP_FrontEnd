/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import { ImageBackground, Platform, StyleSheet, Text, View } from "react-native";
import getImgSource from '../../utils/getImgSource.js';

// import components
import GradientContainer from "../gradientcontainer/GradientContainer";
import Icon from "../icon/Icon";
import PriceRating from "../pricerating/PriceRating";
import TouchableItem from "../TouchableItem";

// import colors, layout
import Colors from "../../theme/colors";

// RestaurantCard Config
const imgHolder = require("../../assets/img/imgholder.png");
const IOS = Platform.OS === "ios";
const STAR_ICON = IOS ? "ios-star" : "md-star";

// RestaurantCard Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 4
  },
  borderContainer: {
    borderWidth: IOS ? 1 : 0,
    borderColor: "#dfdfdf",
    borderRadius: 8,
    backgroundColor: Colors.surface,
    elevation: 1,
    overflow: "hidden"
  },
  restaurantImg: {
    width: "100%",
    height: 192,
    resizeMode: "cover"
  },
  ratingContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: Colors.primaryColor
  },
  ratingText: {
    color: Colors.onPrimaryColor
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 12
  },
  restaurantInfo: {
    borderRadius: 4,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.84)"
  },
  nameContainer: {
    padding: 12,
  },
  name: {
    fontWeight: "700",
    fontSize: 15,
    color: Colors.primaryText,
    letterSpacing: 0.15
  },
  cuisines: {
    paddingVertical: 2,
    fontSize: 14,
    color: Colors.secondaryText
  }
});

// RestaurantCard State
type State = {};

// RestaurantCard Props
type Props = {
  activeOpacity: number,

  /**
   * cuisines
   */
  cuisines: string,

  /**
   * Restaurant image uri
   */
  imageUri: string,

  /**
   * Restaurant name
   */
  name: string,

  /**
   * price rating number
   */
  price: number,

  /**
   * rating number
   */
  rating: number,

  /**
   * Handler to be called when the user taps on Restaurant card
   */
  onPress: () => void
};

// RestaurantCard
export default class RestaurantCard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      activeOpacity,
      onPress,
      imageUri,
      name,
      rating,
      price,
      cuisines
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.borderContainer}>
          <TouchableItem
            activeOpacity={activeOpacity}
            onPress={onPress}
            borderless
            useForeground
          >
            <ImageBackground
              defaultSource={imgHolder}
              source={getImgSource(imageUri)}
              style={styles.restaurantImg}
            >
              <GradientContainer
                colors={[Colors.black, "transparent"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0.32 }}
                containerStyle={styles.overlay}
              >
                <View style={styles.restaurantInfo}>
                  <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.name}>
                      {name}
                    </Text>

                    <Text numberOfLines={1} style={styles.cuisines}>
                      {cuisines}
                    </Text>

                    <PriceRating price={price} />
                  </View>
                </View>
              </GradientContainer>

              <View style={styles.ratingContainer}>
                <Icon name={STAR_ICON} size={14} color={Colors.onPrimaryColor} />
                <Text style={styles.ratingText}> {(rating).toFixed(1)}</Text>
              </View>
            </ImageBackground>
          </TouchableItem>
        </View>
      </View>
    );
  }
}
