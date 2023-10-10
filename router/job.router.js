const express = require('express');
const router = express.Router();

const {
  creatJob,
  getJob,
  deleteJob,
  updateJob,
} = require('../controllers/job.controller');

router.route('/:account_id').post(creatJob).get(getJob);
router.route('/:id').patch(updateJob).delete(deleteJob);
module.exports = router;
