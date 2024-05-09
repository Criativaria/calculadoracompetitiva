import styled from 'styled-components/native';
import { Coins, ListOrdered, Repeat, Volume2 } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import * as Speech from 'expo-speech';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Home({ navigation }) {

    const [query, setQuery] = useState('');
    const [options, setOptions] = useState([]);
    const [result, setResult] = useState()
    const [reload, setReload] = useState(false);
    const [border, setBorder] = useState();
    const [points, setPoints] = useState(0);
    const [level, setLevel] = useState('easy');
    const [background, setBackground] = useState('#181F1C');
    const [color, setColor] = useState('#315C2B');
    const [selectedOption, setSelectedOption] = useState(0);


    function Question(level) {

        switch (level) {
            case 'easy':
                easy();
                break;
            case 'medium':
                medium();
                break;
            case 'hard':
                hard();
                break;
            default:
                break;
        }
        function randomNumber(max, min) {
            return Math.round(Math.random() * (max - min) + min);
        }

        function easy() {
            const num1 = randomNumber(99, 1);
            const num2 = randomNumber(99, 1);
            const operator = ['+', '-'][randomNumber(1, 0)];

            let question = ` ${num1}${operator}${num2}`;
            let answer = eval(question);

            Answer(answer);
            setResult(answer)
            setQuery(question);
            textToSpeech(question, 1);
        }

        function medium() {
            const num1 = randomNumber(99, 1);
            const num2 = randomNumber(99, 1);
            const operator = ['+', '-', '*', '/'][randomNumber(3, 0)];

            let question = ` ${num1}${operator}${num2}`;
            let operation;
            let result;

            if (operator == '/' && num2 !== 0) {
                operation = `${num1}*${num2}`
                result = Math.floor(eval(operation));
                question = ` ${result}/${num2}`
            } else {
                question = ` ${num1}${operator}${num2}`;
            }

            let answer = eval(question);
            Answer(answer);
            setQuery(question);
            textToSpeech(question, 1);
            setResult(answer)
        }

        function hard() {
            const num1 = randomNumber(50, 1);
            const num2 = randomNumber(50, 1);
            const num3 = randomNumber(50, 1);

            let operator1 = ['+', '-', '*', '/'][randomNumber(3, 0)];
            let operator2 = ['+', '-'][randomNumber(1, 0)];

            let question = `${num1}${operator1}${num2}${operator2}${num3}`;
            let answer;
            let result;

            if (operator1 == '/') {
                if (num2 != 0) {
                    result = Math.floor(eval(`${num1}*${num2}`));
                    question = `${result}/${num2}${operator2}${num3}`
                } else {
                    return;
                }
            }
            else {
                question = `${num1}${operator1}${num2}${operator2}${num3}`;
            }
            answer = eval(question);
            setQuery(question);
            Answer(answer);
            textToSpeech(question, 1);
            setResult(answer)

        }
    }
    function Answer(result) {
        function randomNumber(max, min) {
            return Math.round(Math.random() * (max - min) + min);
        }
        let option1 = result
        let option2 = result + randomNumber(10, 1)
        let option3 = result - randomNumber(16, 1)
        let option4 = result - randomNumber(14, 1)

        isOptionUnique([option1, option2, option3, option4].sort(() => Math.random() - 0.5));
    }
    function isOptionUnique(alternative) {
        const optionsSet = new Set(alternative);
        while (optionsSet < 4) {
            Question(level);
        } setOptions(Array.from(optionsSet));
        setTimeout(() => {
            textToSpeech("as opções são: " + Array.from(optionsSet), 0.7);
        }, 3000);
    }
    function isRigthOne(option) {

        if (option === result) {
            textToSpeech(option + "é a correta!");
            setTimeout(() => {
                setReload(!reload);
            }, 5000);

            if (level == 'easy') {
                setPoints(points + 10)
                pointsStystem();
            } else if (level == 'medium') {
                setPoints(points + 20)
                pointsStystem();
            } else if (level == 'hard') {
                setPoints(points + 200)
                pointsStystem();
            }
        } else {
            textToSpeech(option + "é errada!");
            if (level == 'easy') {
                setPoints(points - 3);
                pointsStystem();
            } else if (level == 'medium') {
                setPoints(points - 5);
                pointsStystem();
            } else if (level == 'hard') {
                setPoints(points - 100);
                pointsStystem();

            }
        }

        setBorder(option);

    }
    useEffect(() => {
        Question(level);
    }, [reload]);

    function pointsStystem() {
        if (points > 500) {
            setBackground('#540B0E')
            setColor('#9E2A2B')
            setLevel('hard')
        }
        if (points > 50 && points < 500) {
            setBackground('#7C7000')
            setColor('#E09F3E')
            setLevel('medium')
        }
        if (points < 50) {
            setBackground('#181F1C')
            setColor('#315C2B')
            setLevel('easy')
        }
    }
    function textToSpeech(text, rate) {
        return Speech.speak(text, { rate });
    }

    //gesture things below that

    const countRef = useRef(0);

    const handlePan = () => {
        countRef.current += 1;
        if (options.length <= countRef.current - 1) {
            countRef.current = 0
            return options[countRef.current - 1]
        } else {
            textToSpeech(options[countRef.current - 1].toString(), 1)
            setSelectedOption(options[countRef.current - 1]);
        }
    }

    const handleTap = () => {
        isRigthOne(selectedOption)
        console.log(selectedOption)
    }

    const Pan = Gesture.Pan().onEnd(handlePan);
    const Tap = Gesture.Tap().minPointers(2).onEnd(handleTap)

    return (
        <GestureHandlerRootView>
            <GestureDetector gesture={Pan}>
                <GestureDetector gesture={Tap}>
                    <Wrapper>
                        <CalculatorWrapper style={{ backgroundColor: `${background}` }}>
                            <Calculator style={{ backgroundColor: `${color}` }}>
                                <Escore>
                                    <Coins size={38} strokeWidth={2.25} color="#000000" />
                                    <PointsText>{points}</PointsText>
                                </Escore>
                                <Display><PQuestion>{query}=?</PQuestion></Display>
                                <OptionsWrapper>
                                    {
                                        options.map((option) =>
                                            <OptionButton style={{
                                                borderLeftWidth: border == option ? 10 : 0,
                                                borderLeftColor: option == result ? '#9EA93F' : '#E03E3E'
                                            }} key={option} onPress={() => isRigthOne(option)}>
                                                <POption>
                                                    {option}
                                                </POption>
                                            </OptionButton>
                                        )
                                    }
                                </OptionsWrapper>
                            </Calculator>
                        </CalculatorWrapper>
                        {/* <NavButtons onPress={() => navigation.navigate('Score')}>
                            <ListOrdered size={48} strokeWidth={1.50} color="#FCFFEB" />
                        </NavButtons> */}
                        <OnTop>
                        </OnTop>
                    </Wrapper>
                </GestureDetector>
            </GestureDetector>
        </GestureHandlerRootView>
    )
}
const OnTop = styled.View`
    background-color: transparent; 
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const Escore = styled.View`
    flex-direction: row;
    align-items: center;
