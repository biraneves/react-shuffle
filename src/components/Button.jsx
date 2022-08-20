export default function Button({
    children: description = 'Texto do botão',
    onButtonClick = null,
}) {
    function handleButtonClick() {
        if (onButtonClick)
            onButtonClick();
    }

    return (
        <button 
            className="w-56 h-12 mb-2 mt-8 mx-2 shadow-md rounded-md text-white font-semibold" 
            style={{backgroundColor: '#0FC3E6'}}
            onClick={handleButtonClick}
        >
            {description}
        </button>
    );
}
