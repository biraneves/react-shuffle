import { people } from "../data/people";

import Header from "../components/Header";
import Main from "../components/Main";
import Button from "../components/Button";
import Deck from "../components/Deck";
import Card from "../components/Card";

export default function MainPage() {
    return (
        <>
            <Header>Sorteio - Balboa</Header>
            <Main>
                <Button>Embaralhar</Button>
                <Deck>
                    {
                        people.map(item => {
                            return (
                                <Card urlPhoto={item.photo} altText={item.name} labelText={item.name} key={item.id} />
                            );
                        })
                    }
                </Deck>
            </Main>
        </>
    );
}
