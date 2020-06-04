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
          require('../../assets/patches/SpecificGravity/1.png'),
          require('../../assets/patches/SpecificGravity/2.png'),
          require('../../assets/patches/SpecificGravity/3.png'),
          require('../../assets/patches/SpecificGravity/4.png'),
          require('../../assets/patches/SpecificGravity/5.png'),
          require('../../assets/patches/SpecificGravity/6.png'),
          require('../../assets/patches/SpecificGravity/7.png'),
        ],
        name: 'Specific Gravity',
        description:
          'Urine specific gravity is a measure of urine concentration. This test simply indicates how concentrated the urine is. Specific gravity measurements are a comparison of the amount of substances dissolved in urine as compared to pure water. If there were no substances present, the specific gravity of the urine would be 1.000 (the same as pure water). Since all urine has some substances in it, a urine SG of 1.000 is not possible. If a person drinks excessive quantities of water in a short period of time or gets an intravenous (IV) infusion of large volumes of fluid, then the urine specific gravity may be very close to that of water. The upper limit of the test pad, a specific gravity of 1.035, indicates concentrated urine, one with many substances in a limited amount of water.\n\nKnowing the urine concentration helps healthcare practitioners understand whether a urine specimen they are evaluating is the best one to detect a particular substance. For example, if they are looking for very small amounts of protein, a concentrated morning urine specimen would be the best sample.\n\nThe normal range for urine specific gravity is 1.005 to 1.030. Normal value ranges may vary slightly among different laboratories. Talk to your provider about the meaning of your specific test results.\n\nIncreased urine specific gravity may be due to conditions such as:\n\n    1. Adrenal glands do not produce enough hormones (Addison disease)\n    2. Heart failure\n    3. High sodium level in the blood\n    4. Loss of body fluids (dehydration)\n    5. Narrowing of the kidney artery (renal artery stenosis)\n    6. Shock\n    7. Sugar (glucose) in the urine\n    8. Syndrome of inappropriate ADH secretion (SIADH)\n\nDecreased urine specific gravity may be due to:\n\n   1. Damage to kidney tubule cells (renal tubular necrosis)\n   2. Diabetes insipidus\n   3. Drinking too much fluid\n   4. Kidney failure\n   5. Low sodium level in the blood\n\n',
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
          <Button onPress={()=>{ Linking.openURL('https://medlineplus.gov/ency/article/003587.htm')}} title={'Read more information'.toUpperCase()} />
          <View style={styles.buttonPriceContainer}>

          </View>
        </View>
      </SafeAreaView>
    );
  }
}
