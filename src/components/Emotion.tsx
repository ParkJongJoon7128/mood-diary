import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { MoodType } from '../lib/type';

interface EmotionProps {
  data: MoodType;
  size?: string;
}

const Emotion: FC<EmotionProps> = ({data, size}) => {
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

  return (
    <View
    // style={{borderRadius: 2, borderColor: 'orange'}}
    // className={`w-${
    //   size ? sizeList.find(item => item.size === size)?.width : 'w-auto'
    // }`}
    >
      <Image
        className={size === 'small' ? 'w-10' : 'w-auto'}
        resizeMode="contain"
        source={getEmotionImage(data.name)}
        alt={data.name}
      />
    </View>
  );
};

export default Emotion;
