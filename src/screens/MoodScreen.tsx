import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Layout from '../components/layout/Layout';

const MoodScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    <Layout>
      <View className="flex-1 items-center justify-center">
        <Text>MoodScreen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mood');
          }}>
          <Text>Test</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default MoodScreen;
