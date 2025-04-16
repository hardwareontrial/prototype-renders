const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({message: `API running on port ${process.env.APP_PORT}`});
});

router.get('/data', (req, res) => {
  res.status(200).json({message: `return from /data`});
});
router.put('/data', (req, res) => {
  res.status(200).json({data: req.body});
});

module.exports = router