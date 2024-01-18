import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { useRecoilValue } from 'recoil';
import CalendarView from '../components/CalendarView';
import { diaryListState } from '../data/dataState';

const HomeScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const diaryList = useRecoilValue(diaryListState);

  useEffect(() => {
    console.log('🚀 : diaryList ==> ', diaryList);
  }, [diaryList]);

  // View
  return (
    <View className="flex-1">
      <CalendarView />
      <ActionButton
        size={64}
        onPress={() => navigation.navigate('TodayIs')}
        buttonColor="#2196f3"
        position="right"
      />
    </View>
  );
};

export default HomeScreen;
