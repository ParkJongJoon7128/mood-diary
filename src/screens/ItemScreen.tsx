import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import { useRecoilState } from 'recoil';
import Date from '../components/Date';
import DiaryInput from '../components/DiaryInput';
import Emotion from '../components/Emotion';
import Title from '../components/Title';
import { diaryListState } from '../data/dataState';
import { DiaryType } from '../lib/type';

const ItemScreen = ({route}) => {
  // Logic
  const {itemId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  const [diaryList, setDiaryList] = useRecoilState(diaryListState);
  const [selectedDiary, setSelectedDiary] = useState<DiaryType | null>(null);

  const updateDiary = (data: any) => {};

  const removeDiary = () => {
    Alert.alert(
      '해당 diary를 삭제하시겠습니까?',
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
              setDiaryList(filterDiaryList);
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

  useEffect(() => {
    const item = itemId && diaryList.find(diary => diary.id === itemId);

    item && setSelectedDiary(item);
  }, [diaryList, itemId]);

  // View
  return (
    <View className="flex-1 p-4">
      {selectedDiary && (
        <View className="border border-mood-gray-700 rounded-xl p-5">
          <View className="flex-row justify-between items-center">
            <Date date={selectedDiary.date.totalText} />
            <View className="flex flex-row items-center">
              <TouchableOpacity onPress={data => updateDiary(data)}>
                <Image
                  className="w-7 h-7 mr-4"
                  source={require('../public/images/pencil.png')}
                  resizeMode="contain"
                  alt="수정"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={removeDiary}>
                <Image
                  className="w-7 h-7"
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
              readOnly={true}
              isReset={false}
              value={selectedDiary.diary}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ItemScreen;

// {
/* <Image
  className="w-10"
  source={require('../public/images/trash.png')}
/>
<Image
  className="w-10"
  source={require('../public/images/pencil.png')}
/> */
// }

// {
/* <View className="flex-1 items-center justify-center pt-8">
  <TouchableOpacity
  // onPress={handleSubmit}
  >
    <Text>일기 저장하기</Text>
  </TouchableOpacity>
</View> */
// }
