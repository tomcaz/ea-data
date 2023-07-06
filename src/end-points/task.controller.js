const express = require('express')
const router = express.Router()
const { getTaskList, saveTask, deleteAllTasks } = require('./../services/tasks.service')

router.get('/', (req, res) => {
    getTaskList(req,res);
})
router.post('/', (req, res) => {
    saveTask(req,res);
})
router.delete('/', (req, res) => {
    deleteAllTasks(req,res);
})

module.exports = router