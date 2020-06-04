/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';

// import components
import TabBadgeIcon from '../components/navigation/TabBadgeIcon';

// import Home screen
import Home from '../screens/home/HomeA';


import TestingPage from '../screens/testingpage/TestingPageA';

// import Settings screen
import Settings from '../screens/settings/SettingsA';

// import colors
import Colors from '../theme/colors';

// HomeNavigator Config

type Props = {
  color: string,
  focused: string,
  size: number,
};

// create bottom tab navigator
const Tab = createBottomTabNavigator();

// HomeNavigator
function HomeNavigator({state, route, navigation}) {
  return (
    console.log('HomeNavigator'),
    console.log(route.params.user),
    // navigation.setParams({username: route.params.user}),

    // console.log(descriptors),
    // console.log(this.props.navigation.state.params),

    <Tab.Navigator
      initialRouteName="Home"
      // intialRouteParams = {route.params.user}
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}: Props) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = `home${focused ? '' : '-outline'}`;
          } else if (route.name === 'Testing') {
            iconName = `camera${focused ? '' : '-outline'}`;
          } else if (route.name === 'Account') {
            iconName = `account${focused ? '' : '-outline'}`;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.secondaryText,
        showLabel: true, // hide labels
        style: {
          backgroundColor: Colors.surface, // TabBar background
        },
      }}>
      <Tab.Screen name="Home" component={Home} initialParams={{user:route.params.user}}/>
      <Tab.Screen name="Testing" component={TestingPage} initialParams={{user:route.params.user}}/>
      <Tab.Screen name="Account" component={Settings} initialParams={{user:route.params.user}}/>
    </Tab.Navigator>
  );
}

export default HomeNavigator;
