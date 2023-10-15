import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Layout from '../components/layout/Layout';
import Title from '../components/Title';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();

  return (
    // Logic

    // View
    <Layout>
      <View className="flex-1 items-center justify-center">
        <Title mainTitle="10월" subTitle="2023년" />
      </View>
    </Layout>
  );
};

export default HomeScreen;
