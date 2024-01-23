import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import Date from '../components/Date';
import DiaryInput from '../components/DiaryInput';
import Emotion from '../components/Emotion';
import Title from '../components/Title';
import { diaryListState } from '../data/dataState';
import { DiaryType } from '../lib/type';

const ItemScreen = ({route}) => {
  // Logic
  const {itemId} = route.params;

  const diaryList = useRecoilValue(diaryListState);
  const [selectedDiary, setSelectedDiary] = useState<DiaryType | null>(null);

  const modifyDiary = (data: any) => {
    console.log('test', data);
  };

  const removeDiary = (data: any) => {
    console.log('test', data);
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
              <TouchableOpacity onPress={data => modifyDiary(data)}>
                <Image
                  className="w-7 h-7 mr-4"
                  source={require('../public/images/pencil.png')}
                  resizeMode="contain"
                  alt="수정"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={data => removeDiary(data)}>
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
