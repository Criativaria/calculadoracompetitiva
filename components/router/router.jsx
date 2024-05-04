import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScorePoints from '../score';
import Home from '../home';

export default function Router() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Score' component={ScorePoints} />
        </Stack.Navigator>
    )
}