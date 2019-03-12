import { Project, Repository } from './notes'
import { Commit } from './push'


export interface TagEvent {
  object_kind: string
  before: string
  after: string
  ref: string
  checkout_sha: string
  user_id: number
  user_name: string
  user_avatar: null | string
  project_id: number
  project: Project
  repository: Repository
  commits: Array<Commit>
  total_commits_count: number
}
