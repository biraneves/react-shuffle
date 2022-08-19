import Label from "./Label";
import Photo from "./Photo";

export default function Card({
    urlPhoto,
    altText,
    labelText,
}) {
    return (
        <div className="flex flex-col items-center justify-center w-80 p-8 m-4 shadow-md rounded-sm" style={{backgroundColor: '#FFC300'}}>
            <Photo urlFile={urlPhoto} alternativaText={altText} />
            <Label>{labelText}</Label>
        </div>
    );
}
