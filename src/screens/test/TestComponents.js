/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

// import components
import Avatar from '../../components/avatar/Avatar';

import BottomSheet from '../../components/bottomsheet/BottomSheet';

import Button from '../../components/buttons/Button';
import LinkButton from '../../components/buttons/LinkButton';
import ContainedButton from '../../components/buttons/ContainedButton';

import ProductCard from '../../components/cards/ProductCard';
import ActionProductCard from '../../components/cards/ActionProductCard';
import ActionProductCardHorizontal from '../../components/cards/ActionProductCardHorizontal';

import CreditCard from '../../components/creditcard/CreditCard';

import Divider from '../../components/divider/Divider';

import GradientContainer from '../../components/gradientcontainer/GradientContainer';

import NumericKeyboard from '../../components/keyboard/NumericKeyboard';

import Logo from '../../components/logo/Logo';

import ActivityIndicatorModal from '../../components/modals/ActivityIndicatorModal';
import InputModal from '../../components/modals/InputModal';

import StarRating from '../../components/starrating/StarRating';

import {
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Title,
  Subtitle1,
  Subtitle2,
  Text,
  Paragraph,
} from '../../components/text/CustomText';

import UnderlinePasswordInput from '../../components/textinputs/UnderlinePasswordInput';
import UnderlineTextInput from '../../components/textinputs/UnderlineTextInput';

// import colors
import Colors from '../../theme/colors';

const ProductImg = require('../../assets/img/sandwich_2.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mt32: {
    marginTop: 32,
  },
  content: {
    padding: 16,
  },
  heading: {
    marginHorizontal: -16,
    paddingVertical: 5,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, .12)',
  },
  title: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  buttonTextStyle: {
    color: Colors.white,
  },
  actionButton: {
    color: Colors.accentColor,
  },
  bottomSheetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    padding: 16,
  },
});

