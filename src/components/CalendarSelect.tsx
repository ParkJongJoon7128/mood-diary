import React, {FC, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {View} from 'react-native';
import {daysOfWeek} from '../data/common';
import {DiaryType} from '../lib/type';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface CalendarSelectProps {
  onClose: () => void;
  dateChange: (date: String) => void;
}

const CalendarSelect: FC<CalendarSelectProps> = ({onClose, dateChange}) => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [selected, setSelected] = useState('');

  const getDaysOfWeek = (year: number, month: number, day: number) => {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    const dayText = daysOfWeek[dayOfWeek];

    return dayText;
  };

  const handleChange = (value: any | null) => {
    const {year: year, month: month, day: day} = value;
    const resultDate = `${year}년 ${month}월 ${day}일 ${getDaysOfWeek(
      year,
      month,
      day,
    )}`;
    dateChange(resultDate);
    onClose();
    navigation.navigate('Mood');
  };

  // View
  return (
    <View className="flex-1 justify-center w-full">
      <Calendar
        className="pt-2 pb-2"
        onDayPress={data => {
          setSelected(data.dateString);
          handleChange(data);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e',
        }}
        monthFormat={'M월'}
      />
    </View>
  );
};

export default CalendarSelect;
