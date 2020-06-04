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
  noteDescription: {
    paddingTop: 8,
    textAlign: 'left',
    fontStyle: 'italic',
    fontSize: 12,
    color: Colors.secondaryColor,
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
          require('../../assets/patches/Glucose/1.png'),
          require('../../assets/patches/Glucose/2.png'),
          require('../../assets/patches/Glucose/3.png'),
          require('../../assets/patches/Glucose/4.png'),
          require('../../assets/patches/Glucose/5.png'),
          require('../../assets/patches/Glucose/6.png'),
        ],
        name: 'Glucose',
        description:
          'Glucose is normally not present in urine. When glucose is present, the condition is called glucosuria. It results from either:\n\n   1. An excessively high glucose level in the blood, such as may be seen with people who have uncontrolled diabetes\n   2. A reduction in the "renal threshold;" when blood glucose levels reach a certain concentration, the kidneys begin to eliminate glucose into the urine to decrease blood concentrations. Sometimes the threshold concentration is reduced and glucose enters the urine sooner, at a lower blood glucose concentration.\n\nSome other conditions that can cause glucosuria include hormonal disorders, liver disease, medications, and pregnancy. When glycosuria occurs, other tests such as a fasting blood glucose are usually performed to further identify the specific cause.\n\nNormally the amount of sugar (glucose) in urine is too low to be detected. Any detection of sugar on this test usually calls for follow-up testing for diabetes.\n\nNormal glucose range in urine: 0 to 0.8 mmol/l (0 to 15 mg/dL)\n\nHigher than normal levels of glucose may occur with:\n\n   1. Diabetes: Small increases in urine glucose levels after a large meal are not always a cause for concern.\n   2. Pregnancy: Up to half of women have glucose in their urine at some time during pregnancy. Glucose in the urine may mean that a woman has gestational diabetes.\n   3. Renal glycosuria: A rare condition in which glucose is released from the kidneys into the urine, even when blood glucose levels are normal.\n\n',
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
          <Button onPress={()=>{ Linking.openURL('https://medlineplus.gov/ency/article/003581.htm')}} title={'Read more information'.toUpperCase()} />
          <View style={styles.buttonPriceContainer}>

          </View>
        </View>
      </SafeAreaView>
    );
  }
}
