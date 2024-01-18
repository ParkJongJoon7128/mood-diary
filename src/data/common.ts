import { MoodType } from '../lib/type';

export const moods: MoodType[] = [
  {
    id: 1,
    name: 'depressed',
    description: '우울함',
  },
  {
    id: 2,
    name: 'happy',
    description: '행복함',
  },
  {
    id: 3,
    name: 'annoying',
    description: '짜증남',
  },
  {
    id: 4,
    name: 'relaxed',
    description: '여유로움',
  },
  {
    id: 5,
    name: 'nervous',
    description: '긴장됨',
  },
  {
    id: 6,
    name: 'sad',
    description: '슬픔',
  },
  {
    id: 7,
    name: 'tired',
    description: '피곤함',
  },
  {
    id: 8,
    name: 'pain',
    description: '아픔',
  },
];

export const daysOfWeek = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

export const totalDate = (year: number, month: number, day: number): string =>
  `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
