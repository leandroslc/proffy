import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderColor: '#e6e6f0',
    borderWidth: 1,
    borderRadius: 8,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    backgroundColor: '#eee',
    borderRadius: 32,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264d',
  },

  subject: {
    marginTop: 4,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180',
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
  },

  footer: {
    alignItems: 'center',
    padding: 24,
    marginTop: 24,
    backgroundColor: '#fafafc',
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180',
  },

  priceValue: {
    fontFamily: 'Archive_700Bold',
    fontSize: 16,
    color: '#8257e5',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    marginRight: 8,
    backgroundColor: '#8257e5',
    borderRadius: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginRight: 8,
    backgroundColor: '#04d361',
    borderRadius: 8,
  },

  contactButtonText: {
    marginLeft: 16,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  },
});
