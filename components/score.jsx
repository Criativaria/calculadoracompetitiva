import { Coins } from "lucide-react-native"
import { GestureDetector } from "react-native-gesture-handler"
import styled from "styled-components"

export default function ScorePoints() {
    return (

        <Wrapper>
            <CalculatorWrapper>
                <Calculator>
                    <Escore>
                        <PointsText>Meus Pontos: </PointsText>
                        <Coins size={38} strokeWidth={2.25} color="#000000" />
                        <PointsText>12412414</PointsText>
                    </Escore>
                    <PlayersWrapper>
                        <PlayerWrapper>
                            <Player>
                                <POption>
                                    nome do fulano
                                </POption>
                                <POption>
                                    Score: 12412412
                                </POption>
                            </Player>
                            <POption>
                                1°
                            </POption>
                        </PlayerWrapper>
                    </PlayersWrapper>
                </Calculator>
            </CalculatorWrapper>
            <OnTop>
            </OnTop>
        </Wrapper>
    )
}
const Player = styled.View`
    display: flex;
    flex-direction: column;
`
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
const POption = styled.Text`
    color: #D9D9D9;
    font-family: RobotoMono_500Medium;
    font-size: 20px;
`
const PlayersWrapper = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 30px;
`
const PlayerWrapper = styled.View`
    background-color: #1E1E1E;
    width: 300px;
    height: 75px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
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