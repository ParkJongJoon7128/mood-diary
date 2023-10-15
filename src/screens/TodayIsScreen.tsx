import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Layout from '../components/layout/Layout';

const TodayIsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    <Layout>
      <View className="flex-1 items-center justify-center">
        <Text>TodayIsScreen</Text>
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

export default TodayIsScreen;
