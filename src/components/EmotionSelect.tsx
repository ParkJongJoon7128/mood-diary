import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {MoodType} from '../lib/type';

interface EmotionSelectProps {
  title: string;
  moods: MoodType[];
}

const EmotionSelect: FC<EmotionSelectProps> = ({title, moods}) => {
  // Logic
  const [selectedMood, setSelectedMood] = useState(null);

  const onSelectedMood = mood => {
    setSelectedMood(mood.id);
    console.log(mood.description);
  };

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
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl mb-2">{title}</Text>
      <View className="flex-row flex-wrap items-center justify-center">
        {moods.map(mood => (
          <TouchableOpacity
            className="p-5"
            key={mood.id}
            onPress={() => onSelectedMood(mood)}>
            <Image
              resizeMode="contain"
              className={`${
                selectedMood === mood.id ? 'rounded-full' : 'opacity-20'
              }`}
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
