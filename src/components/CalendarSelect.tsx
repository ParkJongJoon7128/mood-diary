import React, {FC, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {View} from 'react-native';

interface CalendarSelectProps {
  onClose: () => void; // onClose prop 추가
}

const CalendarSelect: FC<CalendarSelectProps> = ({onClose}) => {
  // Logic
  const [selected, setSelected] = useState('');

  // View
  return (
    <View className="flex-1 justify-center w-full">
      <Calendar
        className="pt-2 pb-2"
        onDayPress={data => {
          // onClose();?
          setSelected(data.dateString);
          console.log(data.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e',
          // todayBackgroundColor: '#00adf5',
          // todayTextColor: '#00adf5',
        }}
      />
    </View>
  );
};

export default CalendarSelect;
