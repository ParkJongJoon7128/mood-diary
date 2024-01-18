import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Date from '../components/Date';
import DiaryInput from '../components/DiaryInput';
import Emotion from '../components/Emotion';
import Title from '../components/Title';
import { diaryListState, diaryState } from '../data/dataState';

const MoodScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [diary, setDiary] = useRecoilState(diaryState);
  const [diaryValue, setDiaryValue] = useState('');
  const [isReset, setIsReset] = useState(false);

  const {date, mood} = diary;
  const setDiaryList = useSetRecoilState(diaryListState);

  const handleSubmit = (event: GestureResponderEvent) => {
    event.preventDefault();

    // 내부 input
    const resultDiary = {...diary, diary: diaryValue};
    setDiary(resultDiary);
    setDiaryValue('');
    setIsReset(true);

    // diaryList 업데이트
    setDiaryList(prev => [...prev, resultDiary]);
    navigation.navigate('Home');
  };

  const handleChange = (value: string) => {
    setDiaryValue(value);
    isReset && setIsReset(false);
  };

  return (
    // View
    <View className="flex-1 p-4">
      <View className="border border-mood-gray-700 rounded-xl p-5">
        <View>
          <Date date={date.totalText} />
        </View>

        <View className="items-center justify-center">
          <View className="p-5">
            <Emotion data={mood} size="large" />
            <View className="p-5">
              <Title mainTitle={mood.description} />
            </View>
          </View>
          <DiaryInput
            isReset={isReset}
            setIsReset={setIsReset}
            onChange={handleChange}
          />
        </View>
      </View>

      <View className="flex-1 items-center justify-center pt-8">
        <TouchableOpacity onPress={handleSubmit}>
          <Text>일기 저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoodScreen;
