import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View} from 'react-native';
import EmotionSelect from '../components/EmotionSelect';
import {moods} from '../data/common';
import {initialDiary} from '../data/initialState';
import {DiaryType, MoodType} from '../lib/type';

const TodayIsScreen = () => {
  // Logic
  const [diary, setDiary] = useState<DiaryType>(initialDiary);

  const handleEmotionChange = (mood: MoodType) => {
    console.log('🚀 : 감정 ==> ', mood.description);
    setDiary(prev => ({...prev, mood}));
  };

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <EmotionSelect
        title="오늘 하루는 어땠니?"
        moods={moods}
        emotionChange={handleEmotionChange}
      />
    </View>
  );
};

export default TodayIsScreen;
