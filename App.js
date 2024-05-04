import {useFonts, RobotoMono_500Medium} from '@expo-google-fonts/roboto-mono';
import Routes from "./router";

export default function App() {
    let [fontsLoaded] = useFonts({
        RobotoMono_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Routes/>
    );
}


