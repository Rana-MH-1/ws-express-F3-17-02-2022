const express = require('express')
const router = express.Router()
const {UserLists} = require('../UserLists')

//add a user
//@method: post
router.post('/', (req,res)=>{
    console.log(req.body);
    const newUserLists = [...UserLists, req.body]
    res.json(newUserLists)
})

//get all user Lists
//@method: GET
router.get('/', (req,res)=>{
    res.json(UserLists)
})

//delete a user
//method : @delete
router.delete('/:idUser',(req,res)=>{
    const deleteduserLists = UserLists.filter(user=> user.id !== +req.params.idUser)
    res.json(deleteduserLists)
})

//update a data user
router.put('/:id',(req,res)=>{
    const updatedUserLists = UserLists.map(user=> (user.id == req.params.id)? {...user,...req.body} : user)
    res.json(updatedUserLists)
})

module.exports = router
