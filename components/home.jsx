import styled from 'styled-components/native';
import { Check, Repeat, Volume2 } from 'lucide-react-native';
import Options from './options';
import { useEffect, useState } from 'react';

export default function Home() {

    const [query, setQuery] = useState('');
    const [options, setOptions] = useState([]);
    const [result, setResult] = useState()
    const [reload, setReload] = useState(false)

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
            setResult(answer)
            return answer, question;
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

    //pra checar se nao tem nenhuma opção igual a outra
    function isOptionUnique(alternative) {
        const optionsSet = new Set(alternative);

        if (optionsSet < 4) {
            Question('easy');
        } else {
            setOptions(Array.from(optionsSet));
        }

    }

    function isRigthOne(option) {
        console.log(option + "option")
        console.log(result + "result")
        if (option === result) {
            setReload(true)
            //ele atualiza a pag mas não atualiza o state
        }
    }

    useEffect(() => {
        Question('easy');
        setReload(false)
    }, [reload == true])

    return (
        <Wrapper>
            <Sound>
                <Volume2 size={32} color="#000000" />
            </Sound>
            <CalculatorWrapper>
                <Calculator>
                    <Display><PQuestion>{query}=?</PQuestion></Display>
                    <OptionsWrapper>
                        {
                            options.map((option) =>
                                <OptionButton key={option} onPress={() => isRigthOne(option)}>
                                    <POption>
                                        {option}
                                    </POption>
                                </OptionButton>
                            )
                        }
                    </OptionsWrapper >
                </Calculator>
            </CalculatorWrapper>
            <NavButtons>
                <RepeatDiv><Repeat size={32} color="#000000" /></RepeatDiv>
                <Confirm><Check size={32} color="#000000" /></Confirm>
            </NavButtons>
        </Wrapper >
    )
}

const PQuestion = styled.Text`
    color: black;
    font-family: RobotoMono_500Medium;
    font-size: 50px;
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
    flex: 1;
    align-items: center;
`
const Sound = styled.View`
    margin-top: 30px;
`
const CalculatorWrapper = styled.View`
    background-color: #181F1C;
    width: 370px;
    height: 640px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`
const Calculator = styled.View`
    background-color: #315C2B;
    width: 325px;
    height: 610px;
    border-radius: 30px;
    align-items: center;
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
const NavButtons = styled.View`
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`
const RepeatDiv = styled.Pressable`
    width: 170px;
    height: 60px;
    background-color: #E3D26F;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    `
const Confirm = styled.Pressable`
    width: 170px;
    height: 60px;
    background-color: #9EA93F;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`