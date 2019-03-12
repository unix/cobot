import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'

export default (content: any) => {
  emitter.emit(
    GITLAB.BotEvents.BuildOnAnyStatus,
    (<GITLAB.EventContext[GITLAB.BotEvents.BuildOnAnyStatus]>content),
  )
}
