import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'
import { $fetch } from '../utils/fetch'

export default (content: any) => {
  const attr: any = content.object_attributes
  if (!attr || !attr.action) return
  console.log(attr.state)
  
  const url = `/projects/${attr.project_id}/issues`
  content.actions = {
    reply: (text) => $fetch.post(`${url}/${attr.iid}/notes`, { body: text }),
    remove: () => $fetch.delete(`${url}/${attr.iid}`),
    close: () => {
      if (attr.state === 'closed') return
      return $fetch.put(`${url}/${attr.iid}`, { state_event: 'close' })
    },
    reopen: () => {
      if (attr.state !== 'closed') return
      return $fetch.put(`${url}/${attr.iid}`, { state_event: 'reopen' })
    },
  }
  
  emitter.emit(
    GITLAB.BotEvents.IssueOnAnyAction,
    (<GITLAB.EventContext[GITLAB.BotEvents.IssueOnAnyAction]>content),
  )
  
  const actions = {
    open: GITLAB.BotEvents.IssueOnOpen,
    update: GITLAB.BotEvents.IssueOnUpdate,
    close: GITLAB.BotEvents.IssueOnClose,
    reopen: GITLAB.BotEvents.IssueOnReopen,
  }
  
  const type: string = Object.keys(actions).find(s => s === attr.action)
  const event: GITLAB.BotEvents = actions[type]
  type && emitter.emit(event, (<GITLAB.EventContext[typeof event]>content))
}
