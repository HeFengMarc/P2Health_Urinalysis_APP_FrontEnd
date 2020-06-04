/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component, Fragment} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Color from 'color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import components
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/buttons/Button';
import {Subtitle2} from '../../components/text/CustomText';
import LinkButton from '../../components/buttons/LinkButton';
import UnderlineTextInput from '../../components/textinputs/UnderlineTextInput';

// import colors, layout
import Colors from '../../theme/colors';
import Layout from '../../theme/layout';

// EditProfileA Config
const AVATAR_SIZE = 100;
const INPUT_FOCUSED_BORDER_COLOR = Colors.primaryColor;

// EditProfileA Styles
const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: Colors.primaryColor},
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        minHeight: Layout.SCREEN_HEIGHT - 80, // 80 = Button.height 48 + padding 2*16
      },
    }),
  },
  avatarSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarBg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: AVATAR_SIZE / 2 + 32,
    backgroundColor: Colors.primaryColor,
  },
  whiteCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    width: AVATAR_SIZE + 6,
    height: AVATAR_SIZE + 6,
    borderRadius: (AVATAR_SIZE + 6) / 2,
    backgroundColor: Colors.white,
  },
  linkButton: {
    padding: 2,
    color: Colors.accentColor,
  },
  editForm: {
    paddingHorizontal: 20,
  },
  overline: {
    color: Color(Colors.secondaryText).alpha(0.6),
    textAlign: 'left',
  },
  inputContainerStyle: {
    marginTop: 0,
    marginBottom: 17,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

// EditProfileA
export default class EditProfileA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kristin Evans',
      nameFocused: false,
      email: 'kristin.evans@gmail.com',
      emailFocused: false,
      phone: '+1 23 4567890',
      phoneFocused: false,
    };
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  nameChange = (text) => {
    this.setState({
      name: text,
    });
  };

  nameFocus = () => {
    this.setState({
      nameFocused: true,
      emailFocused: false,
      phoneFocused: false,
    });
  };

  emailChange = (text) => {
    this.setState({
      email: text,
    });
  };

  emailFocus = () => {
    this.setState({
      nameFocused: false,
      emailFocused: true,
      phoneFocused: false,
    });
  };

  phoneChange = (text) => {
    this.setState({
      phone: text,
    });
  };

  phoneFocus = () => {
    this.setState({
      nameFocused: false,
      emailFocused: false,
      phoneFocused: true,
    });
  };

  focusOn = (nextFiled) => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  render() {
    const {
      name,
      nameFocused,
      email,
      emailFocused,
      phone,
      phoneFocused,
    } = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <KeyboardAwareScrollView
            alwaysBounceVertical={false}
            contentContainerStyle={styles.infoContainer}>
            <View>
              <View style={styles.avatarSection}>
                <View style={styles.avatarBg} />
                <View style={styles.whiteCircle}>
                  <Avatar
                    imageUri={require('../../assets/img/profile_1.jpeg')}
                    rounded
                    size={AVATAR_SIZE}
                  />
                </View>

                <LinkButton
                  title="Change Photo"
                  titleStyle={styles.linkButton}
                />
              </View>

              <View style={styles.editForm}>
                <Subtitle2 style={styles.overline}>NAME</Subtitle2>
                <UnderlineTextInput
                  onRef={(r) => {
                    this.name = r;
                  }}
                  value={name}
                  onChangeText={this.nameChange}
                  onFocus={this.nameFocus}
                  inputFocused={nameFocused}
                  onSubmitEditing={this.focusOn(this.email)}
                  returnKeyType="next"
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                  inputContainerStyle={styles.inputContainerStyle}
                />

                <Subtitle2 style={styles.overline}>E-MAIL ADDRESS</Subtitle2>
                <UnderlineTextInput
                  onRef={(r) => {
                    this.email = r;
                  }}
                  value={email}
                  onChangeText={this.emailChange}
                  onFocus={this.emailFocus}
                  inputFocused={emailFocused}
                  onSubmitEditing={this.focusOn(this.phone)}
                  returnKeyType="next"
                  keyboardType="email-address"
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                  inputContainerStyle={styles.inputContainerStyle}
                />

                <Subtitle2 style={styles.overline}>PHONE NUMBER</Subtitle2>
                <UnderlineTextInput
                  onRef={(r) => {
                    this.phone = r;
                  }}
                  value={phone}
                  returnKeyType="done"
                  keyboardType="phone-pad"
                  onChangeText={this.phoneChange}
                  onFocus={this.phoneFocus}
                  inputFocused={phoneFocused}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                  inputContainerStyle={styles.inputContainerStyle}
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                onPress={this.goBack}
                title={'Save Changes'}
                height={48}
                rounded
              />
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
