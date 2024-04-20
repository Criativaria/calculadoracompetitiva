import { View } from 'react-native';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import Home from './components/home';
import Question from './components/question';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <Home />
    </View>
  );
}


