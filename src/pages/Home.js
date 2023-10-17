import 'assets/css/home.css'

import { TasksProvider } from 'context/TasksContext'
import KanbanBoard from 'features/KanbanBoard'

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <TasksProvider>
        <KanbanBoard />
      </TasksProvider>
    </>
  )
}