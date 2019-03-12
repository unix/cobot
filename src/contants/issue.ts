import { User, Project, Assignee } from './notes'


export interface IssueRepository {
  name: string
  url: string
  description: string
  homepage: string
}

export interface IssueAttributes {
  id: number,
  assignee_ids: number[],
  assignee_id: number
  author_id: number
  project_id: number
  position: number
  branch_name: null | string
  milestone_id: null | number
  iid: number
  title: string
  created_at: string
  updated_at: string
  description: string
  state: 'reopened' | 'closed' | 'opened'
  url: string
  action:string
}

export interface IssueLabel {
  id: number
  title: string
  color: string
  created_at: string
  updated_at: string
  description: string
  type:string
  template: boolean,
  project_id: number,
  group_id: number
}

export interface IssueChanges {
  updated_by_id: Array<null | number>
  updated_at: Array<string>
  labels: {
    previous: Array<IssueLabel>,
    current: Array<IssueLabel>,
  }
}

export interface IssueActionsReplyOptions {
  confidential?: boolean
  assignee_ids?: Array<number>
  milestone_id?: number
  labels?: string
  created_at?: string
  due_date?: string
  merge_request_to_resolve_discussions_of?: number
  discussion_to_resolve?: string
  weight?: number
}
export interface IssueActions {
  close: () => Promise<any>
  reopen: () => Promise<any>
  remove: () => Promise<any>
  reply: (text: string) => Promise<any>
}

export interface IssueEvent {
  object_kind: string
  user: User
  project: Project
  object_attributes: IssueAttributes
  assignees: Array<Assignee>
  assignee: Assignee
  labels: Array<IssueLabel>
  changes: IssueChanges
  actions: IssueActions
}
