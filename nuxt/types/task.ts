export interface Task {
  id: number
  attributes: {
    title: string
    description: string
    completed: boolean
  }
}