import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({mainTitle, subTitle}) => {
  return (
    <View className="mt-6">
      {subTitle && (
        <Text className="text-xl pb-2 text-gray-700">{subTitle}</Text>
      )}
      <View className="items-center justify-center">
        <Image
          className="absolute object-contain"
          source={require('../public/images/TitleMarker.png')}
          alt="마커"
        />
        <Text className="relative text-base text-gray-700">{mainTitle}</Text>
      </View>
    </View>
  );
};

export default Title;
