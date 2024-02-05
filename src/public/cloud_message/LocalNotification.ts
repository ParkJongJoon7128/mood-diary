import notifee, {
  AuthorizationStatus,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { Platform } from 'react-native';
import { useRecoilValue } from 'recoil';
import { diaryListState } from '../../data/dataState';

// Permission Setting for IOS
export const requestPermission = async () => {
  const settings = await notifee.requestPermission();

  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    console.log(
      Platform.OS === 'android'
        ? `'🚀 : Permission settings[Android] ==> `
        : `'🚀 : Permission settings[IOS] ==> `,
      settings,
    );
  } else {
    console.log(
      Platform.OS === 'android'
        ? `'User declined permissions[Android] ==> `
        : `'User declined permissions[IOS] ==> `,
      settings,
    );
  }
};

// Show a notification
export const onDisplayNotification = async () => {
  const diaryList = useRecoilValue(diaryListState);

  const totalDate = diaryList.map(item => item.date.totalDate);
  const resultDate = totalDate.map(item => {
    const date = new Date(item);
    date.setHours(8, 0, 0, 0);
    return date;
  });

  // Create a time-based trigger
  const trigger: TimestampTrigger[] = resultDate.map(date => {
    return {
      type: TriggerType.TIMESTAMP,
      timestamp: date.setDate(date.getDate() + 1),
      alarmManager: {
        allowWhileIdle: true,
      },
    };
  });

  // Create a channel (required for Android)
  const channelID = await notifee.createChannel({
    id: 'cheerup_message',
    name: '응원 메세지 알림',
  });

  // Display a notification
  await notifee.displayNotification(
    {
      title: '오늘의 알림',
      body: 'test',
      android: {
        channelId: channelID,
        pressAction: {
          id: channelID,
        },
      },
    },
    trigger,
  );
};

// const moodID = diaryList.map(item => item.mood.id);

// const date = totalDate.map(date => {
//   const dateObj = new Date(date);
//   const year = dateObj.getFullYear();
//   const month = dateObj.getMonth() + 1;
//   const day = dateObj.getDate();

//   dateObj.setHours(year);
//   dateObj.setMinutes(month);

//   return {year, month, day};
// });

// const year = date.map(date => date.year);
// const month = date.map(date => date.month);
// const day = date.map(date => date.day);

// // Create a time-based trigger
// const trigger: TimestampTrigger ={
//   type: TriggerType.TIMESTAMP,
//   timestamp: date.getTime(),
//   alarmManager: {
//     allowWhileIdle: true
//   }
// }
