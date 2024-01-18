import { DateType, DiaryType } from '../lib/type';
import { daysOfWeek } from './common';

const today = (): DateType => {
  const todayData = new Date();
  const year = todayData.getFullYear();
  const month = todayData.getMonth() + 1;
  const day = todayData.getDate();
  const daysOfWeeks = daysOfWeek[todayData.getDay()];

  const totalText = `${year}년 ${month}월 ${day}일 ${daysOfWeeks}`;

  const resultDate: DateType = {
    year: year,
    month: month,
    day: day,
    daysOfWeeks: daysOfWeeks,
    totalDate: `${year}-${month}-${day}`,
    totalText: totalText,
  };

  return resultDate;
};

export const initialDiary: DiaryType = {
  id: 1,
  date: today(),
  diary: '',
  mood: {
    id: 1,
    name: 'depressed',
    description: '우울함',
  },
};
