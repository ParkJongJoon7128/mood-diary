import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DateData } from 'react-native-calendars';
import { DayState } from 'react-native-calendars/src/types';
import Snackbar from 'react-native-snackbar';
import { colors } from 'react-native-tailwindcss';
import { useRecoilValue } from 'recoil';
import { totalDate } from '../data/common';
import { diaryListState } from '../data/dataState';

interface CalendarSelectDayComponentProps {
  date?: DateData | undefined;
  state?: DayState | undefined;
  handleChange?: (value: any | null) => void;
}

const CalendarSelectDayComponent: FC<CalendarSelectDayComponentProps> = ({
  date,
  state,
  handleChange,
}) => {
  //Logic
  const diaryList = useRecoilValue(diaryListState);
  const year = date?.year;
  const month = date?.month;
  const day = date?.day;

  const resultDate = totalDate(year!!, month!!, day!!);
  const existDate = diaryList.find(
    diary => diary.date.totalDate === resultDate,
  );
  const isSelected = !!existDate;

  const showToast = () => {
    Snackbar.show({
      text: '해당 날짜에는 일기가 존재해 입력이 불가능 합니다.',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'white',
      textColor: colors.black,
      action: {
        text: '닫기',
        textColor: 'red',
        onPress: () => { Snackbar.dismiss() },
      },
    })
  };

  const addDiary = (date: DateData | undefined) => {
    isSelected ? showToast() : handleChange(date);
  };

  //View
  return (
    <View className="flex p-2">
      <TouchableOpacity onPress={() => addDiary(date)}>
        <Text
          className={`text-black ${isSelected ? 'opacity-20' : 'opacity-100'} ${
            state === 'today' ? 'text-blue-500' : 'text-black'
          }`}>
          {date?.day}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarSelectDayComponent;
