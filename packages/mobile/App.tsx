import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import useFonts from './src/fonts';
import AppStack from './src/routes/AppStack';

const App = () => {
  const [fontsLoaded] = useFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
};

export default App;
