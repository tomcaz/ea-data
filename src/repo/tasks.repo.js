const { JsonDB, Config } = require('node-json-db');

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
        return this.db.push(`/${this.table}/${task.id}`,task)
    }

    deleteAllTasks = async () => {
        this.db.push(`/${this.table}`, {})
    }
}
module.exports = TaskRepo