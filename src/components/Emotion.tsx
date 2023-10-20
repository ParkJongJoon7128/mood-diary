import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {MoodType} from '../lib/type';

interface EmotionProps {
  data: MoodType;
}

const Emotion: FC<EmotionProps> = ({data}) => {
  // Logic
  const getEmotionImage = (name: string) => {
    switch (name) {
      case 'annoying':
        return require('../public/images/annoying.png');
      case 'tired':
        return require('../public/images/tired.png');
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
    <View className="p-1">
      <Image
        resizeMode="contain"
        source={getEmotionImage(data.name)}
        alt={data.name}
      />
    </View>
  );
};

export default Emotion;
