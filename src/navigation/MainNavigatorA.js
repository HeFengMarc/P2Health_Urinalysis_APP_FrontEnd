/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import components
import HeaderIconButton from '../components/navigation/HeaderIconButton';

// import Onboarding screen
import Onboarding from '../screens/onboarding/OnboardingA';

// import Welcome screen
import Welcome from '../screens/welcome/WelcomeA';

// import CameraPage screen
import CameraPage from '../screens/camera/cameraPage';

 // import RecordPage screen
import RecordPage from '../screens/record/record';

import ResultPage from '../screens/resultpage/resultPage';

// import SignUp screen
import SignUp from '../screens/signup/SignUpA';

// import ProductIntroduction screen
import ProductIntroduction from '../screens/productintroduction/ProductIntroductionA';

import UrinalysisTypes from '../screens/urinalysistypes/UrinalysisTypesA';

import UrineDeviceIntro from '../screens/urinedeviceintro/UrineDeviceIntroA';
import NakedEyesIntro from '../screens/nakedeyesintro/NakedEyesIntroA';
import MobileAPPIntro from '../screens/mobileappintro/MobileAPPIntroA';

import TestingPage from '../screens/testingpage/TestingPageA';

import IndicatorIntroduction from '../screens/indicatorintroduction/IndicatorIntroductionA';

import Tutorial from '../screens/tutorial/TutorialA';
import VideoTutorial from '../screens/tutorial/VideoTutorialA';
import PictureTutorial from '../screens/tutorial/PictureTutorialA';
import FunctionTutorial from '../screens/tutorial/FunctionTutorial';
import OperationTutorial from '../screens/tutorial/OperationTutorial';


import AlbuminInfo from '../screens/indicatorinfo/AlbuminInfo';
import AscorbicAcidInfo from '../screens/indicatorinfo/AscorbicAcidInfo';
import BilirubinInfo from '../screens/indicatorinfo/BilirubinInfo';
import BloodInfo from '../screens/indicatorinfo/BloodInfo';
import CalciumInfo from '../screens/indicatorinfo/CalciumInfo';
import CreatineInfo from '../screens/indicatorinfo/CreatineInfo';
import GlucoseInfo from '../screens/indicatorinfo/GlucoseInfo';
import KetoneInfo from '../screens/indicatorinfo/KetoneInfo';
import LeukocyteInfo from '../screens/indicatorinfo/LeukocyteInfo';
import NitriteInfo from '../screens/indicatorinfo/NitriteInfo';
import ProteinInfo from '../screens/indicatorinfo/ProteinInfo';
import PHLevelInfo from '../screens/indicatorinfo/PHLevelInfo';
import SpecificGravityInfo from '../screens/indicatorinfo/SpecificGravityInfo';
import UrobilinogenInfo from '../screens/indicatorinfo/UrobilinogenInfo';

import MissionInfo from '../screens/missioninfo/MissionInfoA';
import Mission10Info from '../screens/mission10info/Mission10Info';
import JNWInfo from '../screens/jnwinfo/JNWInfo';

import ColorChartInfo from '../screens/colorchartinfo/ColorChartInfo';


// import Verification screen
import Verification from '../screens/verification/VerificationA';

// import SignIn screen
import SignIn from '../screens/signin/SignInA';

import DemoStrip from '../screens/demostrip/DemoStrip';



// import TermsConditions screen
import TermsConditions from '../screens/terms/TermsConditionsA';

// import HomeNavigator
import HomeNavigator from './HomeNavigatorA';





// import EditProfile screen
import EditProfile from '../screens/profile/EditProfileA';

// import DeliveryAddress screen
import DeliveryAddress from '../screens/address/DeliveryAddressA';

// import AddAddress screen
import AddAddress from '../screens/address/AddAddressA';

// import EditAddress screen
import EditAddress from '../screens/address/EditAddressA';



// import AddCreditCard screen
import AddCreditCard from '../screens/payment/AddCreditCardA';

// import Notifications screen
import Notifications from '../screens/notifications/NotificationsA';



// import colors
import Colors from '../theme/colors';

// MainNavigatorA Config
const SAVE_ICON = Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark';

// create stack navigator
const Stack = createStackNavigator();

