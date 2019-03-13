## cobot

A user-experience-focused middleware for building Gitlab applications.

supports: [Express](https://github.com/expressjs/express) / [Koa](https://github.com/koajs/koa)

<br/>

### Why cobot?

- NO APIS

- Friendly user experience design

- Include `.d.ts`, support for automatic completion in editor.

- Semantic actions.

<br/>

### Example

#### Print `ok` when webhook is triggered.
1. import and use `cobot` in your server.

```ts
import cobot, { BotEvents } from 'cobot'

//...
app.use(cobot.express())
```

2. listen hook event.

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

![ex1](.github/ex1.png)
![ex1](.github/ex2.png)

<br/>

### Documentation



<br/>

### LICENSE

[MIT](LICENSE)


