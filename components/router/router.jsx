import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScorePoints from '../score';
import Home from '../home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Router() {

    const Stack = createNativeStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="light" backgroundColor='#1E1E1E' />
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Score" component={ScorePoints} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}