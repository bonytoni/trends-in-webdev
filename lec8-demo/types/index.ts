// TODO
export type Task = {
  text: string
  due: Date
  completed: boolean
}

export type TaskId = {
  id: string
}

export type TaskWithId = Task & TaskId