export default class TestComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityIndicatorModalVisible: false,
      inputModalVisible: false,
      secureTextEntry: true,
      password: '',
    };
  }

  showBottomSheet = () => {
    this.bottomSheet.open();
  };

  closeActivityIndicatorModal = () => {
    // for demo purpose clear timeout if user request close modal before 3s timeout
    clearTimeout(this.timeout);
    this.setState({
      activityIndicatorModalVisible: false,
    });
  };

  showActivityIndicatorModal = () => {
    this.setState(
      {
        activityIndicatorModalVisible: true,
      },
      () => {
        // for demo purpose after 3s close modal
        this.timeout = setTimeout(() => {
          this.closeActivityIndicatorModal();
        }, 3000);
      },
    );
  };

  showInputModal = value => () => {
    this.setState({
      inputModalVisible: value,
    });
  };

  passwordChange = text => {
    this.setState({
      password: text,
    });
  };

  onTogglePress = () => {
    const {secureTextEntry} = this.state;
    this.setState({
      secureTextEntry: !secureTextEntry,
    });
  };

  render() {
    const {
      activityIndicatorModalVisible,
      inputModalVisible,
      secureTextEntry,
      password,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <ScrollView contentContainerStyle={styles.content}>
          {/* Avatar */}
          <Heading5 style={styles.heading}>Avatar</Heading5>

          <Caption style={styles.title}>{'<Avatar size="small" />'}</Caption>
          <Avatar size="small" />

          <Caption style={styles.title}>{'<Avatar />'}</Caption>
          <Avatar />

          <Caption style={styles.title}>
            {'<Avatar size="large" rounded />'}
          </Caption>
          <Avatar size="large" rounded />

          <Caption style={styles.title}>
            {'<Avatar name="Joe Doe" color="orange" rounded />'}
          </Caption>
          <Avatar name="Joe Doe" color="orange" rounded />

          <Caption style={styles.title}>
            {'<Avatar imageUri="http://..." borderRadius={8} />'}
          </Caption>
          <Avatar
            imageUri={require('../../assets/img/profile_1.jpeg')}
            borderRadius={8}
            size="large"
          />

          <Caption style={styles.title}>
            {'<Avatar imageUri="http://..." rounded size={88} />'}
          </Caption>
          <Avatar
            imageUri="https://i.pravatar.cc/150?img=20"
            rounded
            size={88}
          />

          {/* BottomSheet */}
          <Heading5 style={[styles.mt32, styles.heading]}>
            Bottom Sheet
          </Heading5>
          <Caption style={styles.title}>
            {'<BottomSheet height={240}>{children}</BottomSheet>'}
          </Caption>
          <Button
            onPress={this.showBottomSheet}
            title="Show BottomSheet"
            color={Colors.accentColor}
            small
          />

          {/* Buttons */}
          <Heading5 style={[styles.mt32, styles.heading]}>Buttons</Heading5>
          <Caption style={styles.title}>{'<Button />'}</Caption>
          <Button />

          <Caption style={styles.title}>
            {'<Button outlined borderRadius={12} />'}
          </Caption>
          <Button outlined borderRadius={12} />

          <Caption style={styles.title}>
            {'<Button disabled title="I am disabled" rounded />'}
          </Caption>
          <Button disabled title="I am disabled" rounded />

          <Caption style={styles.title}>
            {'<Button rounded outlined />'}
          </Caption>
          <Button rounded outlined />

          <Caption style={styles.title}>
            {
              '<Button color="#3b5998" socialIconName="facebook-square" iconColor="#fff" title="Facebook" titleColor="#fff" />'
            }
          </Caption>
          <Button
            color="#3b5998"
            socialIconName="facebook-square"
            iconColor="#fff"
            title="Facebook"
            titleColor="#fff"
          />

          <Caption style={styles.title}>
            {'<Button small borderRadius={4} />'}
          </Caption>
          <Button small borderRadius={4} />

          <Caption style={styles.title}>{'<Button small rounded />'}</Caption>
          <Button small rounded />

          <Caption style={styles.title}>
            {'<Button small rounded outlined />'}
          </Caption>
          <Button small rounded outlined />

          <Caption style={styles.title}>
            {
              '<ContainedButton activeOpacity={0.8} height={44} borderRadius={4} color={Colors.accentColor} title={"Sign in".toUpperCase()} titleStyle={styles.buttonTextStyle} />'
            }
          </Caption>

          <ContainedButton
            activeOpacity={0.8}
            height={44}
            borderRadius={4}
            color={Colors.accentColor}
            title={'Sign in'.toUpperCase()}
            titleStyle={styles.buttonTextStyle}
          />

          <Caption style={styles.title}>
            {
              '<LinkButton title="LinkButton" titleStyle={styles.actionButton} />'
            }
          </Caption>

          <LinkButton title="LinkButton" titleStyle={styles.actionButton} />

          {/* Cards */}
          <Heading5 style={[styles.mt32, styles.heading]}>Cards</Heading5>

          <Caption style={styles.title}>{'<ProductCard />'}</Caption>

          <Caption style={styles.title}>
            {
              '<ActionProductCard imageUri="..." title="Subw..." price={5.99} discountPercentage={10} />'
            }
          </Caption>
          <ActionProductCard
            imageUri={ProductImg}
            title="Subway sandwich"
            price={5.99}
            discountPercentage={10}
          />

          <Caption style={styles.title}>
            {'<ActionProductCardHorizontal />'}
          </Caption>
          <ActionProductCardHorizontal
            imageUri={ProductImg}
            title="Subway sandwich"
            price={5.99}
            discountPercentage={10}
          />

          {/* Credit Card */}
          <Heading5 style={[styles.mt32, styles.heading]}>Credit Card</Heading5>
          <Caption style={styles.title}>
            {
              '<CreditCard brand="visa" last4Digits={1234} cardHolder="Joe Doe" expiry="06 / 22" />'
            }
          </Caption>
          <CreditCard
            brand="visa"
            last4Digits={1234}
            cardHolder="Joe Doe"
            expiry="06 / 22"
          />

          {/* Divider */}
          <Heading5 style={[styles.mt32, styles.heading]}>Divider</Heading5>
          <Caption style={styles.title}>{'<Divider />'}</Caption>
          <Divider />

          <Caption style={styles.title}>{'<Divider type="middle" />'}</Caption>
          <Divider type="middle" />

          <Caption style={styles.title}>
            {'<Divider type="inset" marginLeft={48} />'}
          </Caption>
          <Divider type="inset" marginLeft={48} />

          {/* Empty State */}
          <Heading5 style={[styles.mt32, styles.heading]}>EmptyState</Heading5>

          {/* GradientContainer */}
          <Heading5 style={[styles.mt32, styles.heading]}>
            Gradient Container
          </Heading5>
          <Caption style={styles.title}>
            {
              '<GradientContainer containerStyle={{ width: 100, height: 100 }} />'
            }
          </Caption>
          <GradientContainer containerStyle={{width: 100, height: 100}} />

          <Caption style={styles.title}>
            {
              "<GradientContainer colors={['red', 'orange']} containerStyle={{ width: 100, height: 100, borderRadius: 50 }} />"
            }
          </Caption>
          <GradientContainer
            colors={['red', 'orange']}
            containerStyle={{width: 100, height: 100, borderRadius: 50}}
          />

          {/* Icon */}
          <Heading5 style={[styles.mt32, styles.heading]}>Icon</Heading5>

          {/* Keyboard */}
          <Heading5 style={[styles.mt32, styles.heading]}>Keyboard</Heading5>
          <Caption style={styles.title}>
            {'<NumericKeyboard actionButtonTitle="Skip" />'}
          </Caption>
          <NumericKeyboard actionButtonTitle="Skip" />

          {/* Logo */}
          <Heading5 style={[styles.mt32, styles.heading]}>Logo</Heading5>
          <Caption style={styles.title}>
            {'<Logo tintColor="orange" />'}
          </Caption>
          <Logo tintColor="orange" />

          <Caption style={styles.title}>
            {'<Logo tintColor="red" size="large" />'}
          </Caption>
          <Logo tintColor="red" size="large" />

          <Caption style={styles.title}>{'<Logo type="text-wide" />'}</Caption>
          <Logo type="text-wide" />

          {/* Modals */}
          <Heading5 style={[styles.mt32, styles.heading]}>Modals</Heading5>
          <Caption style={styles.title}>
            {`<ActivityIndicatorModal message="Please wait ..." onRequestClose={this.closeActivityIndicatorModal} title="Loading" visible={${activityIndicatorModalVisible}} />`}
          </Caption>
          <Button
            onPress={this.showActivityIndicatorModal}
            title="Show ActivityIndicatorModal"
          />

          <Caption style={styles.title}>
            {`<InputModal title="Forgot password?" message="Enter your e-mail address to reset password" inputPlaceholder="E-mail address" inputKeyboardType="email-address" onRequestClose={this.showInputModal(false)} buttonTitle={'Reset password'.toUpperCase()} onClosePress={this.showInputModal(false)} visible={${inputModalVisible}} />`}
          </Caption>
          <Button onPress={this.showInputModal(true)} title="Show InputModal" />

          {/* Navigation */}
          <Heading5 style={[styles.mt32, styles.heading]}>Navigation</Heading5>

          {/* Pickers */}
          <Heading5 style={[styles.mt32, styles.heading]}>Pickers</Heading5>

          {/* PriceRating */}
          <Heading5 style={[styles.mt32, styles.heading]}>PriceRating</Heading5>

          {/* StarRating */}
          <Heading5 style={[styles.mt32, styles.heading]}>Star Rating</Heading5>
          <Caption style={styles.title}>{'<StarRating />'}</Caption>
          <StarRating />

          <Caption style={styles.title}>
            {'<StarRating rating={3.6} starColor="blue" starSize={22} />'}
          </Caption>
          <StarRating rating={3.6} starColor="blue" starSize={22} />

          {/* Text */}
          <Heading5 style={[styles.mt32, styles.heading]}>Text</Heading5>
          <Caption style={styles.title}>{'<Heading1>Text.</Heading1>'}</Caption>
          <Heading1>Text.</Heading1>

          <Caption style={styles.title}>{'<Heading2>Text.</Heading2>'}</Caption>
          <Heading2>Text.</Heading2>

          <Caption style={styles.title}>{'<Heading3>Text.</Heading3>'}</Caption>
          <Heading3>Text.</Heading3>

          <Caption style={styles.title}>{'<Heading4>Text.</Heading4>'}</Caption>
          <Heading4>Text.</Heading4>

          <Caption style={styles.title}>{'<Heading5>Text.</Heading5>'}</Caption>
          <Heading5>Text.</Heading5>

          <Caption style={styles.title}>{'<Heading6>Text.</Heading6>'}</Caption>
          <Heading6>Text.</Heading6>

          <Caption style={styles.title}>{'<Title>Text.</Title>'}</Caption>
          <Title>Text.</Title>

          <Caption style={styles.title}>
            {'<Subtitle1>Text.</Subtitle1>'}
          </Caption>
          <Subtitle1>Text.</Subtitle1>

          <Caption style={styles.title}>
            {'<Subtitle2>Text.</Subtitle2>'}
          </Caption>
          <Subtitle2>Text.</Subtitle2>

          <Caption style={styles.title}>{'<Text>Text.</Text>'}</Caption>
          <Text>Text.</Text>

          <Caption style={styles.title}>
            {'<Paragraph>Text.</Paragraph>'}
          </Caption>
          <Paragraph>Text.</Paragraph>

          {/* TextInputs */}
          <Heading5 style={[styles.mt32, styles.heading]}>TextInputs</Heading5>
          <Caption style={styles.title}>{'<UnderlineTextInput />'}</Caption>
          <UnderlineTextInput />

          <Caption style={styles.title}>
            {'<UnderlineTextInput borderColor="blue" />'}
          </Caption>
          <UnderlineTextInput borderColor="blue" />

          <Caption style={styles.title}>
            {`<UnderlinePasswordInput  onChangeText={this.passwordChange} secureTextEntry={${secureTextEntry}} toggleVisible={password.length > 0} toggleText={secureTextEntry ? 'Show' : 'Hide'} onTogglePress={this.onTogglePress} />`}
          </Caption>
          <UnderlinePasswordInput
            onChangeText={this.passwordChange}
            secureTextEntry={secureTextEntry}
            toggleVisible={password.length > 0}
            toggleText={secureTextEntry ? 'Show' : 'Hide'}
            onTogglePress={this.onTogglePress}
          />
        </ScrollView>

        <BottomSheet
          ref={ref => {
            this.bottomSheet = ref;
          }}
          height={240}>
          <View style={styles.bottomSheetContainer}>
            <Caption style={styles.title}>
              Any child Component can go here
            </Caption>
          </View>
        </BottomSheet>

        <ActivityIndicatorModal
          message="Please wait ..."
          onRequestClose={this.closeActivityIndicatorModal}
          title="Loading"
          visible={activityIndicatorModalVisible}
        />

        <InputModal
          title="Forgot password?"
          message="Enter your e-mail address to reset password"
          inputPlaceholder="E-mail address"
          inputKeyboardType="email-address"
          onRequestClose={this.showInputModal(false)}
          buttonTitle={'Reset password'.toUpperCase()}
          onClosePress={this.showInputModal(false)}
          visible={inputModalVisible}
        />
      </View>
    );
  }
}
