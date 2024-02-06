import notifee, {
  AndroidImportance,
  AndroidNotificationSetting,
  AndroidVisibility,
  AuthorizationStatus,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { useRecoilValue } from 'recoil';
import { diaryListState } from '../data/dataState';

// Permission Setting
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
export const onCreateTriggerNotification = async () => {
  const diaryList = useRecoilValue(diaryListState);

  const moodID = diaryList.map(item => item.mood.id);
  const totalDate = diaryList.map(item => item.date.totalDate);
  const resultDate = totalDate.map(item => {
    const date = new Date(item);
    date.setHours(8, 0, 0, 0);
    return date;
  });

  // Create a channel (required for Android)
  const channelID = await notifee.createChannel({
    id: 'cheerup_message',
    name: '응원 메세지 알림',
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
    vibration: true,
    vibrationPattern: [300, 800],
  });

  // Create a trigger
  const trigger: TimestampTrigger[] = resultDate.map(date => {
    return {
      type: TriggerType.TIMESTAMP,
      timestamp: date.setDate(date.getDate() + 1),
      alarmManager: true,
    };
  });

  // Required for iOS
  // See https://notifee.app/react-native/docs/ios/permissions
  await notifee.requestPermission();

  // Display a notification
  trigger.map(async trigger => {
    await notifee.createTriggerNotification(
      {
        title: '오늘의 알림',
        body: 'test',
        android: {
          channelId: channelID,
          pressAction: {
            id: 'default',
          },
          importance: AndroidImportance.HIGH,
          visibility: AndroidVisibility.PUBLIC,
          vibrationPattern: [300, 800],
          groupSummary: true,
          groupId: 'cheerup_group',
          showTimestamp: true,
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
    );
  });
};

// // Show a Notification
// export const onDisplayNotification = async () => {
//   // Request permissions (required for iOS)
//   await notifee.requestPermission();

//   // Create a channel (required for Android)
//   const channelID = await notifee.createChannel({
//     id: 'cheerup_message',
//     name: '응원 메세지 알림',
//     importance: AndroidImportance.HIGH,
//     visibility: AndroidVisibility.PUBLIC,
//     vibration: true,
//     vibrationPattern: [300, 800],
//   });

//   // Display a notification
//   await notifee.displayNotification({
//     title: '오늘의 알림',
//     body: 'test',
//     android: {
//       channelId: channelID,
//       pressAction: {
//         id: 'default',
//       },
//       importance: AndroidImportance.HIGH,
//       visibility: AndroidVisibility.PUBLIC,
//       vibrationPattern: [300, 800],
//       groupSummary: true,
//       groupId: 'cheerup_group',
//     },
//     ios: {
//       foregroundPresentationOptions: {
//         badge: true,
//         sound: true,
//         banner: true,
//         list: true,
//       },
//     },
//   });
// };
