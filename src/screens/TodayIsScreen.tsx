import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState } from 'recoil';
import EmotionSelect from '../components/EmotionSelect';
import Layout from '../components/layout/Layout';
import { moods } from '../data/common';
import { diaryState } from '../data/dataState';
import { MoodType } from '../lib/type';

const TodayIsScreen = () => {
  // Logic
  const [diary, setDiary] = useRecoilState(diaryState);

  const handleEmotionChange = (mood: MoodType) => {
    const result = {...diary, mood};
    setDiary(result);
  };

  // View
  return (
    <Layout>
      <SafeAreaView className="flex-1 items-center justify-center">
        <EmotionSelect
          title="오늘 하루는 어땠니?"
          moods={moods}
          emotionChange={handleEmotionChange}
        />
      </SafeAreaView>
    </Layout>
  );
};

export default TodayIsScreen;
