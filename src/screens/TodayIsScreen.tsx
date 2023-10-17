import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

const TodayIsScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg">TodayIsScreen</Text>
    </View>
  );
};

export default TodayIsScreen;
