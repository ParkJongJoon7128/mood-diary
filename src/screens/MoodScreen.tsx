import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  GestureResponderEvent,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {diaryState} from '../data/dateState';
import Emotion from '../components/Emotion';
import Date from '../components/Date';
import DiaryInput from '../components/DiaryInput';

const MoodScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [diary, setDiary] = useRecoilState(diaryState);
  const [diaryValue, setDiaryValue] = useState('');
  const [isReset, setIsReset] = useState(false);

  const {date, mood} = diary;

  const handleSubmit = (event: GestureResponderEvent) => {
    event.preventDefault();
    setDiary(prev => ({...prev, diary: diaryValue}));
    setDiaryValue('');
    setIsReset(true);
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
          <Date date={date} />
        </View>

        <View className="items-center justify-center">
          <View className="p-5">
            <Emotion data={mood} />
          </View>

          <DiaryInput
            onChange={handleChange}
            isReset={isReset}
            setIsReset={setIsReset}
          />
        </View>
      </View>

      <View className="flex- 1 items-center justify-center pt-8">
        <TouchableOpacity onPress={handleSubmit}>
          <Text>일기 저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoodScreen;
