import React, {FC} from 'react';
import {View, Text} from 'react-native';

interface DateProps {
  date: string;
}

const Date: FC<DateProps> = ({date}) => {
  return (
    <View>
      <Text>{date}</Text>
    </View>
  );
};

export default Date;
