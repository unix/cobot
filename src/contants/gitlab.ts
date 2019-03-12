import { NOTES, REQUEST, WIKI, PIPELINE, BUILD, PUSH, TAG, ISSUE } from '../contants'

export enum HEADERS {
  EVENT_KEY = 'x-gitlab-event',
  TOKEN_KEY = 'x-gitlab-token',
}

export const SUPPORT_EVENTS = {
  'Note Hook': 1,
  'Wiki Page Hook': 1,
  'Pipeline Hook': 1,
  'Merge Request Hook': 1,
  'Build Hook': 1,
  'Push Hook': 1,
  'Tag Push Hook': 1,
  'Issue Hook': 1,
}

export enum BotEvents {
  CommentOnMergeRequest = 'CommentOnMergeRequest',
  CommentOnCommit = 'CommentOnCommit',
  CommentOnIssue = 'CommentOnIssue',
  CommentOnSnippet = 'CommentOnSnippet',
  MergeRequest = 'MergeRequest',
  WikiCreate = 'WikiCreate',
  WikiEdite = 'WikiEdite',
  WikiDelete = 'WikiDelete',
  PipelineOnRunning = 'PipelineOnRunning',
  PipelineOnPending = 'PipelineOnPending',
  PipelineOnSuccess = 'PipelineOnSuccess',
  PipelineOnFailed = 'PipelineOnFailed',
  PipelineOnCanceled = 'PipelineOnCanceled',
  PipelineOnSkipped = 'PipelineOnSkipped',
  PipelineOnAnyStatus = 'PipelineOnAnyStatus',
  BuildOnAnyStatus = 'BuildOnAnyStatus',
  Push = 'PUSH',
  Tag = 'TAG',
  IssueOnAnyAction = 'IssueOnAnyAction',
  IssueOnOpen = 'IssueOnOpen',
  IssueOnUpdate = 'IssueOnUpdate',
  IssueOnClose = 'IssueOnClose',
  IssueOnReopen = 'IssueOnReopen',
}

export interface EventContext {
  [BotEvents.CommentOnMergeRequest]: NOTES.NoteMergeRequestEvent
  [BotEvents.CommentOnCommit]: NOTES.NoteCommitEvent
  [BotEvents.CommentOnIssue]: NOTES.NoteIssueEvent
  [BotEvents.CommentOnSnippet]: NOTES.NoteSnippetEvent
  [BotEvents.MergeRequest]: REQUEST.MergeRequestEvent
  [BotEvents.WikiCreate]: WIKI.WikiCreateEvent
  [BotEvents.WikiEdite]: WIKI.WikiEditeEvent
  [BotEvents.WikiDelete]: WIKI.WikiDeleteEvent
  [BotEvents.PipelineOnAnyStatus]: PIPELINE.PipelineEvent
  [BotEvents.PipelineOnRunning]: PIPELINE.PipelineEvent
  [BotEvents.PipelineOnPending]: PIPELINE.PipelineEvent
  [BotEvents.PipelineOnSuccess]: PIPELINE.PipelineEvent
  [BotEvents.PipelineOnFailed]: PIPELINE.PipelineEvent
  [BotEvents.PipelineOnCanceled]: PIPELINE.PipelineEvent
  [BotEvents.PipelineOnSkipped]: PIPELINE.PipelineEvent
  [BotEvents.BuildOnAnyStatus]: BUILD.BuildEvent
  [BotEvents.Push]: PUSH.PushEvent
  [BotEvents.Tag]: TAG.TagEvent
  [BotEvents.IssueOnAnyAction]: ISSUE.IssueEvent
  [BotEvents.IssueOnOpen]: ISSUE.IssueEvent
  [BotEvents.IssueOnUpdate]: ISSUE.IssueEvent
  [BotEvents.IssueOnClose]: ISSUE.IssueEvent
  [BotEvents.IssueOnReopen]: ISSUE.IssueEvent
}

