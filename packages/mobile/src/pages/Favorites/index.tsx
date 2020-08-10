import React, { useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { PageHeader, ClassItem } from '../../components';
import { ClassInfo } from '../../models';
import favoritesService from '../../services/favorites';
import styles from './styles';

const Favorites = () => {
  const [favorites, setFavorites] = useState([] as ClassInfo[]);

  async function loadFavorites() {
    const favoriteClasses = await favoritesService.getAll();

    setFavorites(favoriteClasses);
  }

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, []),
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.classList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((favoriteClass) => (
          <ClassItem
            key={favoriteClass.id}
            classInfo={favoriteClass}
            favorited={true}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
