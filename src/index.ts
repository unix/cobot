import { Caller } from './caller'
import { CustomEmitter, Settings } from './utils/shared'
import { GITLAB } from './contants'
const { BotEvents, HEADERS } = GITLAB
export {
  BotEvents,
  HEADERS,
}

export type BotEventContext = GITLAB.EventContext

export default new class Cobot extends Caller {
  lift(settings?: Settings): CustomEmitter {
    return new CustomEmitter(settings)
  }
}

