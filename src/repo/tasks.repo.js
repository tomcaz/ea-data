const { JsonDB, Config } = require('node-json-db');
const { v4 } = require('uuid');

TaskRepo = class {
    
    constructor(table = 'tasks') {
        this.table = table;
        this.db = new JsonDB(new Config("../eaDataBase", true, false, '/'));
        this.db.getData(`/${this.table}`).then().catch(async error=> await this.db.push(`/${table}`,{}));
    }
    getTasks = async () => {
        return this.db.getData(`/${this.table}`)
    }

    saveATask = async (task) => {
        task = {...task, id: v4()}
        return this.db.push(`/${this.table}/${task.id}`,task)
    }

    deleteAllTasks = async () => {
        this.db.push(`/${this.table}`, {})
    }

    updateTask = async (id, task) => {
        
        const dataToSave = { 
            ... await this.db.getData(`/${this.table}/${id}`),
            ...task
        };
        this.db.push(`/${this.table}/${id}`, dataToSave)
    }
}
module.exports = TaskRepo