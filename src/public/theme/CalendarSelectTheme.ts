import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from 'react-native-calendars/src/types';
import { colors } from 'react-native-tailwindcss';

export const CalendarSelectTheme: Theme = {
  //   @ts-expect-error
  'stylesheet.calendar.header': {
    dayTextAtIndex0: {
      color: colors.red500,
    },
    dayTextAtIndex6: {
      color: colors.blue500,
    },
    dayHeader: {
      fontFamily: 'spoqaBold',
      color: colors.black,
    } as TextStyle,
    monthText: {
      fontSize: 16,
      color: colors.black,
    } as ViewStyle,
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 15,
    } as ViewStyle,
  },
  'stylesheet.day.basic': {
    todayText: {
      color: colors.blue500,
    } as TextStyle,
  },
};
