import {DiaryType} from '../lib/type';
import {daysOfWeek} from './common';

const today = (): string => {
  const todayData = new Date();
  const year = todayData.getFullYear();
  const month = todayData.getMonth() + 1;
  const day = todayData.getDate();
  const daysOfWeeks = todayData.getDay();

  const resultDate = `${year}년 ${month}월 ${day}일 ${daysOfWeek[daysOfWeeks]}`;

  return resultDate;
};

today();

export const initialDiary: DiaryType = {
  id: 1,
  date: today(),
  diary: '',
  mood: {
    // id: number,
    // name: string,
    // description: string,
  },
};
