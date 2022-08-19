export default function Deck({
    children: cards,
}) {
    return (
        <div className="border-2 flex flex-row items-center justify-center flex-wrap">
            {cards}
        </div>
    );
}
