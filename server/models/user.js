const bcrypt = require('bcrypt');

let highestId = 3;

const list = [
{
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

function get(id){
    return { ...list.find(user => user.id === parseInt(id)), password: undefined }
}

async function create(user){
    user.id = ++highestId;

    //the plus converts string to number
    user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);
    
    console.log(user);
    throw {message: 'This is a test error'};

    list.push(user);
    return {...user, password: undefined};
}

function remove(id){
    //... takes all properties and assigns them to outside object
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list.splice(index, 1);
    
    return {...user[0], password: undefined};
}

async function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];

    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, 10);
    }

    newUser = list[index] = { ...oldUser, ...newUser };

    console.log(newUser);
    
    return { ...newUser, password: undefined};
}

module.exports = {
    get,
    create,
    remove,
    update,
    get list(){
        return list.map(user => ({...user, password: undefined}));
    },
};
