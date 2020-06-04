/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component, Fragment} from 'react';
import {
  I18nManager, Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import remove from 'lodash/remove';

// import components
import ActionProductCardHorizontal from '../../components/cards/ActionProductCardHorizontal';
import TouchableItem from "../../components/TouchableItem";
import EmptyState from '../../components/emptystate/EmptyState';
import {Heading6, SmallText} from '../../components/text/CustomText';
import Divider from '../../components/divider/Divider';

// import colors
import Colors from '../../theme/colors';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";
import Icon from "../../components/icon/Icon";
import RNPickerSelect from 'react-native-picker-select';


// FavoritesA Config
const isRTL = I18nManager.isRTL;
const EMPTY_STATE_ICON = 'star-outline';
const CAMERA_ICON = Platform.OS === 'ios' ? 'ios-camera' : 'md-camera';
const CAMERA_SIZE =  200;
const TUTORIAL_ICON = Platform.OS === 'ios' ? 'ios-videocam' : 'md-videocam';
const RECORD_ICON = Platform.OS === 'ios' ? 'ios-document' : 'md-document';
const ICON_SIZE = 64;

// FavoritesA Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  UpperView:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UpperViewCamera:{
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UpperViewRecord:{
    flexDirection:'row',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomView:{
    backgroundColor:Colors.white,
    flex: 2,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconContainer:{
    flex:1,
    alignItems: 'center',
  },
  StripContainer:{
    alignItems: 'center',
    paddingVertical: 16,
  },
  RecordContainer:{
    flex:1,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    paddingHorizontal: 16,
    textAlign: 'left',
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 24,
    fontWeight: '700',
    textAlign: 'left',
  },
  BottomViewContainer:{
    backgroundColor:Colors.white,
    flex: 2,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

// FavoritesA
export default class FavoritesA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //TODO: link the APP state with the record receive from backend
      record: {
        totalRecord: 0,
        normalRecord: 0,
        abnormalRecord: 0,
        DatesRecord:{ },
      },
      striptype: 1,
    };
  }

  sendUsername = async uri => {
    let ip = '76.28.196.133';
    let timeUrl = 'http://' + ip + ':5000/testing_page';
    // var now = Date.now();
    let user = { username:this.props.route.params.user};
    // let user = {username:'JJJ'}

    try {
      let res = await fetch(timeUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
        }),
      });
      // console.log(res);
      return res;
    } catch (e) {
        console.error(e);
    }
  };

  componentDidMount() {
    this._loadInitialState().done();
  }

  async _loadInitialState() {
    try {
      let res = await this.sendUsername();
      let result = await res.json();
      // console.log(result.markedDates);
      if (res !== null ) {
        this.setState({record:
          {totalRecord: result.total_num,
            normalRecord: result.normal_num,
            abnormalRecord: result.abnormal_num,
            DatesRecord: result.markedDates,
          }
        });
        console.log(this.state.record.DatesRecord);
      }
    } catch (error) {
      console.error('Error:AsyncStorage:', error.message);
    }
  };

  selectStriptype =(value) =>{
    this.setState({...this.state,value});
  };


  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    if(screen == 'RecordPage'){
      navigation.navigate(screen,  {user:this.props.route.params.user, markedDates: this.state.record.DatesRecord});
    }else{
      console.log('testing page striptype::', this.state.value);
      navigation.navigate(screen,  {user:this.props.route.params.user, striptype: this.state.value});
    }
  };

  render() {
    // this.receiveNum();
    // console.log('hello',this.state.record.totalRecord);
    const strip_placeholder = {
      label: 'Select your urine strip',
      value: null,
      color: Colors.primaryColor,
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Testing</Heading6>
        </View>

        <View style={styles.UpperView}>

            <View style={styles.UpperViewCamera} >
              <TouchableItem onPress={this.navigateTo('DemoStrip')}>
                <Icon name={CAMERA_ICON} size={CAMERA_SIZE} color={'#4b2e83'} />
              </TouchableItem>
            </View>
          <View style={styles.UpperViewRecord}>
            <View style={styles.RecordContainer}>
              <SmallText>
                Total Record
              </SmallText>
              <SmallText>
                {this.state.record.totalRecord}
              </SmallText>
            </View>
            <View style={styles.RecordContainer}>
              <SmallText>
                Normal Record
              </SmallText>
              <SmallText>
                {this.state.record.normalRecord}
              </SmallText>
            </View>
            <View style={styles.RecordContainer}>
              <SmallText>
                Abnormal Record
              </SmallText>
              <SmallText>
                {this.state.record.abnormalRecord}
              </SmallText>
            </View>
          </View>
        </View>

        <View style={styles.BottomViewContainer}>

        <RNPickerSelect
          onValueChange={(value) => {this.selectStriptype(value);}}
          items={[
            { label: 'A. Mission 14 Indicator Urine Strip', value: '1' },
            { label: 'B. JNW Direct UTI Urine Strip', value: '3' },
            { label: 'C. Mission 10 Indicator Urine Strip', value: '2' },
          ]}
          placeholder = {strip_placeholder}
          style={pickerSelectStyles}
        />

          <View style={styles.BottomView}>
            <View

            style={styles.IconContainer}>
              {/*TODO: add tutorial page*/}
              {/*<TouchableItem onPress={this.navigateTo('TutorialPage')}>*/}
              <TouchableItem onPress={this.navigateTo('Tutorial')}>
                <Icon name={TUTORIAL_ICON} size={ICON_SIZE} color={'#4b2e83'} />
              </TouchableItem>
              {/*</TouchableItem>*/}
              <SmallText>
                Tutorial
              </SmallText>
            </View>
          <View style={styles.IconContainer}>
            <TouchableItem onPress={this.navigateTo('RecordPage')}>
            <Icon name={RECORD_ICON} size={ICON_SIZE} color={'#4b2e83'} />
            </TouchableItem>
            <SmallText>
              Historical Record
            </SmallText>
          </View>
        </View>
        </View>


      </SafeAreaView>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: Colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 56,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: Colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 56,
  },
});
