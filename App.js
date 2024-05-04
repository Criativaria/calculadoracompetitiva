import * as React from 'react';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './components/router/router';


export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


