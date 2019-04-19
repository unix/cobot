import { GITLAB } from '../contants'
import { dispenser } from '../events'

export class Caller {
  static isGitlabEvent(event: string): boolean {
    return !!GITLAB.SUPPORT_EVENTS[event]
  }
  
  static notFoundBody(): void {
    console.log('can\'t parse request body, make sure parse package is used.')
    console.log('in koa: try "npm i koa-bodyparser".')
    console.log('in express: try "npm i body-parser".')
  }
  
  koa<T>(): T | any {
    return (ctx, next): any => {
      const headers = ctx.request.header
      const event = headers[GITLAB.HEADERS.EVENT_KEY]
      if (!Caller.isGitlabEvent(event)) return next()
      if (!ctx.request.body) return Caller.notFoundBody()
      // console.log(ctx.request.body, 123)
      dispenser(event, ctx.request.body)
      return ctx.body = { status: 'ok' }
    }
  }
  
  express<T>(): T | any {
    return (req, res, next): any => {
      const headers = req.headers
      const event = headers[GITLAB.HEADERS.EVENT_KEY]
      if (!Caller.isGitlabEvent(event)) return next()
      if (!req.body) return Caller.notFoundBody()
      dispenser(event, req.body)
      return res.status(200).send({ status: 'ok' })
    }
  }
  
}
