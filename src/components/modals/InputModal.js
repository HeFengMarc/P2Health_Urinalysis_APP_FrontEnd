/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// import components
import Button from '../buttons/Button';
import LinkButton from '../buttons/LinkButton';

// import colors, layout
import Colors from '../../theme/colors';
import Layout from '../../theme/layout';

// InputModal Config
const IOS = Platform.OS === 'ios';

// InputModal Styles
const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.52)',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: Layout.SCREEN_WIDTH - 3 * Layout.LARGE_MARGIN,
    borderRadius: 4,
    backgroundColor: Colors.background,
  },
  title: {
    marginBottom: 4,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.primaryText,
  },
  message: {
    marginBottom: 16,
    padding: 8,
    fontWeight: '400',
    color: Colors.secondaryText,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    borderRadius: 4,
  },
  textInput: {
    height: 46,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 12,
    marginBottom: 24,
    width: '100%',
  },
  button: {
    borderRadius: 4,
  },
});

// InputModal Props
type Props = {
  message: string,
  onRequestClose: () => {},
  title: string,
  inputDefaultValue: string,
  inputPlaceholder: string,
  inputKeyboardType:
    | 'default'
    | 'number-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad',
  buttonTitle: string,
  onButtonPress: () => {},
  onClosePress: () => {},
  statusBarColor: string,
  visible: boolean,
};

// InputModal
const InputModal = ({
  message,
  onRequestClose,
  title,
  inputDefaultValue,
  inputPlaceholder,
  inputKeyboardType,
  buttonTitle,
  onButtonPress,
  onClosePress,
  statusBarColor = 'rgba(0, 0, 0, 0.52)',
  visible = false,
}: Props) => (
  <Modal
    animationType="none"
    transparent
    visible={visible}
    onRequestClose={onRequestClose}>
    <StatusBar backgroundColor={statusBarColor} />
    <TouchableWithoutFeedback onPress={onRequestClose}>
      <View style={styles.modalWrapper}>
        <TouchableWithoutFeedback>
          <KeyboardAvoidingView behavior="position" enabled={IOS}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>{title}</Text>

              {message !== '' && message !== undefined && (
                <Text style={styles.message}>{message}</Text>
              )}

              <View style={styles.inputContainer}>
                <TextInput
                  defaultValue={inputDefaultValue}
                  placeholder={inputPlaceholder}
                  keyboardType={inputKeyboardType}
                  style={styles.textInput}
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  onPress={onButtonPress}
                  title={buttonTitle}
                  buttonStyle={styles.button}
                />
              </View>

              <LinkButton
                onPress={onClosePress}
                title={'Close'.toUpperCase()}
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default InputModal;
