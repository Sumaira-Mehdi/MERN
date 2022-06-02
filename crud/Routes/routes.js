
import express from 'express';
var router = express.Router();

router.get('/', function(_req, res) {
    res.render('add');
  });

export {router};