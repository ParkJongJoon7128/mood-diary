import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from 'react-native-calendars/src/types';
import { colors } from 'react-native-tailwindcss';

export const HomeScreenDayComponentTheme: Theme = {
  textDayFontSize: 10,
  backgroundColor: 'transparent',
  calendarBackground: 'transparent',
  //   @ts-expect-error
  'stylesheet.calendar.header': {
    week: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 4,
      borderBottomColor: colors.gray200,
      borderBottomWidth: 1,
      marginBottom: 4,
    } as ViewStyle,
    dayHeader: {
      width: 42,
      fontSize: 10,
      fontFamily: 'spoqaBold',
      color: colors.black,
      textAlign: 'center',
    } as TextStyle,
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 12,
      alignItems: 'center',
    } as ViewStyle,
    monthText: {
      fontSize: 16,
      color: colors.black,
      marginHorizontal: 8,
    } as ViewStyle,
    dayTextAtIndex0: {
      color: colors.red500,
    },
    dayTextAtIndex6: {
      color: colors.blue500,
    },
  },
  'stylesheet.calendar.main': {
    container: {flex: 1} as ViewStyle,
    monthView: {flex: 1} as ViewStyle,
    dayContainer: {flex: 1, alignItems: 'center'} as ViewStyle,
    week: {
      paddingBottom: 4,
      borderBottomColor: colors.gray200,
      borderBottomWidth: 1,
      marginBottom: 4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: 1,
    } as ViewStyle,
  },
  'stylesheet.calendar-list.main': {
    flatListContainer: {flex: 1} as ViewStyle,
    calendar: {paddingHorizontal: 16} as ViewStyle,
  },
};
