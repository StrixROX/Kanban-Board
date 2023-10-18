import 'assets/css/home.css'

import { TasksProvider } from 'context/TasksContext'
import Topbar from 'features/KanbanBoard/components/Topbar'
import KanbanBoard from 'features/KanbanBoard'
import { GroupingProvider } from 'features/KanbanBoard/context/GroupingContext'
import { SortingProvider } from 'features/KanbanBoard/context/SortingContext'

export default function Home() {
  return (
    <>
      <GroupingProvider>
        <SortingProvider>
          <Topbar />
          <TasksProvider>
            <KanbanBoard />
          </TasksProvider>
        </SortingProvider>
      </GroupingProvider>
    </>
  )
}