import React, { FC, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useRecoilState } from 'recoil';
import { diaryState } from '../data/dataState';
import { DateType, MoodType } from '../lib/type';
import CalendarSelect from './CalendarSelect';

interface EmotionSelectProps {
  title: string;
  moods: MoodType[];
  emotionChange: (data: MoodType) => void;
  // diary: DiaryType;
  // setDiary: React.Dispatch<React.SetStateAction<DiaryType>>;
}

const EmotionSelect: FC<EmotionSelectProps> = ({
  title,
  moods,
  emotionChange,
  // diary,
  // setDiary,
}) => {
  // Logic
  const [selectedMood, setSelectedMood] = useState(null);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [diary, setDiary] = useRecoilState(diaryState);

  const onSelectedMood = mood => {
    setSelectedMood(mood.id);
    setVisibleCalendar(true);
  };

  const handleChange = (mood: MoodType) => {
    onSelectedMood(mood);
    emotionChange(mood);
  };

  const handleDateChange = (date: DateType) => {
    const result = {...diary, date};
    setDiary(result);
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
            onPress={() => {
              handleChange(mood);
            }}>
            <Image
              resizeMode="contain"
              className={`${
                selectedMood === mood.id ? 'opacity-100' : 'opacity-20'
              }`}
              source={getEmotionImage(mood.name)}
              alt={mood.name}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <Modal
          className="flex-1"
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          isVisible={visibleCalendar}
          onBackButtonPress={() => setVisibleCalendar(false)}
          onBackdropPress={() => setVisibleCalendar(false)}>
          <CalendarSelect
            onClose={() => setVisibleCalendar(false)}
            dateChange={handleDateChange}
          />
        </Modal>
      </View>
    </View>
  );
};

export default EmotionSelect;
