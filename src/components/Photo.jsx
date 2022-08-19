export default function Photo({
    urlFile,
    alternativaText = 'Alternative text',
}) {
    return (
        <img 
            src={urlFile} 
            alt={alternativaText} 
            className='w-36 rounded-full border-2 border-solid border-white'
        />
    );
}
