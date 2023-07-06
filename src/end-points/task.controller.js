const express = require('express')
const router = express.Router()
const { getTaskList, saveTask, deleteAllTasks, updateTask } = require('./../services/tasks.service')

router.get('/', (req, res) => {
    getTaskList(req,res);
})
router.post('/', (req, res) => {
    saveTask(req,res);
})
router.delete('/', (req, res) => {
    deleteAllTasks(req,res);
})
router.patch('/:id', (req, res) => {
    updateTask(req,res);
})

module.exports = router