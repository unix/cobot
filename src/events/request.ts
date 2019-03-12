import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'
import { $fetch } from '../utils/fetch'


export default (content: any) => {
  const attr: any = content.object_attributes
  const url = `/projects/${attr.target_project_id}/merge_requests/${attr.iid}`
  content.actions = {
    reply: text => $fetch.post(`${url}/notes`, { body: text }),
    findNotes: () => $fetch.get(`${url}/notes`),
    removeNote: noteId => $fetch.delete(`${url}/notes/${noteId}`),
    close: () => {
      if (attr.state !== 'opened' && attr.state !== 'reopened') return
      return $fetch.put(url, { state_event: 'close' })
    },
    reopen: () => {
      if (attr.state !== 'closed') return
      return $fetch.put(url, { state_event: 'reopen' })
    },
  }
  
  return emitter.emit(
    GITLAB.BotEvents.MergeRequest,
    (<GITLAB.EventContext[GITLAB.BotEvents.MergeRequest]>content),
  )
}
