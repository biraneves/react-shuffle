import { getNewId } from '../services/idService';

export const people = [
    {
        name: 'Carol Dolescki',
        photo: 'photos/carol_dolescki.jpg',
    },
    {
        name: 'Carol Valadão',
        photo: 'photos/carol_valadao.jpg',
    },
    {
        name: 'Larissa',
        photo: 'photos/larissa.jpg',
    },
    {
        name: 'Nicoll',
        photo: 'photos/nicoll.jpg',
    },
    {
        name: 'Priscila',
        photo: 'photos/priscila.jpg',
    },
    {
        name: 'Renata',
        photo: 'photos/renata.jpg',
    },
]
    .map((item) => {
        return { id: getNewId(), ...item };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
