export interface MoodType {
  id: number;
  name: string;
  description: string;
}

export interface DiaryType {
  id: number;
  mood: MoodType;
  date: string;
  diary: string;
}
