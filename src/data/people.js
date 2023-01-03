import { getNewId } from "../services/idService"

export const people = [
    {
        'name': 'Carol',
        'photo': 'photos/carol.jpg',
    },
    {
        'name': 'Gabi',
        'photo': 'photos/gabi.jpg',
    },
    {
        'name': 'Kazukas',
        'photo': 'photos/kazukas.jpg',
    },
    {
        'name': 'Rayssa',
        'photo': 'photos/rayssa.jpg',
    },
    {
        'name': 'Renata',
        'photo': 'photos/renata.jpg',
    },
]
    .map(item => {
        return {id: getNewId(), ...item};
    })
    .sort((a, b) => a.name.localeCompare(b.name));