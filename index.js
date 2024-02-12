/**
 * @format
 */

import notifee, { EventType } from '@notifee/react-native';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

notifee.onBackgroundEvent(async ({type, detail}) => {
  const {notification, pressAction} = detail;

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
    notifee
            .decrementBadgeCount()
            .then(() => notifee.getBadgeCount())
            .then(count =>
              console.log('Badge count decremented by 1 to: ', count),
            );
    console.log('User pressed the "Mark as read" action.');

    // Remove the notification
    await notifee.cancelNotification(notification.id);
  } else if (type === EventType.DISMISSED) {

    notifee
            .decrementBadgeCount()
            .then(() => notifee.getBadgeCount())
            .then(count =>
              console.log('Badge count decremented by 1 to: ', count),
            );
    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});

AppRegistry.registerComponent(appName, () => App);
