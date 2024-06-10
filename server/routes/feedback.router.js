const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
   const {feeling, understanding, support, comments} = req.body
 const queryText = `
 INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
 VALUES ($1, $2, $3, $4)
 `
 pool.query(queryText, [feeling, understanding, support, comments])
 .then((result) => {
    res.sendStatus(201)
 })
 .catch((err) => {
    console.error("error in SQL QUERY for post", err)
 })
})

router.delete('/:id', (req, res) => {
    const feedbackId = req.params.id
    const queryText = `
    DELETE FROM "feedback" 
    WHERE "id" = $1;
    `

    pool.query(queryText, [feedbackId])
    .then((result) => {
        console.log(`Feedback entry ${feedbackId} has been removed`)
        res.sendStatus(204)
    })
    .catch((err) => {
        console.error("Error deleting feedback entry:", err)
        res.sendStatus(500)
    })
})

router.put('/:id/flag', (req, res) => {
    const feedbackId = req.params.id;
    const isFlagged = req.body.isFlagged; // Assuming you'll send isFlagged as true/false in the request body

    const queryText = `UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2`;

    pool.query(queryText, [isFlagged, feedbackId])
        .then((result) => {
            console.log('Feedback entry flagged');
            res.sendStatus(204); // No content
        })
        .catch((err) => {
            console.error('Error updating feedback entry:', err);
            res.sendStatus(500); // Internal server error
        });
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
