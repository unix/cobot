export type AvatarUrl = null | string

export interface User {
  name: string,
  username: string,
  avatar_url: AvatarUrl,
}

export interface Project {
  name: string,
  description: string,
  web_url: string,
  avatar_url: AvatarUrl,
  git_ssh_url: string,
  git_http_url: string,
  namespace: string,
  visibility_level: number,
  path_with_namespace: string,
  default_branch: string,
  homepage: string,
  url: string,
  ssh_url: string,
  http_url: string,
}

export interface Repository {
  name: string,
  url: string,
  description: string,
  homepage: string,
}

export interface Attributes {
  id: number,
  note: string,
  noteable_type: string,
  author_id: number,
  created_at: string,
  updated_at: string,
  updated_by_id?: null | number,
  project_id: number,
  attachment: null | any,
  line_code: any,
  commit_id: string,
  noteable_id: number,
  system: boolean,
  st_diff: any,
  url: string,
}

export interface Source {
  visibility_level: number,
  name: string,
  description: string,
  web_url: string,
  avatar_url: AvatarUrl,
  git_ssh_url: string,
  git_http_url: string,
  namespace: string,
  path_with_namespace: string,
  default_branch:string
  homepage: string,
  url: string,
  ssh_url: string,
  http_url: string
}

export type Author = {
  name: string,
  email: string,
}

export type Assignee = {
  name: string,
  username: string,
  avatar_url: AvatarUrl,
}

export interface LastCommit {
  id: string,
  message: string,
  timestamp: string,
  url: string,
  author: Author,
}

export interface MergeRequest {
  id: number,
  target_branch: string,
  source_branch: string,
  source_project_id: number,
  author_id: number,
  assignee_id: number,
  milestone_id: number,
  title: string,
  created_at: string,
  updated_at: string,
  state: string,
  merge_status: string,
  target_project_id: number,
  iid: number,
  description: string,
  position: number,
  locked_at: any,
  source: Source,
  target: Source,
  last_commit: LastCommit,
  work_in_progress: boolean,
  total_time_spent: number,
  assignee: Assignee,
}

export interface NoteEvent {
  object_kind: string,
  user: User,
  project_id: number,
  project: Project,
  repository: Repository,
  object_attributes: Attributes,
  merge_request: MergeRequest,
}
