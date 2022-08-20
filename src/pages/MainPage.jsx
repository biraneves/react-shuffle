import { people } from "../data/people";
import { rituais } from "../data/rituais";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import { useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Button from "../components/Button";
import Deck from "../components/Deck";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function MainPage() {
    const [allCards, setAllCards] = useState(people);
    const [loading, setLoading] = useState(false);

    function handleShuffleButtonClick() {
        setLoading(true);
        const shuffledCards = helperShuffleArray(allCards);

        setTimeout(() => {
            setLoading(false);
            setAllCards(shuffledCards);
        }, 3000);
    }

    function handleResetButtonClick() {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setAllCards(people);
        }, 1000);
    }

    let mainJsx = (
        <div className="flex justify-center items-center mb-4 mt-48">
            <Loading />
        </div>
    );

    if (!loading) {
        mainJsx = (
            <Deck>
                {
                    allCards.map((item, index) => {
                        return (
                            <Card 
                                urlPhoto={item.photo} 
                                altText={item.name} 
                                topLabelText={item.name} 
                                botLabelText={rituais[index]} 
                                key={item.id} />
                        );
                    })
                }
            </Deck>
        );
    }

    return (
        <>
            <Header>Sorteio - Balboa</Header>
            <Main>
                <div className="flex flex-row items-center justify-center">
                    <Button onButtonClick={handleShuffleButtonClick}>Embaralhar</Button>
                    <Button onButtonClick={handleResetButtonClick}>Reiniciar</Button>
                </div>
                {mainJsx}
            </Main>
        </>
    );
}
