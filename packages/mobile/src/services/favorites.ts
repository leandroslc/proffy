import AsyncStorage from '@react-native-community/async-storage';
import { ClassInfo } from '../models';

const StorageName = 'favorites';

async function save(favoriteClasses: ClassInfo[]) {
  await AsyncStorage.setItem(StorageName, JSON.stringify(favoriteClasses));
}

async function getAll() {
  const response = await AsyncStorage.getItem(StorageName);

  if (response) {
    return JSON.parse(response) as ClassInfo[];
  }

  return [] as ClassInfo[];
}

export default {
  getAll,

  async remove(classInfo: ClassInfo) {
    const favorites = await getAll();

    const favoriteIndex = favorites.findIndex((favoriteClassInfo) => {
      return favoriteClassInfo.id === classInfo.id;
    });

    favorites.splice(favoriteIndex, 1);

    await save(favorites);
  },

  async add(classInfo: ClassInfo) {
    const favorites = await getAll();

    favorites.push(classInfo);

    await save(favorites);
  },
};
