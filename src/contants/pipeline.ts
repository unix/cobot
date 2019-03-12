import { User, Project, Commit } from './notes'

export interface Artifacts {
  filename: string | null
  size: number | null
}

export interface Build {
  id: number
  stage: string
  name: string
  status: string
  created_at: null | string
  started_at: null | string
  finished_at: null | string
  when: string
  manual: boolean
  user: User
  runner: null | string
  artifacts_file: Artifacts
}

export interface Attributes {
  id: number
  ref: string
  tag: boolean
  sha: string
  before_sha: string
  stages: string[]
  created_at: string | null
  finished_at: string | null
  duration: number
  status: 'running' | 'pending' | 'success' | 'failed' | 'canceled' | 'skipped'
}

export interface PipelineEvent {
  object_kind: string
  user: User
  project: Project
  commit: Commit
  builds: Array<Build>
  object_attributes: Attributes
}



