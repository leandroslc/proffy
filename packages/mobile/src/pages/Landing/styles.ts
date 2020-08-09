import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257E5',
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    marginTop: 80,
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    color: '#fff',
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  button: {
    justifyContent: 'space-between',
    width: '48%',
    height: 150,
    padding: 24,
    backgroundColor: '#333',
    borderRadius: 8,
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#fff',
  },

  totalConnections: {
    maxWidth: 140,
    marginTop: 40,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    color: '#d4c2ff',
  },
});
