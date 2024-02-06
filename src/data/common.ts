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

export const notiAlarmComment = [
  // 우울함
  '좋은 아침! 어제 힘들었던 날을 떨쳐버리고 새로운 시작을 해봐요. 오늘은 더 행복한 순간들이 기다리고 있을 거에요.',
  // 행복함
  '좋은 아침! 어제 행복한 일이 있었다면, 그 기분을 오늘에도 이어가보세요. 행복한 하루 되세요!',
  // 짜증남
  '좋은 아침! 어제는 짜증이 나는 순간이 있었죠? 오늘은 더 차분한 하루가 되길 바라요.',
  // 여유로움
  '좋은 아침! 어제는 여유를 즐겼나요? 오늘도 마음 편하게 새로운 경험을 만나보세요.',
  // 긴장됨
  '좋은 아침! 어제는 긴장되는 순간이 있었겠죠? 오늘은 더 자신에게 도전하는 하루가 되길 기대해봐요.',
  // 슬픔
  '좋은 아침! 어제 슬픈 감정을 나눠줘서 고마워요. 오늘은 새로운 희망과 기회가 기다리고 있어요.',
  // 피곤함
  '좋은 아침! 어제 피곤한 하루였죠? 오늘은 충분한 휴식을 취하고 에너지를 모아보세요.',
  // 아픔
  '좋은 아침! 어제 아픈 순간이 힘들었을 텐데, 오늘은 더 나은 상태가 되길 바랄게요. 힘내세요!',
];