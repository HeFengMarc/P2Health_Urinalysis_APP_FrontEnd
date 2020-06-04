/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import remove from "lodash/remove";

// import components
import EmptyState from "../../components/emptystate/EmptyState";
import NotificationItem from "../../components/cards/NotificationItem";

// import colors
import Colors from "../../theme/colors";

// NotificationsA Config
const EMPTY_STATE_ICON = "bell-ring-outline";

// NotificationsA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  productsContainer: {
    paddingTop: 8
  }
});

// NotificationsA
export default class NotificationsA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [
        {
          notificationId: 5,
          type: "delivered",
          title: "YooHoo! Your order is delivered",
          text: "We hope you like it! Please send us your feedback and rate.",
          meta: "just now",
          readOut: false
        },
        {
          notificationId: 0,
          type: "failed_delivery",
          title: "Oops. Failed attempt delivery",
          text: "You were not available at the time of the first delivery attempt. A second attempt will be made. Please contact us at +1-234-567-8910.",
          meta: "3 min ago",
          readOut: false
        },
        {
          notificationId: 1,
          type: "ready_for_delivery",
          title: "Your order is out for delivery",
          text: "We are at your doorstep. Open it to us.",
          meta: "5 min ago",
          readOut: false
        },
        {
          notificationId: 2,
          type: "on_the_way",
          title: "Your order is on the way",
          text: "Good news! Your order is arriving today. Expected to be delivered by 6:30 pm.",
          meta: "21 min ago",
          readOut: false
        },
        {
          notificationId: 3,
          type: "exception",
          title: "Delivery exception",
          text: "Your order encounters a delivery exception. Please contact us at +1-234-567-8910.",
          meta: "1 day ago",
          readOut: true
        },
        {
          notificationId: 4,
          type: "delivered",
          title: "YooHoo! Your order is delivered",
          text: "We hope you like it! Please send us your feedback and rate.",
          meta: "5 days ago",
          readOut: true
        }
      ]
    };
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  swipeoutOnPressRemove = item => () => {
    let { notifications } = this.state;
    const index = notifications.indexOf(item);

    notifications = remove(notifications, n => notifications.indexOf(n) !== index);

    this.setState({
      notifications
    });
  };

  keyExtractor = item => item.notificationId.toString();

  renderItem = ({ item, index }) => (
    <NotificationItem
      activeOpacity={0.85}
      type={item.type}
      title={item.title}
      text={item.text}
      meta={item.meta}
      // onPress={this.navigateTo("")}
      readOut={item.readOut}
      swipeoutOnPressRemove={this.swipeoutOnPressRemove(item)}
    />
  );

  render() {
    const { notifications } = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.container}>
          {
            notifications.length === 0 ? (
              <EmptyState
                showIcon
                iconName={EMPTY_STATE_ICON}
                title="Your Notifications List is Empty"
                message="Stay tuned! Notifications about your orders will show up here"
              />
            ) : (
              <FlatList
                data={notifications}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                contentContainerStyle={styles.productsContainer}
              />
            )
          }
        </View>
      </SafeAreaView>
    );
  }
}
