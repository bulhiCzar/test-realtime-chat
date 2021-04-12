const {Router} = require('express')
const events = require('events')
const router = Router()
const emitter = new events.EventEmitter()

router.get(
    '/',
    async (req, res) => {
        try {
            emitter.once('new', (message)=>{
                res.json(message)
            })
        }catch (e) {
            res.json('bad')
        }
    }
)

router.post(
    '/',
    async (req, res) => {
        try {
            const {text, sender} = req.body
            if (!text || !sender) throw new Error()

            emitter.emit('new', {text, sender})

            res.json('ok')
        }catch (e) {
            res.json('bad')
        }
    }
)

module.exports = router