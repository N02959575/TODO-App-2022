const userModel = require('./user');
const {db, isConnected, ObjectId} = require('./mongo');

const collection = db.db("todoApp").collection("tasks");

let highestId = 5;

const tasks = [
    { task: "Make Bulma great again", dueDate:"2022-4-19", creator: "@johndoe", taskee: "@obodoe", checked: true, id: 1 },
    { task: "Add some more features", dueDate:"2022-4-8", creator: "@deborahdoe", taskee: "@johndoe", checked: false, id: 2 },
    { task: "Make a github account", dueDate:"2022-4-3", creator: "@obodoe", taskee: "@deborahdoe", checked: false, id: 3 },
    { task: " Learn how to use github", dueDate:"2022-4-10", creator: "@deborahdoe", taskee: "@johndoe", checked: false, id: 4 },
    { task: "add a .gitignore file", dueDate:"2022-4-1", creator: "@obodoe", taskee: "@deborahdoe", checked: false, id: 5 },
  ];

const includeUser = task => ({ ...task, taskee: userModel.get(task.taskee), creator: userModel.get(task.creator) });

async function get(id){
    const task = await collection.findOne({ _id: new ObjectId(id) });
    if(!task){
        throw { status: 404, message: 'Post not found' };
    }
    return includeUser(task) ;
}

async function getTasks(){
    return (await collection.find().toArray()).map(task => ({...task, password: undefined}));
}

function create(task){
    task.id = ++highestId;
    task.checked = false;

    //throw {message: 'This is a test error'};

    tasks.push(task);
    return task;
}

function remove(id){
    const index = tasks.findIndex(task => task.id === parseInt(id));
    const task = tasks.splice(index, 1);

    return task[0];
}

function update(id, newTask){
    const index = tasks.findIndex(task => task.id === parseInt(id));
    const oldTask = tasks[index];
    newTask = tasks[index] = {...oldTask, ...newTask};
    console.log(newTask)
    return newTask;
}

function seed(){
    return collection.insertMany(tasks);
}

module.exports = {
    create,
    remove,
    update,
    seed,
    getTasks,
}
module.exports.get = get;