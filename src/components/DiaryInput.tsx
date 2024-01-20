import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';
import { TextInput } from 'react-native';

interface DiaryInputProps {
  isReset: boolean;
  onChange: (value: string) => void;
  handleSubmit: (event: any) => void;
  // setIsReset: (value: boolean) => void;
}

const DiaryInput: FC<DiaryInputProps> = ({
  isReset,
  onChange,
  handleSubmit,
  // setIsReset,
}) => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    // const {value} = event.target;
    setValue(value);
    onChange(value);
  };

  useEffect(() => {
    isReset && setValue('');
  }, [isReset]);
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
