import { getNewId } from "../services/idService"

export const people = [
    {
        'name': 'Carol',
        'photo': '../../public/photos/carol.jpg',
    },
    {
        'name': 'Gabi',
        'photo': '../../public/photos/gabi.jpg',
    },
    {
        'name': 'Kazukas',
        'photo': '../../public/photos/kazukas.jpg',
    },
    {
        'name': 'Rayssa',
        'photo': '../../public/photos/rayssa.jpg',
    },
    {
        'name': 'Renata',
        'photo': '../../public/photos/renata.jpg',
    },
]
    .map(item => {
        return {id: getNewId(), ...item};
    })
    .sort((a, b) => a.name.localeCompare(b.name));