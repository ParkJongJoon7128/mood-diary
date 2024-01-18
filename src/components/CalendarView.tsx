import React from 'react';
import { View } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import { CalendarLocales } from '../public/config/config';
import { CalendarTheme } from '../public/theme/theme';
import dayComponent from './dayComponent';

LocaleConfig.locales['kr'] = CalendarLocales;
LocaleConfig.defaultLocale = 'kr';

const CalendarView = () => {
  // Logic

  // View
  return (
    <View className="flex-1">
      <CalendarList
        className="flex-1"
        horizontal={true}
        pagingEnabled={true}
        monthFormat={'yyyy년 MM월'}
        dayComponent={dayComponent}
        theme={CalendarTheme}
      />
    </View>
  );
};

export default CalendarView;
