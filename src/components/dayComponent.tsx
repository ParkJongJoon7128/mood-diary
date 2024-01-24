import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const onClickEmogi = (totalDate: string) => {
    const selectedDiary = diaryList.find(
      diary => diary.date.totalDate === totalDate,
    );
    navigation.navigate('Item', {itemId: selectedDiary?.id});
  };

  // View
  return (
    <View className="flex-1 w-full">
      <View className="items-center">
        <Text className="text-black">{date?.day}</Text>
      </View>
      {isSelected && (
        <View className="flex-1 items-center justify-center">
          <TouchableOpacity
            onPress={() => onClickEmogi(existDate.date.totalDate)}>
            <Emotion data={existDate?.mood} size="small" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DayComponent;
