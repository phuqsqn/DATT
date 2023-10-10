const express = require('express');
const router = express.Router();

const {
  creatCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');

router.route('/').post(creatCategory).get(getCategory);
router.route('/:id').patch(updateCategory).delete(deleteCategory);
module.exports = router;
