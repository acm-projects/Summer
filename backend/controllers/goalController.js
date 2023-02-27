
const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @description Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})


// @description Set Goals
//@route POST /api/goals
//@access Private
const setGoal = asyncHandler (async (req, res) => {
    //console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)
})




// @description Get Goals
//@route PUT /api/goals/id
//@access Private
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        req.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)

    //check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    //make sure the logged in user matches the video user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')

    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
    
    res.status(200).json(updatedGoal)
})





// @description Get Goals
//@route DELETE /api/goals/id
//@access Private
const deleteGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        req.status(400)
        throw new Error('Goal not found')
    }


    const user = await User.findById(req.user.id)

    //check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    //make sure the logged in user matches the video user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')

    }
    

    await goal.remove()
    res.status(200).json({id : req.params.id})
})




module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}