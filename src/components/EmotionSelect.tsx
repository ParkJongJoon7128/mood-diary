/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {MoodType} from '../lib/type';
import CalendarSelect from './CalendarSelect';
import Modal from 'react-native-modal';

interface EmotionSelectProps {
  title: string;
  moods: MoodType[];
  emotionChange: (data: MoodType) => void;
}

const EmotionSelect: FC<EmotionSelectProps> = ({title, moods}) => {
  // Logic
  const [value, setValue] = useState('');
  const [selectedMood, setSelectedMood] = useState(null);
  const [visibleCalendar, setVisibleCalendar] = useState(false);

  const onSelectedMood = mood => {
    setSelectedMood(mood.id);
    setVisibleCalendar(true);
    console.log('🚀 : value ==> ', mood.description);
  };

  const handleDateChange = (date: String) => {
    console.log('🚀 : data ==> ', date);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    mood: MoodType,
  ) => {
    const {value} = event.target;
    console.log('🚀 : value ==> ', value);
    setValue(value);
    onSelectedMood(mood);
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
            onPress={
              (event, mood) => handleChange(event, mood)
              // onSelectedMood(mood)
            }>
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
          isVisible={visibleCalendar}
          onBackButtonPress={() => setVisibleCalendar(false)}
          onBackdropPress={() => setVisibleCalendar(false)}>
          <View className="flex-1 justify-center items-cente">
            <CalendarSelect
              onClose={() => setVisibleCalendar(false)}
              dateChange={handleDateChange}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default EmotionSelect;
