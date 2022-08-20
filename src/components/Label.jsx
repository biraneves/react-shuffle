export default function Label({
    children: text = 'Texto da label',
    labelType,
}) {
    const typeLabel = labelType === 'top' ? 'mt-4 mb-0 text-2xl' : 'mt-2 mb-4 text-lg';

    return (
        <span className={`${typeLabel} font-semibold`} style={{color: '#413C3C'}}>{text}</span>
    );
}
