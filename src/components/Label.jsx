export default function Label({
    children: text = 'Texto da label',
}) {
    return (
        <span className="m-4 text-2xl font-semibold" style={{color: '#413C3C'}}>{text}</span>
    );
}
