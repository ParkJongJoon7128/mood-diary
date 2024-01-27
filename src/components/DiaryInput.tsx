import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';

interface DiaryInputProps {
  isReset: boolean;
  readOnly?: boolean;
  value?: string;
  bgColor?: string;
  isFocus?: boolean;
  onChange?: (value: string) => void;
  handleSubmit?: (event: any) => void;
  // setIsReset: (value: boolean) => void;
}

const DiaryInput: FC<DiaryInputProps> = ({
  isReset,
  readOnly,
  value,
  bgColor,
  isFocus,
  onChange,
  handleSubmit,
}) => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const [input, setInput] = useState('');
  const inputRef = useRef<TextInput | null>(null);

  const handleChange = (value: string) => {
    setInput(value);
    onChange && onChange(value);
  };

  useEffect(() => {
    isReset && setInput('');
  }, [isReset]);

  useEffect(() => {
    value && setInput(value);
  }, [value]);

  useEffect(() => {
    isFocus && inputRef.current && inputRef.current.focus();
  }, [isFocus]);

  return (
    <TextInput
      className={`${bgColor || ' bg-yellow-200'} w-full rounded-md px-4 py-2 `}
      onChangeText={handleChange}
      value={input}
      placeholder="일기를 써주세요"
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      autoFocus={true}
      readOnly={!!readOnly}
      ref={inputRef}
    />
  );
};

export default DiaryInput;
