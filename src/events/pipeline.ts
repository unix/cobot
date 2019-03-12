import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'

export default (content: any) => {
  const attr: any = content.object_attributes
  if (!attr || !attr.status) return
  
  emitter.emit(
    GITLAB.BotEvents.PipelineOnAnyStatus,
    (<GITLAB.EventContext[GITLAB.BotEvents.PipelineOnAnyStatus]>content),
  )
  
  const statuses = {
    running: GITLAB.BotEvents.PipelineOnRunning,
    pending: GITLAB.BotEvents.PipelineOnPending,
    success: GITLAB.BotEvents.PipelineOnSuccess,
    failed: GITLAB.BotEvents.PipelineOnFailed,
    canceled: GITLAB.BotEvents.PipelineOnCanceled,
    skipped: GITLAB.BotEvents.PipelineOnSkipped,
  }
  
  const type: string = Object.keys(statuses).find(s => s === attr.status)
  const event: GITLAB.BotEvents = statuses[type]
  type && emitter.emit(event, (<GITLAB.EventContext[typeof event]>content))
  
}
