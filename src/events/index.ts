import note from './note'
import request from './request'
import pipeline from './pipeline'
import wiki from './wiki'
import build from './build'
import push from './push'
import tag from './tag'
import issue from './issue'

export const GITLAB_EVENTS = {
  'Wiki Page Hook': wiki,
  'Pipeline Hook': pipeline,
  'Merge Request Hook': request,
  'Note Hook': note,
  'Build Hook': build,
  'Push Hook': push,
  'Tag Push Hook': tag,
  'Issue Hook': issue,
}


export const dispenser = (event: string, content: {}): void => {
  const handler = GITLAB_EVENTS[event]
  if (!handler) return
  handler(content)
}
