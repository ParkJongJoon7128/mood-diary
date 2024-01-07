import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { useRecoilValue } from 'recoil';
import Title from '../components/Title';
import { diaryListState } from '../data/dataState';

const HomeScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const diaryList = useRecoilValue(diaryListState);
  const title = '10월';

  useEffect(() => {
    console.log('🚀 : diaryList ==> ', diaryList);
  }, [diaryList]);

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <Title mainTitle={title} />
      {/* <Emotion data={moods[0]} /> */}
      <ActionButton
        size={64}
        onPress={() => navigation.navigate('TodayIs')}
        buttonColor="#2196f3"
        position="center"
      />
    </View>
  );
};

export default HomeScreen;
