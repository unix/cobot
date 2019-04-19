import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'
import { emit } from 'cluster'

export default (content: any) => {
  const attr: any = content.object_attributes
  if (!attr || !attr.action) return
  
  emitter.emit(
    GITLAB.BotEvents.WikiOnAnyAction,
    (<GITLAB.EventContext[GITLAB.BotEvents.WikiOnAnyAction]>content),
  )
  
  if (attr.action === 'create') {
    return emitter.emit(
      GITLAB.BotEvents.WikiCreate,
      (<GITLAB.EventContext[GITLAB.BotEvents.WikiCreate]>content),
    )
  }
  
  if (attr.action === 'update') {
    return emitter.emit(
      GITLAB.BotEvents.WikiUpdate,
      (<GITLAB.EventContext[GITLAB.BotEvents.WikiUpdate]>content),
    )
  }
  
  if (attr.action === 'delete') {
    return emitter.emit(
      GITLAB.BotEvents.WikiDelete,
      (<GITLAB.EventContext[GITLAB.BotEvents.WikiDelete]>content),
    )
  }
  
}
