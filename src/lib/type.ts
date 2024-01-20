import { GestureResponderEvent } from "react-native";

export interface MoodType {
  id: number;
  name: string;
  description: string;
}

export interface DiaryType {
  id: number;
  mood: MoodType;
  date: DateType;
  diary: string;
}

export interface DateType {
  year: number;
  month: number;
  day: number;
  daysOfWeeks: string;
  totalDate: string;
  totalText: string;
}

export type OnPressHandleSubmitEvent = GestureResponderEvent;
