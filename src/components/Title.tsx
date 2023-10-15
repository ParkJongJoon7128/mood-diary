import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({mainTitle, subTitle}) => {
  return (
    <View>
      <Text className="text-sm">{subTitle}</Text>
      <Text className="text-base">{mainTitle}</Text>
    </View>
  );
};

export default Title;
