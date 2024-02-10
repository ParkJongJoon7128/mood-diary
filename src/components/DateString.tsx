import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface DateStringProps {
  date: string;
}

const DateString: FC<DateStringProps> = ({date}) => {
  return (
    <View>
      <Text>{date}</Text>
    </View>
  );
};

export default DateString;