// MainNavigatorA
function MainNavigatorA() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardOverlayEnabled: false,
          headerStyle: {
            elevation: 1,
            shadowOpacity: 0,
          },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: Colors.onBackground,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
          options={{
            title: 'Result Page',}}
        />
        <Stack.Screen
          name="DemoStrip"
          component={DemoStrip}
          options={{
            title: '',}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Create Account',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: 'Sign In',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="ProductIntroduction"
          component={ProductIntroduction}
          options={{
            title: 'Terms and Conditions',
          }}
        />
        <Stack.Screen
          name="UrinalysisTypes"
          component={UrinalysisTypes}
          options={{
            title: 'Urinalysis Types',
          }}
        />
        <Stack.Screen
          name="UrineDeviceIntro"
          component={UrineDeviceIntro}
          options={{
            title: 'Operation Tutorial',
          }}
        />
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
          options={{
            title: 'Tutorial',
          }}
        />
        <Stack.Screen
          name="FunctionTutorial"
          component={FunctionTutorial}
          options={{
            title: 'APP Functionality Tutorial',
          }}
        />
        <Stack.Screen
          name="OperationTutorial"
          component={OperationTutorial}
          options={{
            title: 'Operation Tutorial',
          }}
        />
        <Stack.Screen
             name="CameraPage"
             component={CameraPage}
             options={{
                 title: 'Camera Page',
             }}
         />

         <Stack.Screen
           name="RecordPage"
           component={RecordPage}
           options={{
             title: 'Record Page',
           }}
         />
        <Stack.Screen
          name="VideoTutorial"
          component={VideoTutorial}
          options={{
            title: 'Video Tutorial',
          }}
        />
        <Stack.Screen
          name="PictureTutorial"
          component={PictureTutorial}
          options={{
            title: 'Picture Tutorial',
          }}
        />
        <Stack.Screen
          name="AlbuminInfo"
          component={AlbuminInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="AscorbicAcidInfo"
          component={AscorbicAcidInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="BilirubinInfo"
          component={BilirubinInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="BloodInfo"
          component={BloodInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="CalciumInfo"
          component={CalciumInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="CreatineInfo"
          component={CreatineInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="GlucoseInfo"
          component={GlucoseInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="KetoneInfo"
          component={KetoneInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="LeukocyteInfo"
          component={LeukocyteInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="NitriteInfo"
          component={NitriteInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="ProteinInfo"
          component={ProteinInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="PHLevelInfo"
          component={PHLevelInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="SpecificGravityInfo"
          component={SpecificGravityInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="UrobilinogenInfo"
          component={UrobilinogenInfo}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="MissionInfo"
          component={MissionInfo}
          options={{
            title: 'Mission 14-Indicators',
          }}
        />
        <Stack.Screen
          name="Mission10Info"
          component={Mission10Info}
          options={{
            title: 'Mission 10-Indicators',
          }}
        />
        <Stack.Screen
          name="JNWInfo"
          component={JNWInfo}
          options={{
            title: 'JNW Direct UTI',
          }}
        />
        <Stack.Screen
          name="ColorChartInfo"
          component={ColorChartInfo}
          options={{
            title: 'Color Chart Information',
          }}
        />

        <Stack.Screen
          name="NakedEyesIntro"
          component={NakedEyesIntro}
          options={{
            title: 'Naked Eyes Intro',
          }}
        />
        <Stack.Screen
          name="MobileAPPIntro"
          component={MobileAPPIntro}
          options={{
            title: 'Mobile APP Intro',
          }}
        />
        <Stack.Screen
          name="TestingPage"
          component={TestingPage}
          options={{
            title: 'Testing Page',
          }}
        />
        <Stack.Screen
          name="IndicatorIntroduction"
          component={IndicatorIntroduction}
          options={{
            title: 'Indicator Introduction',
          }}
        />

        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{
            title: 'Terms and Conditions',
          }}
        />
        <Stack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{headerShown: false}}
        />




        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={({navigation}) => ({
            title: 'Edit Profile',
            headerRight: () => (
              <HeaderIconButton
                onPress={() => navigation.goBack()}
                name={SAVE_ICON}
                color={Colors.primaryColor}
              />
            ),
          })}
        />
        <Stack.Screen
          name="DeliveryAddress"
          component={DeliveryAddress}
          options={({navigation}) => ({
            title: 'Delivery Address',
            headerRight: () => (
              <HeaderIconButton
                onPress={() => navigation.goBack()}
                name={SAVE_ICON}
                color={Colors.primaryColor}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{
            title: 'Add New Address',
          }}
        />
        <Stack.Screen
          name="EditAddress"
          component={EditAddress}
          options={{
            title: 'Edit Address',
          }}
        />

        <Stack.Screen
          name="AddCreditCard"
          component={AddCreditCard}
          options={{
            title: 'Add Credit Card',
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: 'Notifications',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigatorA;
