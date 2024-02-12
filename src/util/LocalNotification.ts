import notifee, {
  AndroidBadgeIconType,
  AndroidImportance,
  AndroidNotificationSetting,
  AndroidVisibility,
  AuthorizationStatus,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { notiAlarmComment } from '../data/common';
import { DateType, MoodType } from '../lib/type';

export const requestUserPermission = async () => {
  const settings = await notifee.requestPermission();

  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    console.log('Permission settings:', settings);
    return true;
  } else {
    console.log('User declined permissions');
    return false;
  }
};

export const requestAndroidPermissionSettings = async () => {
  const settings = await notifee.getNotificationSettings();

  if (settings.android.alarm !== AndroidNotificationSetting.ENABLED) {
    // 안드로이드에서 알람 권한을 설정한다
    await notifee.openAlarmPermissionSettings();
  }
};

// Create a Trigger Notification
export const onCreateTriggerNotification = async (resultDiary: {
  diary: string;
  id: number;
  mood: MoodType;
  date: DateType;
}) => {
  const totalDate = resultDiary.date.totalDate;
  const date = new Date(totalDate);
  date.setHours(8, 0, 0, 0);

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'cheerup_message',
    name: '응원 메세지 알림',
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
    vibration: true,
    vibrationPattern: [300, 500],
    badge: true,
  });

  // Create a trigger
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    // timestamp: date.setDate(date.getDate() + 1),
    timestamp: date.setDate(date.getDate()),
    alarmManager: {
      allowWhileIdle: true,
    },
  };

  // Required for iOS
  // See https://notifee.app/react-native/docs/ios/permissions
  await notifee.requestPermission();

  // Display a notification
  await notifee
    .createTriggerNotification(
      {
        title: '오늘의 알림',
        body: showNotiMessage(resultDiary.mood.id),
        android: {
          channelId,
          pressAction: {
            id: channelId,
            launchActivity: 'com.testapp.MainActivity',
          },
          importance: AndroidImportance.HIGH,
          visibility: AndroidVisibility.PUBLIC,
          vibrationPattern: [300, 500],
          groupSummary: true,
          groupId: 'cheerup_group',
          showTimestamp: true,
          largeIcon: 'ic_launcher',
          badgeIconType: AndroidBadgeIconType.SMALL,
        },
        ios: {
          foregroundPresentationOptions: {
            badge: true,
            sound: true,
            banner: true,
            list: true,
          },
        },
      },
      trigger,
    )
    .then(() => {
      notifee
        .getTriggerNotificationIds()
        .then(ids => console.log('All trigger notifications: ', ids));
    })
    .then(() => {
      notifee
        .incrementBadgeCount()
        .then(() => notifee.getBadgeCount())
        .then(count => console.log('Badge count incremented by 1 to: ', count));
    });
};

export const showNotiMessage = (id: number) => {
  switch (id) {
    case 1:
      return notiAlarmComment[id];
      break;
    case 2:
      return notiAlarmComment[id];
      break;
    case 3:
      return notiAlarmComment[id];
      break;
    case 4:
      return notiAlarmComment[id];
      break;
    case 5:
      return notiAlarmComment[id];
      break;
    case 6:
      return notiAlarmComment[id];
      break;
    case 7:
      return notiAlarmComment[id];
      break;
    case 8:
      return notiAlarmComment[id];
      break;
  }
};
