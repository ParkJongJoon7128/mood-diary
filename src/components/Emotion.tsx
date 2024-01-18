import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { MoodType } from '../lib/type';

interface EmotionProps {
  data: MoodType;
  size?: string;
}

const Emotion: FC<EmotionProps> = ({data, size}) => {
  // Logic
  const sizeList = [
    {
      size: 'small',
      width: '8',
    },
    {
      size: 'medium',
      width: '12',
    },
    {
      size: 'large',
      width: '24',
    },
  ];

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
    <View
      className={`w-${
        size ? sizeList.find(item => item.size === size)?.width : 'fit'
      } mx-auto`}>
      <Image
        className="w-full"
        resizeMode="contain"
        source={getEmotionImage(data.name)}
        alt={data.name}
      />
    </View>
  );
};

export default Emotion;
