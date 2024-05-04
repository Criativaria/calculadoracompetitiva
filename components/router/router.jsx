import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScorePoints from '../score';
import Home from '../home';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShowerHead } from 'lucide-react-native';

export default function Router() {

    const Stack = createNativeStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Score' component={ScorePoints} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}