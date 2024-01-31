import React from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { HomeScreenDayComponentTheme } from '../public/theme/HomeScreenDayComponentTheme';
import HomeScreenDayComponent from './HomeScreenDayComponent';
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
        dayComponent={HomeScreenDayComponent}
        theme={HomeScreenDayComponentTheme}
      />
    </View>
  );
};

export default CalendarView;
