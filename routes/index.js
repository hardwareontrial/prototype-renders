const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({message: `API running on port ${process.env.APP_PORT}`});
});

module.exports = router