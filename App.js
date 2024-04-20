import { View } from 'react-native';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import Home from './components/home';
import Question from './components/question';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GestureTest from './components/GestureTest';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <Home />
    </GestureHandlerRootView>
  );
}


