import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ActionButton from 'react-native-action-button';
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
