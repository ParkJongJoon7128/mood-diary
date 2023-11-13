import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import CalendarSelect from '../components/CalendarSelect';
import EmotionSelect from '../components/EmotionSelect';
import {moods} from '../data/common';

const TodayIsScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <EmotionSelect title="오늘 하루는 어땠니?" moods={moods} />
    </View>
  );
};

export default TodayIsScreen;
