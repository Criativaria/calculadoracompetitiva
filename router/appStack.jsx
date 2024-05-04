import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScorePoints from "../components/score";
import Home from "../components/home"

export default function AppStack() {

    const {Navigator, Screen} = createNativeStackNavigator();

    return (
        <Navigator>
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='Score'
                component={ScorePoints}
            />
        </Navigator>
    )
}