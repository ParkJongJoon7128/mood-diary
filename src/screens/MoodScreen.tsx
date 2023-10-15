import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Layout from '../components/layout/Layout';

const MoodScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    // Logic

    // View
    <Layout>
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">MoodScreen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mood');
          }}>
          <Text className="text-lg">Test</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default MoodScreen;
