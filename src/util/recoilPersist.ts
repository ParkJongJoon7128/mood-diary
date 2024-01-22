import AsyncStorage from '@react-native-async-storage/async-storage';
import { AtomEffect } from 'recoil';

export const persistAtom =
  <T>(key: string): AtomEffect<T> =>
  ({setSelf, onSet, trigger}) => {
    const loadPersisted = async () => {
      const savedValue = await AsyncStorage.getItem(key);

      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    };

    // Asynchronously set the persisted data
    if (trigger === 'get') {
      loadPersisted();
    }

    // Subscribe to state changes and persist them to AsyncStorage
    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };
