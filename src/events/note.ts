import { GITLAB } from '../contants'
import { emitter } from '../utils/shared'

export default (content: any) => {
  if (content.merge_request) {
    return emitter.emit(
      GITLAB.BotEvents.CommentOnMergeRequest,
      (<GITLAB.EventContext[GITLAB.BotEvents.CommentOnMergeRequest]>content),
    )
  }
  
  if (content.commit) {
    return emitter.emit(
      GITLAB.BotEvents.CommentOnCommit,
      (<GITLAB.EventContext[GITLAB.BotEvents.CommentOnCommit]>content),
    )
  }
  
  if (content.issue) {
    return emitter.emit(
      GITLAB.BotEvents.CommentOnIssue,
      (<GITLAB.EventContext[GITLAB.BotEvents.CommentOnIssue]>content),
    )
  }
  
  if (content.snippet) {
    return emitter.emit(
      GITLAB.BotEvents.CommentOnSnippet,
      (<GITLAB.EventContext[GITLAB.BotEvents.CommentOnSnippet]>content),
    )
  }
  
}
