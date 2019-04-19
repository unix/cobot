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
bot.on(BotEvents.WikiOnAnyAction, async (context) => {
  console.log(context.object_attributes.action)
})

app.listen(3000, () => {
  console.log('koa example server listening on 3000.')
})