`
const PointsText = styled.Text`
    color: #000000;
    font-family: RobotoMono_500Medium;
    font-size: 20px;
`
const PQuestion = styled.Text`
    font-size: 50px;
    color: black;
    font-family: RobotoMono_500Medium;
`
const POption = styled.Text`
    color: black;
    font-family: RobotoMono_500Medium;
    font-size: 40px;
`
const OptionsWrapper = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 30px;
`
const OptionButton = styled.Pressable`
    background-color: #FCFFEB;
    width: 300px;
    height: 75px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    background-color: #1E1E1E;
`
const CalculatorWrapper = styled.View`
    width: 370px;
    height: 640px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    transition: 0.5s;
`
const Calculator = styled.View`
    width: 325px;
    height: 610px;
    border-radius: 30px;
    padding-top: 10px;
    align-items: center;
    transition: 0.5s;
`
const Display = styled.View`
    width: 300px;
    height: 100px;
    background-color: #FCFFEB;
    border-radius: 30px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`
const NavButtons = styled.Pressable`
    flex-direction: row;
    gap: 20px;
    justify-content: center;
`
// const RepeatDiv = styled.Pressable`
//     width: 170px;
//     height: 60px;
//     background-color: #FCFFEB;
//     border-radius: 10px;
//     align-items: center;
//     justify-content: center;
// `