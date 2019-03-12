import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'

export default (content: any) => {
  const attr: any = content.object_attributes
  if (!attr || !attr.action) return
  
  if (attr.action === 'create') {
    return emitter.emit(
      GITLAB.BotEvents.WikiCreate,
      (<GITLAB.EventContext[GITLAB.BotEvents.WikiCreate]>content),
    )
  }
  
  if (attr.action === 'edite') {
    return emitter.emit(
      GITLAB.BotEvents.WikiEdite,
      (<GITLAB.EventContext[GITLAB.BotEvents.WikiEdite]>content),
    )
  }
  
  if (attr.action === 'delete') {
    return emitter.emit(
      GITLAB.BotEvents.WikiDelete,
      (<GITLAB.EventContext[GITLAB.BotEvents.WikiDelete]>content),
    )
  }
  
}
