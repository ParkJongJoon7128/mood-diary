import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DateData } from 'react-native-calendars';
import { useRecoilValue } from 'recoil';
import { totalDate } from '../data/common';
import { diaryListState } from '../data/dataState';
import Emotion from './Emotion';

interface dayComponentProps {
  date: DateData | undefined;
}

const dayComponent: FC<dayComponentProps> = ({date}) => {
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
    <View className="flex-1">
      <View className="flex-1 items-center">
        <TouchableOpacity>
          <Text className="text-black">{date?.day}</Text>
        </TouchableOpacity>
      </View>
      {isSelected && (
        <View className="flex-1 pb-8 items-center justify-center">
          <Emotion data={existDate?.mood} size="small" />
        </View>
      )}
    </View>
  );
};

export default dayComponent;
