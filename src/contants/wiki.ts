import { User, Project } from './notes'


export interface Wiki {
  web_url: string
  git_ssh_url: string
  git_http_url: string
  path_with_namespace: string
  default_branch: string
}

export interface Attributes {
  title: string
  content: string
  format: string
  message: string
  slug: string
  url: string
  action: 'create' | 'edit' | 'delete'
}

export interface WikiBase {
  object_kind: string
  user: User
  project: Project
}

export type CreateAttributes = {
  action: 'create',
} & Attributes

export interface WikiCreateEvent extends WikiBase {
  object_attributes: CreateAttributes
}

export type EditAttributes = {
  action: 'edit',
} & Attributes

export interface WikiEditEvent {
  object_attributes: EditAttributes
}

export type DeleteAttributes = {
  action: 'delete',
} & Attributes

export interface WikiDeleteEvent {
  object_attributes: DeleteAttributes
}



