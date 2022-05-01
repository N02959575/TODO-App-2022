const userModel = require('./user');
const {db, ObjectId} = require('./mongo');

const collection = db.db("todoApp").collection("tasks");

let highestId = 5;

const tasks = [
    { task: "Make Bulma great again", dueDate:"2022-4-19", creator: "@johndoe", taskee: "@obodoe", checked: true, id: 1 },
    { task: "Add some more features", dueDate:"2022-4-8", creator: "@deborahdoe", taskee: "@johndoe", checked: false, id: 2 },
    { task: "Make a github account", dueDate:"2022-4-3", creator: "@obodoe", taskee: "@deborahdoe", checked: false, id: 3 },
    { task: " Learn how to use github", dueDate:"2022-4-10", creator: "@deborahdoe", taskee: "@johndoe", checked: false, id: 4 },
    { task: "add a .gitignore file", dueDate:"2022-4-1", creator: "@obodoe", taskee: "@deborahdoe", checked: false, id: 5 },
  ];

const includeUser = async task => ({ ...task, taskee: await userModel.get(task.taskee)});

//get task by id
async function get(id){
    const task = await collection.findOne({ _id: new ObjectId(id) });
    if(!task){
        throw { status: 404, message: 'Task not found' };
    }
    return includeUser(task) ;
}

//get all tasks for a user
async function getTasks(handle){
    const tasks = await collection.find({ handle }).toArray();

    return Promise.all( tasks.map(x=> includeUser(x)) );
}

//create task
async function create(task){
    task.id = ++highestId;
    task.checked = false;

    const result = collection.insertOne(task);
    task = await get(result.insertedId);

    return task;
}

//delete task
async function remove(id){
    const task = await collection.findOneAndDelete({ _id: ObjectId(id) });
    console.log(task.value);
    return task.value;
}

//update task
async function update(id, newTask){
    newTask = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newTask },
        { returnDocument: 'after' }
    );

    return includeUser(newTask);
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
    async getAll(){
        const tasks = await collection.find().toArray();
        return Promise.all( tasks );
    }
}
module.exports.get = get;