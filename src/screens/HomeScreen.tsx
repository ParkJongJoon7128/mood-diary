import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import ActionButton from 'react-native-action-button';
import { LocaleConfig } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import CalendarView from '../components/CalendarView';
import Layout from '../components/layout/Layout';
import { diaryListState } from '../data/dataState';
import { CalendarLocales } from '../public/config/config';

LocaleConfig.locales['kr'] = CalendarLocales;
LocaleConfig.defaultLocale = 'kr';

const HomeScreen = () => {
  // Logic
  const navigation =
    useNavigation<NativeStackNavigationProp<ROOT_NAVIGATION>>();
  const diaryList = useRecoilValue(diaryListState);

  useEffect(() => {
    console.log('🚀 : diaryList ==> ', diaryList);
  }, [diaryList]);

  // View
  return (
    <Layout>
      <SafeAreaView className="flex-1">
        <CalendarView />
        <ActionButton
          size={64}
          onPress={() => navigation.navigate('TodayIs')}
          buttonColor="#2196f3"
          position="right"
        />
      </SafeAreaView>
    </Layout>
  );
};

export default HomeScreen;
