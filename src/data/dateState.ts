import {DiaryType} from '../lib/type';
import {initialDiary} from './initialState';
import {atom} from 'recoil';

export const diaryState = atom<DiaryType>({
  key: 'diaryState',
  default: initialDiary,
});
