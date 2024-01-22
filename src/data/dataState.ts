import { atom } from 'recoil';
import { DiaryType } from '../lib/type';
import { persistAtom } from '../util/recoilPersist';
import { initialDiary } from './initialState';

export const diaryState = atom<DiaryType>({
  key: 'diaryState',
  default: initialDiary,
});

export const diaryListState = atom<DiaryType[]>({
  key: 'diaryListState',
  default: [],
  effects: [persistAtom('diaryListState')],
});
