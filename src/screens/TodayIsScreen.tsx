import React from 'react';
import {View} from 'react-native';
import EmotionSelect from '../components/EmotionSelect';
import {moods} from '../data/common';
import {MoodType} from '../lib/type';
import {useRecoilState} from 'recoil';
import {diaryState} from '../data/dateState';

const TodayIsScreen = () => {
  // Logic
  const [diary, setDiary] = useRecoilState(diaryState);

  const handleEmotionChange = (mood: MoodType) => {
    console.log('🚀 : data ==> ', mood);
    const result = {...diary, mood};
    setDiary(result);
  };

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <EmotionSelect
        title="오늘 하루는 어땠니?"
        moods={moods}
        emotionChange={handleEmotionChange}
        diary={diary}
        setDiary={setDiary}
      />
    </View>
  );
};

export default TodayIsScreen;
