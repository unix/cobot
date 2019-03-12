import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'

export default (content: any) => {
  emitter.emit(
    GITLAB.BotEvents.Push,
    (<GITLAB.EventContext[GITLAB.BotEvents.Push]>content),
  )
}
