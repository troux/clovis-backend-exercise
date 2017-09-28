const _ = require('lodash')
const router = require('koa-router')()

const db = require('./db')

router

.get('/users', async ctx => {
  const users = await db.find()
  const tmp = users.map(u => _.omit(u, 'password'))
  ctx.status = 200
  ctx.body = tmp
})

.post('/users', async ctx => {
  
})

module.exports = router
