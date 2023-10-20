import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
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
      <View>
        <FloatingAction
          buttonSize={64}
          iconWidth={20}
          iconHeight={20}
          onPressMain={() => navigation.navigate('TodayIs')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
