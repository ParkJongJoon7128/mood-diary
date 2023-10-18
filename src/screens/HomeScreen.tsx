import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Emotion from '../components/Emotion';
import Title from '../components/Title';
import {moods} from '../data/common';

const HomeScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const title = '10월';

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <Title mainTitle={title} />
      <Emotion data={moods[1]} />
      {/* <View className="flex-row flex-wrap">
        <Emotion />
        <Emotion />
        <Emotion />
        <Emotion />
        <Emotion />
        <Emotion />
        <Emotion />
        <Emotion />
      </View> */}
    </View>
  );
};

export default HomeScreen;
