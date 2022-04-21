
export interface User{

    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    token?: string; // ? means optional property (allowed to be null or skipped)
}

export const list: User[] = [{
    firstName: 'John',
    lastName: 'Doe',
    handle: '@johndoe',
    password: 'password',
    email: 'email@email.com',
    pic: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: 1,
},
{
    firstName: 'Deborah',
    lastName: 'Doe',
    handle: '@deborahdoe',
    password: 'password',
    email: 'deborah@email.com',
    pic: 'https://randomuser.me/api/portraits/women/2.jpg',
    id: 2,
},
{
    firstName: 'Obo',
    lastName: 'Doe',
    handle: '@obodoe',
    password: 'password',
    email: 'Obo@email.com',
    pic: 'https://randomuser.me/api/portraits/men/3.jpg',
    id: 3,
},
];