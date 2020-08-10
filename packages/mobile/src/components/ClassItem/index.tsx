import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Image, Linking, Text, View } from 'react-native';
import { ClassInfo } from '../../models';
import favoritesService from '../../services/favorites';
import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

interface ClassItemProps {
  classInfo: ClassInfo;
  favorited?: boolean;
}

function getNormalizedPhoneNumber(phone: string) {
  return phone.replace(/[^\d]/g, '');
}

export const ClassItem = (props: ClassItemProps) => {
  const { classInfo, favorited = false } = props;

  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    const phone = getNormalizedPhoneNumber(classInfo.user.whatsapp);

    Linking.openURL(`whatsapp://send?phone=${phone}`);
  }

  async function handleToggleFavorite() {
    if (isFavorited) {
      await favoritesService.remove(classInfo);
    } else {
      await favoritesService.add(classInfo);
    }

    setIsFavorited(!isFavorited);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: classInfo.user.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{classInfo.user.name}</Text>
          <Text style={styles.subject}>{classInfo.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{classInfo.user.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>{classInfo.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};
