import * as React from 'react';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import { NavigationContainer } from '@react-navigation/native';
import Router from './components/router/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


