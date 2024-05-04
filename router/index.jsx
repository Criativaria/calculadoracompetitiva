import AppStack from "../router/appStack";
import {NavigationContainer} from '@react-navigation/native';


export default function Routes() {

    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}