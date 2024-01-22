import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DateData } from 'react-native-calendars';
import { useRecoilValue } from 'recoil';
import { totalDate } from '../data/common';
import { diaryListState } from '../data/dataState';
import Emotion from './Emotion';

interface DayComponentProps {
  date: DateData | undefined;
}

const DayComponent: FC<DayComponentProps> = ({date}) => {
  // Logic
  const diaryList = useRecoilValue(diaryListState);
  const year = date?.year;
  const month = date?.month;
  const day = date?.day;

  const resultDate = totalDate(year!!, month!!, day!!);
  const existDate = diaryList.find(
    diary => diary.date.totalDate === resultDate,
  );

  const isSelected = !!existDate;

  // View
  return (
    <View className="flex-1 w-full">
      <View className="items-center">
        <TouchableOpacity>
          <Text className="text-black">{date?.day}</Text>
        </TouchableOpacity>
      </View>
      {isSelected && (
        <View className="flex-1 items-center justify-center">
          <Emotion data={existDate?.mood} size="small" />
        </View>
      )}
    </View>
  );
};

export default DayComponent;
