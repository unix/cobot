import { User, Commit, Repository } from './notes'


export interface BuildEvent {
  object_kind: string
  ref: string
  tag: boolean
  before_sha: string
  sha: string
  build_id: number
  build_name: string
  build_stage: string
  build_status: string
  build_started_at: null | string
  build_finished_at: null | string
  build_duration: null | number
  build_allow_failure: boolean
  project_id: boolean
  project_name: string
  user: User
  commit: Commit
  repository: Repository
}
