import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';

interface DiaryInputProps {
  isReset: boolean;
  setIsReset: (value: boolean) => void;
  onChange: (value: string) => void;
}

const DiaryInput: FC<DiaryInputProps> = ({isReset, setIsReset, onChange}) => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    // const {value} = event.target;
    setValue(value);
    onChange(value);
  };

  const handleSubmit = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    event.preventDefault();
    setValue('');
    setIsReset(true);
    navigation.navigate('Home');
  };

  useEffect(() => {
    isReset && setValue('');
  }, [isReset]);

  // View
  return (
    <TextInput
      className="w-full rounded-md px-4 py-2 bg-purple-200"
      onChangeText={handleChange}
      value={value}
      placeholder="일기를 써주세요"
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      autoFocus={true}
    />
  );
};

export default DiaryInput;
