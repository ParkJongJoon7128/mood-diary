import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useSetRecoilState } from 'recoil';
import { daysOfWeek, totalDate } from '../data/common';
import { diaryState } from '../data/dataState';
import { DateType } from '../lib/type';
import { CalendarSelectTheme } from '../public/theme/CalendarSelectTheme';
import CalendarSelectDayComponent from './CalendarSelectDayComponent';

interface CalendarSelectProps {
  onClose: () => void;
  dateChange: (date: DateType) => void;
}

const CalendarSelect: FC<CalendarSelectProps> = ({onClose, dateChange}) => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const setDiary = useSetRecoilState(diaryState);
  const [selected, setSelected] = useState('');

  const handleChange = (value: any | null) => {
    const {year: year, month: month, day: day} = value;
    const date = new Date(year, month - 1, day).getDay();
    const dayOfWeeks = daysOfWeek[date];

    const totalText = `${year}년 ${month}월 ${day}일 ${dayOfWeeks}`;
    const resultDate: DateType = {
      year: year,
      month: month,
      day: day,
      daysOfWeeks: dayOfWeeks,
      totalDate: totalDate(year, month, day),
      totalText: totalText,
    };

    dateChange(resultDate);
    onClose();
    setRandomID();
    navigation.navigate('Mood');
  };

  const setRandomID = () => {
    const id = new Date().getTime() * 1000 * 60;
    setDiary(prev => ({...prev, id}));
  };

  // View
  return (
    <View>
      <Calendar
        className="pt-2 pb-2"
        monthFormat={'yyyy년 MM월'}
        theme={CalendarSelectTheme}
        onDayPress={data => {
          setSelected(data.dateString);
          handleChange(data);
        }}
        dayComponent={({date, state}) => (
          <CalendarSelectDayComponent
            date={date}
            state={state}
            handleChange={handleChange}
          />
        )}
      />
    </View>
  );
};

export default CalendarSelect;
