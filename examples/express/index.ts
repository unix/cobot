import express from 'express'
import bodyParser from 'body-parser'
import cobot, { BotEvents } from 'cobot'

const app = express()
app.use(bodyParser.json())
app.use(cobot.express())


const bot = cobot.lift()
bot.on(BotEvents.IssueOnOpen, context => {
  console.log('ok')
})

app.listen(3000, () => {
  console.log('express example server listening on 3000.')
})
