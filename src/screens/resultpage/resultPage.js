/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

// import components
import Button from '../../components/buttons/Button';
import {Caption} from '../../components/text/CustomText';

// import colors
import Colors from '../../theme/colors';

// TermsConditionsB Config
const APP_NAME = 'App Name';

// TermsConditionsB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  caption: {
    paddingBottom: 12,
    textAlign: 'left',
  },
  heading: {
    paddingBottom: 16,
    fontWeight: '700',
    fontSize: 16,
    color: Colors.primaryColor,
    letterSpacing: 0.2,
    textAlign: 'left',
    // writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' // iOS
  },
  textBlock: {
    paddingBottom: 24,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primaryText,
    letterSpacing: 0.4,
    textAlign: 'left',
  },

  button: {
    width: '48%',
    height: 73,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 16,
    paddingHorizontal: 24,
  },
});

// TermsConditionsB
export default class TermsConditionsB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      striptype: this.props.route.params.striptype,
    };
  }

  componentDidMount() {
    return fetch('http://76.28.196.133:5000/result_data')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.result,
            },
            function() {}
          );
        console.log('test:', this.state.dataSource);
      })
      .catch(error => {
        console.error(error);
      });
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  render() {
    // console.log(this.state.dataSource);
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }else{
      if(this.state.striptype == 1){
        return (
          <ScrollView>
          <View style={styles.buttonContainer}>
            <Button onPress={this.navigateTo('HomeNavigator')} title={'BACK TO HOMEPAGE'} />
          </View>
          <SafeAreaView style={styles.screenContainer}>
            <StatusBar
              backgroundColor={Colors.primaryColor}
              barStyle="light-content"
            />

            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('LeukocyteInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[0].color}
                title= {"Leukocyte\n       " + this.state.dataSource[0].class}
                outlined
              />

              <Button
                onPress={this.navigateTo('UrobilinogenInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[1].color}
                title= {"Urobilinogen\n        " + this.state.dataSource[1].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('AlbuminInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[2].color}
                title= {"Albumin\n     " + this.state.dataSource[2].class}
                outlined

              />

              <Button
                onPress={this.navigateTo('ProteinInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[3].color}
                title= {"Protein\n    " + this.state.dataSource[3].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('BilirubinInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[4].color}
                title= {"Bilirubin\n      " + this.state.dataSource[4].class}
                outlined


              />

              <Button
                onPress={this.navigateTo('GlucoseInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[5].color}
                title= {"Glucose\n      " + this.state.dataSource[5].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('AscorbicAcidInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[6].color}
                title= {"Ascorbic Acid\n           " + this.state.dataSource[6].class}
                outlined

              />

              <Button
                onPress={this.navigateTo('SpecificGravityInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[7].color}
                title= {"Specific Gravity\n        " + this.state.dataSource[7].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('KetoneInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[8].color}
                title= {"Ketone\n    " + this.state.dataSource[8].class}
                outlined
              />

              <Button
                onPress={this.navigateTo('NitriteInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[9].color}
                title= {"Nitrite\n     " + this.state.dataSource[9].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('CreatineInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[10].color}
                title= {"Creatine\n    " + this.state.dataSource[10].class}
                outlined
              />

              <Button
                onPress={this.navigateTo('PHLevelInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[11].color}
                title= {"pH\n" + this.state.dataSource[11].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('BloodInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[12].color}
                title= {"Blood\n   " + this.state.dataSource[12].class}
                outlined

              />

              <Button
                onPress={this.navigateTo('CalciumInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[13].color}
                title= {"Calcium\n     " + this.state.dataSource[13].class}
                outlined

              />
            </View>
          </SafeAreaView>
          </ScrollView>

        );
      }else if(this.state.striptype == 2){
        return (
          <ScrollView>
          <View style={styles.buttonContainer}>
            <Button onPress={this.navigateTo('HomeNavigator')} title={'BACK TO HOMEPAGE'} />
          </View>
          <SafeAreaView style={styles.screenContainer}>
            <StatusBar
              backgroundColor={Colors.primaryColor}
              barStyle="light-content"
            />

            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('LeukocyteInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[0].color}
                title= {"Leukocyte\n       " + this.state.dataSource[0].class}
                outlined
              />

              <Button
                onPress={this.navigateTo('NitriteInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[1].color}
                title= {"Nitrite\n        " + this.state.dataSource[1].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('UrobilinogenInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[2].color}
                title= {"Urobilinogen\n     " + this.state.dataSource[2].class}
                outlined

              />

              <Button
                onPress={this.navigateTo('ProteinInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[3].color}
                title= {"Protein\n    " + this.state.dataSource[3].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('PHLevelInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[4].color}
                title= {"pHLevel\n      " + this.state.dataSource[4].class}
                outlined
              />

              <Button
                onPress={this.navigateTo('BloodInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[5].color}
                title= {"Blood\n      " + this.state.dataSource[5].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('SpecificGravityInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[6].color}
                title= {"Specific Gravity\n           " + this.state.dataSource[6].class}
                outlined

              />

              <Button
                onPress={this.navigateTo('KetoneInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[7].color}
                title= {"Ketone\n        " + this.state.dataSource[7].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('BilirubinInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[8].color}
                title= {"Bilirubin\n    " + this.state.dataSource[8].class}
                outlined
              />

              <Button
                onPress={this.navigateTo('GlucoseInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[9].color}
                title= {"Glucose\n     " + this.state.dataSource[9].class}
                outlined
              />
            </View>
          </SafeAreaView>
          </ScrollView>
        );

      }else{
        return (
          <ScrollView>
          <View style={styles.buttonContainer}>
            <Button onPress={this.navigateTo('HomeNavigator')} title={'BACK TO HOMEPAGE'} />
          </View>
          <SafeAreaView style={styles.screenContainer}>
            <StatusBar
              backgroundColor={Colors.primaryColor}
              barStyle="light-content"
            />

            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('LeukocyteInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[0].color}
                title= {"Leukocyte\n       " + this.state.dataSource[0].class}
                outlined
              />

              <Button
                onPress={this.navigateTo('NitriteInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[1].color}
                title= {"Nitrite\n        " + this.state.dataSource[1].class}
                outlined
              />
            </View>
            <View style={styles.content}>
              <Button
                onPress={this.navigateTo('PHLevelInfo')}
                buttonStyle={styles.button}
                borderColor={this.state.dataSource[2].color}
                title= {"pHLevel\n     " + this.state.dataSource[2].class}
                outlined

              />
            </View>
          </SafeAreaView>
          </ScrollView>

        );

      }
    }

  }
}
