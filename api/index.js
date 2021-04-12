const { Router } = require('express')
const router = Router()

router.use('/chat', require('./chat/router'))

module.exports = router