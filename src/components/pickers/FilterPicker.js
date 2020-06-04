/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import Color from 'color';

// import components
import TouchableItem from '../TouchableItem';

// import colors
import Colors from '../../theme/colors';

// FilterPicker Config
const PICKED_BACKGROUND_COLOR = Color(Colors.primaryColor).alpha(0.24);
const PICKED_TEXT_COLOR = Colors.primaryColorDark;

// FilterPicker Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 8,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(35, 47, 52, 0.08)',
    overflow: 'hidden',
  },
  picker: {flex: 1, justifyContent: 'center'},
  pickerInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    top: -1,
    color: 'rgb(35, 47, 52)',
    paddingHorizontal: 16,
  },
});

// FilterPicker Props
type Props = {
  activeOpacity: number,
  color: string,
  onPress: () => void,
  picked: boolean,
  title: string,
  titleStyle: TextStyle,
};

// FilterPicker
const FilterPicker = ({
  activeOpacity,
  color,
  onPress,
  picked,
  title,
  titleStyle,
}: Props) => (
  <View
    style={[
      styles.container,
      color && {backgroundColor: color},
      picked && {backgroundColor: PICKED_BACKGROUND_COLOR},
    ]}>
    <TouchableItem
      onPress={onPress}
      activeOpacity={activeOpacity || 0.8}
      style={styles.picker}>
      <View style={styles.pickerInner}>
        <Text
          style={[
            styles.title,
            titleStyle,
            picked && {color: PICKED_TEXT_COLOR},
          ]}>
          {title !== undefined ? title : 'Country name'}
        </Text>
      </View>
    </TouchableItem>
  </View>
);

export default FilterPicker;
