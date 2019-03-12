import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'

export default (content: any) => {
  emitter.emit(
    GITLAB.BotEvents.Tag,
    (<GITLAB.EventContext[GITLAB.BotEvents.Tag]>content),
  )
}
