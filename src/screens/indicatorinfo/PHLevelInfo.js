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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import Swiper from 'react-native-swiper';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import Button from '../../components/buttons/Button';
import {Caption, Heading5, SmallText} from '../../components/text/CustomText';
import Icon from '../../components/icon/Icon';
import SizePicker from '../../components/pickers/SizePicker';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';

// ProductA Config
const isRTL = I18nManager.isRTL;
const IOS = Platform.OS === 'ios';
const MINUS_ICON = IOS ? 'ios-remove' : 'md-remove';
const PLUS_ICON = IOS ? 'ios-add' : 'md-add';
const FAVORITE_ICON = IOS ? 'ios-star' : 'md-star';
const CLOSE_ICON = IOS ? 'ios-close' : 'md-close';
const imgHolder = require('../../assets/img/imgholder.png');

// ProductA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  swiperContainer: {
    width: '100%',
    height: 228,
  },
  paginationStyle: {
    bottom: 12,
    transform: [{scaleX: isRTL ? -1 : 1}],
  },
  dot: {backgroundColor: Colors.background},
  activeDot: {backgroundColor: Colors.primaryColor},
  slideImg: {
    width: '100%',
    height: 228,
    resizeMode: 'cover',
  },
  topButton: {
    position: 'absolute',
    top: 16,
    borderRadius: 18,
    backgroundColor: Colors.background,
  },
  left: {left: 16},
  right: {right: 16},
  buttonIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  favorite: {
    backgroundColor: Colors.secondaryColor,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 10,
  },
  productTitle: {
    fontWeight: '700',
  },
  priceText: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.primaryColor,
  },
  shortDescription: {
    paddingTop: 8,
    textAlign: 'left',
    color: '#000',
  },
  alarmDescription: {
    paddingTop: 8,
    textAlign: 'left',
    fontStyle: 'italic',
    fontSize: 12,
  },
  pickerGroup: {
    marginTop: 24,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  caption: {
    width: 80,
    textAlign: 'left',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  amountButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  quantity: {
    top: -1,
    paddingHorizontal: 20,
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.secondaryColor,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  buttonPriceContainer: {
    position: 'absolute',
    top: 0,
    left: 40,
    height: 48,
    justifyContent: 'center',
  },
  buttonPriceText: {
    fontSize: 16,
    lineHeight: 18,
    color: Colors.onPrimaryColor,
  },
});

// ProductA
export default class ProductA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        images: [
          require('../../assets/patches/PHLevel/1.png'),
          require('../../assets/patches/PHLevel/2.png'),
          require('../../assets/patches/PHLevel/3.png'),
          require('../../assets/patches/PHLevel/4.png'),
          require('../../assets/patches/PHLevel/5.png'),
          require('../../assets/patches/PHLevel/6.png'),
          require('../../assets/patches/PHLevel/7.png'),
        ],
        name: 'PH Level',
        description:
          'A urine pH level test is a test that analyzes the acidity or alkalinity of a urine sample. Many diseases, your diet, and the medicines you take can affect how acidic or basic your urine is. For instance, results that are either too high or low can indicate the likelihood that your body will form kidney stones. If your urine is at an extreme on either the low or high end of pH levels, you can adjust your diet to reduce the likelihood of painful kidney stones. Abnormal pH levels may indicate a kidney or urinary tract disorder. \n\nA neutral pH is 7.0. The higher the number, the more basic (alkaline) it is. The lower the number, the more acidic your urine is. The average urine sample tests at about 6.0.\n\nIf your urine sample is lower, this could indicate an environment conducive to kidney stones. Other conditions that prefer an acidic environment are:\n\n   1. acidosis\n   2. dehydration\n   3. diabetic ketoacidosis\n   4. diarrhea\n   5. starvation\n\nA higher-than-normal urine pH could indicate:\n\n    1. gastric suctioning that takes away stomach acids\n    2. kidney failure\n    3. kidney tubular acidosis\n    4. pyloric obstruction\n    5. respiratory alkalosis\n    6. urinary tract infection\n    7. vomiting\n\nYour diet also may determine how acidic or alkaline your urine is. For example, if you eat a diet low in meat and high in fruits and vegetables, you’re more likely to have alkaline urine. Those who consume higher amounts of meat are more likely to have acidic urine. Your doctor may recommend some changes to your diet if your urine pH is too high or too low.\n\n',
      },
      favorite: false,
    };
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  onPressAddToFavorites = () => {
    const {favorite} = this.state;

    this.setState({
      favorite: !favorite,
    });
  };

  onPressIncreaseAmount = () => {
    const {product} = this.state;
    let {quantity} = product;
    const {servingSize} = product;

    quantity += 1;
    product.quantity = quantity;

    const total = quantity * product.price * servingSize;
    product.total = total;

    this.setState({
      product,
    });
  };

  onPressDecreaseAmount = () => {
    const {product} = this.state;
    let {quantity} = product;
    const {servingSize} = product;

    quantity -= 1;
    quantity = quantity < 1 ? 1 : quantity;
    product.quantity = quantity;

    const total = quantity * product.price * servingSize;
    product.total = total;

    this.setState({
      product,
    });
  };

  setServingSize = (servingSize) => () => {
    const {product} = this.state;
    const {quantity} = product;

    product.servingSize = servingSize;

    const total = quantity * product.price * servingSize;
    product.total = total;

    this.setState({
      product,
    });
  };

  setSideDish = (sideDish) => () => {
    const {product} = this.state;
    product.sideDish = sideDish;

    this.setState({
      product,
    });
  };

  render() {
    const {product, favorite} = this.state;
    const {
      images,
      price,
      description,
      quantity,
      servingSize,
      sideDish,
      total,
    } = product;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <ScrollView>
          <View style={styles.swiperContainer}>
            <Swiper
              loop={false}
              paginationStyle={styles.paginationStyle}
              activeDotStyle={styles.activeDot}
              dotStyle={styles.dot}
              index={isRTL ? images.length - 1 : 0}>
              {images.map((item, i) => (
                <Image
                  key={`image_${i}`}
                  defaultSource={imgHolder}
                  source={getImgSource(item)}
                  style={styles.slideImg}
                />
              ))}
            </Swiper>



            <View
              style={[
                styles.topButton,
                styles.right,
                favorite && styles.favorite,
              ]}>

            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={styles.productTitleContainer}>
              <Heading5 style={styles.productTitle}>{product.name}</Heading5>

            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <SmallText style={styles.alarmDescription}>The photos above show the possible color for the indicator. Please check the color card for more information.</SmallText>
          </View>

          <View style={styles.descriptionContainer}>
            <SmallText style={styles.shortDescription}>{description}</SmallText>
          </View>




        </ScrollView>


        <View style={styles.bottomButtonContainer}>
          <Button onPress={()=>{ Linking.openURL('https://www.healthline.com/health/urine-ph')}} title={'Read more information'.toUpperCase()} />
          <View style={styles.buttonPriceContainer}>

          </View>
        </View>
      </SafeAreaView>
    );
  }
}
