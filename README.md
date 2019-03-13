## cobot

A user-experience-focused middleware for building Gitlab applications.

Supports: [Express](https://github.com/expressjs/express) / [Koa](https://github.com/koajs/koa)

<br/>

### Why cobot?

- NO APIS

- Friendly user experience design

- Include `.d.ts`, support for automatic completion in editor.

- Semantic actions.

<br/>

### How to use

1. install robot: `npm i cobot`.

2. import to your nodejs server:

```ts
// express
import cobot, { BotEvents } from 'cobot'
app.use(cobot.express())

// koa2
app.use(cobot.koa())
```

3. set webhook on gitlab: `Settings > integrations > url('http://yourhost/') > Add webhook`. you can fill in any api on your nodjes server, robot automatically identifies requests from webhooks.


### Example

#### Print `ok` when webhook is triggered.
```ts
const bot = cobot.lift()
bot.on(BotEvents.MergeRequest, context => console.log('ok'))
```

<br/>

#### Reply `thanks your issue` when a new issue opened.

```ts
const bot = cobot.lift()
bot.on(BotEvents.IssueOnOpen, context => {
  context.actions.reply('thanks your issue')
})
```

<br/>

#### Don't worry about interfaces and methods

<div width="800" align="center">
<img src=".github/ex1.png" width="650" height="150">
<img src=".github/ex2.png" width="650" height="150">
</div>

<br/>


#### [More examples](https://github.com/wittbulter/cobot/blob/master/examples/)

<br/>


### LICENSE

[MIT](LICENSE)

