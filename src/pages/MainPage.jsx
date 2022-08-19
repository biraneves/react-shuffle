import Header from "../components/Header";
import Main from "../components/Main";
import Button from "../components/Button";
import Deck from "../components/Deck";

export default function MainPage() {
    return (
        <>
            <Header>Sorteio - Balboa</Header>
            <Main>
                <Button>Embaralhar</Button>
                <Deck></Deck>
            </Main>
        </>
    );
}
