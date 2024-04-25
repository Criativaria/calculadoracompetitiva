import { Coins } from "lucide-react-native"
import { TextInput } from "react-native"
import { GestureDetector } from "react-native-gesture-handler"
import styled from "styled-components"

export default function Form() {
    return (

        <Wrapper>
            <CalculatorWrapper>
                <Calculator>
                    <TitleWrapper>
                        <Title>
                            Crie uma conta
                        </Title>
                        <SubTitle>
                            para competir com outros jogadores
                        </SubTitle>
                    </TitleWrapper>
                    <FormWrapper>
                        <Input placeholder="Nome:" />
                        <Input placeholder="Senha:" />
                    </FormWrapper>
                    <SubmitButton>
                        <POption>
                            enviar
                        </POption>
                    </SubmitButton>
                </Calculator>
            </CalculatorWrapper>
        </Wrapper>
    )
}
const SubTitle = styled.Text`
    font-family: RobotoMono_500Medium;
    font-size: 16px;
    color: black;
    text-align: center;
`
const Title = styled.Text`
    font-family: RobotoMono_500Medium;
    font-size: 30px;
    color: black;
`
const TitleWrapper = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 125px;
    width: 300px;
    border-radius: 30px; 
    top: 40px;
`
const Input = styled.TextInput`
    width: 200px;
    font-family: RobotoMono_500Medium;
    border: 1px solid black;
    border-radius: 10px;
    height: 80px;
    width: 300px;
    padding: 30px;
    font-size: 20px;
`
const POption = styled.Text`
    color: #D9D9D9;
    font-family: RobotoMono_500Medium;
    font-size: 20px;
`
const FormWrapper = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 50px;
`
const SubmitButton = styled.Pressable`
    background-color: #1E1E1E;
    width: 300px;
    height: 75px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    bottom: 40px;
`
const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
`
const CalculatorWrapper = styled.View`
    background-color: #1E1E1E;
    width: 370px;
    height: 640px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    transition: 0.5s;
`
const Calculator = styled.View`
    background-color: #D9D9D9;
    width: 325px;
    height: 610px;
    border-radius: 30px;
    padding-top: 10px;
    align-items: center;
    transition: 0.5s;
`