const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();




router.use((req, res, next) => { 
    console.log('THIS IS REQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
    next()
})

router.post("/", csrfProtection, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth
    const {content, storyId } = req.body;
    const comment = await db.Comment.create({
        userId,
        content,
        storyId
    })
    res.redirect(`/stories/${storyId}`)
}))



module.exports = router;
