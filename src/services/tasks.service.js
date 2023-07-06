const TaskRepo = new (require('./../repo/tasks.repo'))('tasks');

const getTaskList = async(req,res) => {
    const rawdata = await TaskRepo.getTasks();
    res.send(Object.values(rawdata));
}

const saveTask = async(req,res) => {
    if(req.body) {
        try {
            let task = req.body
            res.send(await TaskRepo.saveATask(task));
        } catch(error) {
            console.error(error)
            res.status(500).send(error)
        }
    } else res.status(400).send('Task is not present in body')
}

const deleteAllTasks = async (req,res) => {
    try {
        await TaskRepo.deleteAllTasks()
        res.send('OK');
    } catch(error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getTaskList,
    saveTask,
    deleteAllTasks
}