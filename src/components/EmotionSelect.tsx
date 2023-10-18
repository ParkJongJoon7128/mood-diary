import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {moods} from '../data/common';

const EmotionSelect = () => {
  // Logic
  const getEmotionImage = (name: string) => {
    switch (name) {
      case 'annoying':
        return require('../public/images/annoying.png');
      case 'bother':
        return require('../public/images/bother.png');
      case 'depressed':
        return require('../public/images/depressed.png');
      case 'happy':
        return require('../public/images/happy.png');
      case 'nervous':
        return require('../public/images/nervous.png');
      case 'pain':
        return require('../public/images/pain.png');
      case 'relaxed':
        return require('../public/images/relaxed.png');
      case 'sad':
        return require('../public/images/sad.png');
    }
  };

  // View
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl mb-2">오늘 하루는 어땠니?</Text>
      <View className="flex-row flex-wrap items-center justify-center">
        {moods.map(mood => (
          <TouchableOpacity className="p-5">
            <Image
              resizeMode="contain"
              source={getEmotionImage(mood.name)}
              alt={mood.name}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default EmotionSelect;
