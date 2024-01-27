import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRecoilState } from 'recoil';
import Date from '../components/Date';
import DiaryInput from '../components/DiaryInput';
import Emotion from '../components/Emotion';
import Title from '../components/Title';
import Layout from '../components/layout/Layout';
import { diaryListState } from '../data/dataState';
import { DiaryType } from '../lib/type';

const ItemScreen = ({route}) => {
  // Logic
  const {itemId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [diaryList, setDiaryValueList] = useRecoilState(diaryListState);
  const [selectedDiary, setSelectedDiary] = useState<DiaryType | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [diaryValue, setDiaryValue] = useState('');

  const changeEditMode = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    selectedDiary && setDiaryValue(selectedDiary?.diary);
  };

  const handleChange = (value: string) => {
    setDiaryValue(value);
  };

  const removeDiary = () => {
    Alert.alert(
      '해당 일기를 삭제하시겠습니까?',
      '삭제하면 데이터를 복구할 수 없습니다.',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: async () => {
            try {
              const filterDiaryList = diaryList.filter(
                diary => diary.id !== itemId,
              );
              setDiaryValueList(filterDiaryList);
              navigation.navigate('Home');
            } catch (error) {
              console.log('error', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  const updateDiary = () => {
    const updateDiaryList = diaryList.map(item => {
      return item.id === itemId ? {...item, diary: diaryValue} : item;
    });
    setDiaryValueList(updateDiaryList);
    setIsEditMode(false);
  };

  useEffect(() => {
    const item = itemId && diaryList.find(diary => diary.id === itemId);

    if (!item) return;
    setSelectedDiary(item);
    setDiaryValue(item.diary);
  }, [diaryList, itemId]);

  // View
  return (
    <Layout>
      <KeyboardAwareScrollView
        className="flex-1"
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        <View className="flex-1 p-4">
          {selectedDiary && (
            <View className="border border-mood-gray-700 rounded-xl p-5">
              <View className="flex-row justify-between items-center">
                <Date date={selectedDiary.date.totalText} />
                <View className="flex flex-row items-center">
                  <TouchableOpacity
                    disabled={isEditMode}
                    onPress={changeEditMode}>
                    <Image
                      className={`w-7 h-7 mr-4 ${
                        isEditMode ? 'opacity-20' : 'opacity-100'
                      }`}
                      source={require('../public/images/pencil.png')}
                      resizeMode="contain"
                      alt="수정"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity disabled={isEditMode} onPress={removeDiary}>
                    <Image
                      className={`w-7 h-7 ${
                        isEditMode ? 'opacity-20' : 'opacity-100'
                      }`}
                      source={require('../public/images/trash.png')}
                      resizeMode="contain"
                      alt="삭제"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="items-center justify-center">
                <View className="p-5">
                  <Emotion data={selectedDiary.mood} size="large" />
                  <View className="p-5">
                    <Title mainTitle={selectedDiary.mood.description} />
                  </View>
                </View>
                <DiaryInput
                  readOnly={!isEditMode}
                  isReset={false}
                  value={diaryValue}
                  bgColor={isEditMode ? '' : 'bg-purple-200'}
                  isFocus={isEditMode}
                  onChange={handleChange}
                />
              </View>
            </View>
          )}

          {isEditMode && (
            <View className="flex-row items-center justify-between my-10">
              <TouchableOpacity onPress={updateDiary}>
                <View className="px-12 py-5 items-center justify-center rounded-full bg-blue-500">
                  <Text className="text-white">일기 수정하기</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel}>
                <View className="px-12 py-5 items-center justify-center rounded-full bg-red-500">
                  <Text className="text-white">수정 취소하기</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default ItemScreen;
