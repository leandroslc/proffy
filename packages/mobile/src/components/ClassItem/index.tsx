import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Image, Linking, Text, View } from 'react-native';
import { ClassInfo } from '../../models';
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
  const {
    classInfo: { subject, cost, user },
    favorited = false,
  } = props;

  function handleLinkToWhatsapp() {
    const phone = getNormalizedPhoneNumber(user.whatsapp);

    Linking.openURL(`whatsapp://send?phone=${phone}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.subject}>{subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{user.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>{cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, favorited ? styles.favorited : {}]}
          >
            {favorited ? (
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
