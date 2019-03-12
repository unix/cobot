import Events from 'events'
import { GITLAB } from '../contants'

const eventIdentity = 'COBOT_EVENTS'
const settingIdentity = 'COBOT_SETTINGS'
global[eventIdentity] = global[eventIdentity] || new Events()

export interface Settings {
  host: string
  private: string
}

export class CustomEmitter {
  constructor(private readonly settings?: Settings) {
    if (this.settings) {
      global[settingIdentity] = global[settingIdentity] || this.settings
    }
  }
  
  on<T extends GITLAB.BotEvents>(eventType: T, callback: (context: GITLAB.EventContext[T]) => void): void {
    global[eventIdentity].on(eventType, callback)
  }
  
  emit<T extends GITLAB.BotEvents>(eventType: T, context: GITLAB.EventContext[T]): void {
    global[eventIdentity].emit(eventType, context)
  }
  
  getSettings(): Settings | null {
    return global[settingIdentity]
  }
}


export const emitter = new CustomEmitter()
