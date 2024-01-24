import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const BackButton = () => {
  // Logic

  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  // View
  return (
    <View className="flex ml-3 w-full">
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          className="w-7 h-7"
          resizeMode="contain"
          source={require('../public/images/back.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
