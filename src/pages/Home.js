import 'assets/css/home.css'

import { TasksProvider } from 'context/TasksContext'
import KanbanBoard from 'features/KanbanBoard'

export default function Home() {
  return (
    <>
      <TasksProvider>
        <KanbanBoard />
      </TasksProvider>
    </>
  )
}