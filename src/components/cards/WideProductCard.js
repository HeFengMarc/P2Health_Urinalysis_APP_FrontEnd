/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import getImgSource from '../../utils/getImgSource.js';

// import components
import GradientContainer from "../gradientcontainer/GradientContainer";
import Icon from "../icon/Icon";
import StarRating from "../starrating/StarRating";
import TouchableItem from "../TouchableItem";

// import colors, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

// WideProductCard Config
const imgHolder = require("../../assets/img/imgholder.png");
const FAVORITE_ICON = Platform.OS === "ios" ? "ios-heart" : "md-heart";

// WideProductCard Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 6,
    width: Layout.SCREEN_WIDTH / 1.8
  },
  borderContainer: {
    borderWidth: Platform.OS === "ios" ? 1 : 0,
    borderColor: "#dfdfdf",
    borderRadius: 8,
    backgroundColor: Colors.surface,
    elevation: 2,
    overflow: "hidden"
  },
  productImg: {
    width: "100%",
    height: 132,
    resizeMode: "cover"
  },
  bottomOverlay: { flex: 1 },
  productFooter: {
    marginTop: -10,
    borderRadius: 8,
    backgroundColor: Colors.surface
  },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
    color: Colors.primaryText,
    letterSpacing: 0.15
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderRadius: 1,
    borderColor: "#eaeaea",
    marginHorizontal: 12,
    paddingVertical: 10
  },
  priceGroup: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  oldPriceContainer: { marginLeft: 5, paddingTop: 2 },
  oldPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8e8e8e"
  },
  hr: {
    position: "absolute",
    top: 13,
    width: "100%",
    height: 1,
    backgroundColor: "#8e8e8e"
  },
  price: {
    fontWeight: "700",
    fontSize: 18,
    color: Colors.primaryColor
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    width: 28,
    height: 28,
    backgroundColor: "#cfcfcf"
  },
  favoriteBg: {
    backgroundColor: Colors.secondaryColor
  },
  newLabelContainer: {
    position: "absolute",
    top: 14,
    left: -1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colors.primaryColor
  },
  discountLabelContainer: {
    position: "absolute",
    top: 14,
    right: -1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colors.tertiaryColor
  },
  label: {
    fontSize: 12,
    color: Colors.onPrimaryColor
  }
});

// WideProductCard State
type State = {};

// WideProductCard Props
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
   * rating number
   */
  rating: number,

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
  label: "new",

  /**
   * Favorite indicator
   */
  favorite: boolean,

  /**
   * Handler to be called when the user taps on product favorite icon
   */
  onPressFavorite: () => void
};

// WideProductCard
export default class WideProductCard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderLabel = (label, discountPercentage) => {
    if (label === "new") {
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

  onPressFavorite = () => {
    const { onPressFavorite = () => {} } = this.props;
    onPressFavorite();
  };

  render() {
    const {
      activeOpacity,
      onPress,
      imageUri,
      title,
      rating,
      price = 0,
      discountPercentage,
      label,
      favorite
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
            <View>
              <ImageBackground
                defaultSource={imgHolder}
                source={getImgSource(imageUri)}
                style={styles.productImg}
              >
                <GradientContainer
                  colors={[Colors.black, "transparent"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0.6 }}
                  containerStyle={styles.bottomOverlay}
                />
              </ImageBackground>

              <View style={styles.productFooter}>
                <View style={styles.titleContainer}>
                  <Text numberOfLines={1} style={styles.title}>
                    {title}
                  </Text>

                  <StarRating rating={rating} starSize={15} />
                </View>

                {discountPercentage ? (
                  <View style={styles.priceContainer}>
                    <View style={styles.priceGroup}>
                      <Text style={styles.price}>
                        {`$ ${(((100 - discountPercentage) / 100) * price).toFixed(2)}`}
                      </Text>
                      <View style={styles.oldPriceContainer}>
                        <Text style={styles.oldPrice}>{`$ ${price.toFixed(2)}`}</Text>
                        <View style={styles.hr} />
                      </View>
                    </View>

                    <TouchableOpacity onPress={this.onPressFavorite} activeOpacity={0.85}>
                      <View style={[styles.iconContainer, favorite && styles.favoriteBg]}>
                        <Icon name={FAVORITE_ICON} size={14} color={Colors.white} />
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>{`$ ${price.toFixed(2)}`}</Text>

                    <TouchableOpacity onPress={this.onPressFavorite} activeOpacity={0.85}>
                      <View style={[styles.iconContainer, favorite && styles.favoriteBg]}>
                        <Icon name={FAVORITE_ICON} size={14} color={Colors.white} />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              {this.renderLabel(label, discountPercentage)}
            </View>
          </TouchableItem>
        </View>
      </View>
    );
  }
}
