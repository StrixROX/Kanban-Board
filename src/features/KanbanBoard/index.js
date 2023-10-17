import { useEffect, useState } from "react"
import { useTasks } from "context/TasksContext"

export default function KanbanBoard() {
  const tasks = useTasks()

  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])

  const [grouping, setGrouping] = useState('status')
  const [sorting, setSorting] = useState('sorting')

  useEffect(() => setTickets(tasks?.tickets || []), [tasks])
  useEffect(() => setUsers(tasks?.users || []), [tasks])

  return (
    <>
      <p>Grouping by: {grouping}</p>
      <p>Sorting by: {sorting}</p>
      <div className="wrapper kanban-board">
        {
          tickets.map((el) => el.title)
        }
      </div>
    </>
  )
}
