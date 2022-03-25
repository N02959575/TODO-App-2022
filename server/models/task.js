const tasks = [
    { task: "Make Bulma great again", dueDate:"2022-4-19", creator: "@johndoe", taskee: "@obodoe", checked: true },
    { task: "Add some more features", dueDate:"2022-4-8", creator: "@deborahdoe", taskee: "@johndoe", checked: false },
    { task: "Make a github account", dueDate:"2022-4-3", creator: "@obodoe", taskee: "@deborahdoe", checked: false },
    { task: " Learn how to use github", dueDate:"2022-4-10", creator: "@deborahdoe", taskee: "@johndoe", checked: false },
    { task: "add a .gitignore file", dueDate:"2022-4-1", creator: "@obodoe", taskee: "@deborahdoe", checked: false },
  ]

function create(task){
    tasks.checked = false;

    tasks.push(task);
    return task;
}


module.exports.tasks = tasks;
module.exports.create = create;