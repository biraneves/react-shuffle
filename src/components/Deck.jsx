export default function Deck({
    children: cards,
}) {
    return (
        <div className="flex flex-row items-center justify-center flex-wrap p-8" >
            {cards}
        </div>
    );
}
