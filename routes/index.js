const router = require('express').Router();

const noteRouter = require('./notes');

router.arguments('/note', noteRouter);

module.exports = router;