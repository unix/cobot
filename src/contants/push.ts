import { Project, Repository } from './notes'

export interface CommitAuthor {
  name: string
  email: string
}

export interface Commit {
  id: string
  message: string
  timestamp: string
  url: string
  author: CommitAuthor
  added: string[]
  modified: string[]
  removed: string[]
}

export interface PushEvent {
  object_kind: string
  before: string
  after: string
  ref: string
  checkout_sha: string
  user_name: string
  user_email: string
  user_avatar: string
  project_id: number
  user_id: number
  project: Project
  repository: Repository
  commits: Commit[]
  total_commits_count: number
}

