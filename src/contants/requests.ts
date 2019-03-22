import { User, MergeRequest, Assignee, Author } from './notes'


export interface Attributes extends MergeRequest {
  work_in_progress: boolean
  url: string
  action: string
  assignee: Assignee
}

export interface UpdateRequestParams {
  target_branch?: string
  title?: string
  assignee_id?: number
  milestone_id?: number
  labels?: string
  description?: string
  state_event?: 'close' | 'reopen'
  remove_source_branch?: boolean
  squash?: boolean
  discussion_locked?: boolean
  allow_collaboration?: boolean
  allow_maintainer_to_push?: boolean
}

export interface NoteInMergeRequest {
  id: string
  body: string
  author: Author
  created_at: string
  updated_at: string
  system: boolean
  noteable_id: number
  noteable_type: string
}

export interface MergeRequestActions {
  reply: (text: string) => Promise<any>
  findNotes: () => Promise<Array<NoteInMergeRequest>>
  removeNote: (noteId: number) => Promise<any>
  close: () => Promise<any>
  reopen: () => Promise<any>
}

export interface MergeRequestEvent {
  object_kind: string
  user: User
  object_attributes: Attributes
  actions: MergeRequestActions
}
