import { Caller } from './caller'
import { CustomEmitter, Settings } from './utils/shared'
import { GITLAB } from './contants'
const BotEvents = GITLAB.BotEvents
export {
  BotEvents,
}

export default new class Cobot extends Caller {
  lift(settings?: Settings): CustomEmitter {
    return new CustomEmitter(settings)
  }
}

