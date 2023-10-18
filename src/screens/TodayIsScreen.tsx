import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import EmotionSelect from '../components/EmotionSelect';

const TodayIsScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <EmotionSelect />
    </View>
  );
};

export default TodayIsScreen;
