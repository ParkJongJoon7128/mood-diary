import { atom } from 'recoil';
import { DiaryType } from '../lib/type';
import { initialDiary } from './initialState';

export const diaryState = atom<DiaryType>({
  key: 'diaryState',
  default: initialDiary,
});

export const diaryListState = atom<DiaryType[]>({
  key: 'diaryListState',
  default: [],
  // effects_UNSTABLE: [persistAtom('diaryListState')],
});
