import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Title from '../components/Title';

const HomeScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const title = '10월';

  return (
    // View
    <View className="flex-1 items-center justify-center">
      <Title mainTitle={title} />
    </View>
  );
};

export default HomeScreen;
