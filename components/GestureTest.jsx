import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import styled from 'styled-components';

export default function GestureTest() {

    const gesture = Gesture.Pan()
        // .minPointers(2)

        .onBegin((e) => {
            console.log('Begin')
        })
        .onStart((e) => {
            console.log('Start')
            console.log(e.numberOfPointers); //ta pegando o numero de dedos na tela
        })
        .onUpdate((e) => {
            console.log('Update')
        })
        .onEnd(() => {
            console.log('End')
        })
        .onFinalize(() => {
            console.log('Finalize')
        });

    //TAP
    // const gesture = Gesture.Tap()
    //     .numberOfTaps(4)
    //     .onStart(() => {
    //         console.log('Start')
    //     })
    //     .onFinalize(() => {
    //         console.log('Finalize')
    //     });

    // LOGPRESS
    // const gesture = Gesture.LongPress()
    //     // .minDuration(2000)
    //     .onStart((e) => {
    //         console.log('Start')
    //         console.log(e.numberOfPointers); //ta pegando o numero de dedos na tela
    //     })
    //     .onFinalize(() => {
    //         console.log('Finalize')
    //     });

    return (
        <Wrapper>
            <GestureDetector gesture={gesture}>
                <Quadrado></Quadrado>
            </GestureDetector>
        </Wrapper>
    )
}
const Wrapper = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-top: 300px;
    background-color: black;
`
const Quadrado = styled.View`
    background-color: red;
    height: 300px;
    width: 300px;
`