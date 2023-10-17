import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const MoodScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg">MoodScreen</Text>
    </View>
  );
};

export default MoodScreen;
