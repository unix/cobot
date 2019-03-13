import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cobot, { BotEvents } from '../../src'


const app: Koa = new Koa()
app.use(bodyParser())
app.use(cobot.koa())

const bot = cobot.lift({
  host: 'https://gitlab.xxxx.com/',
  private: 'xxx',
})
bot.on(BotEvents.MergeRequest, async (context) => {
  await context.actions.reply('ok')
})

app.listen(3000, () => {
  console.log('koa example server listening on 3000.')
})
