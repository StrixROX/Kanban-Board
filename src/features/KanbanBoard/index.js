import { useEffect, useState } from "react"
import { useTasks } from "context/TasksContext"

import Ticket from "./components/Ticket"

export default function KanbanBoard() {
  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])

  const [grouping, setGrouping] = useState('status')
  const [sorting, setSorting] = useState('priority')

  const tasks = useTasks()

  useEffect(() => {
    setTickets(tasks?.tickets || [])
    setUsers(tasks?.users || [])
  }, [tasks])

  return (
    <>
      <div>
        Group by:
        <button onClick={() => setGrouping('status')}>Status</button>
        <button onClick={() => setGrouping('user')}>User</button>
        <button onClick={() => setGrouping('priority')}>Priority</button>
      </div>
      <div>
        Sort by:
        <button onClick={() => setSorting('priority')}>priority</button>
        <button onClick={() => setSorting('title')}>Title</button>
      </div>
      <p>Grouping by: {grouping}</p>
      <p>Sorting by: {sorting}</p>
      <div className="wrapper kanban-board">
        {
          tickets.map((el, i) => {
            return (
              <Ticket
                data={el}
                userData={users.filter(x => x.id === el.userId)[0] || {}}
                groupingScheme={grouping}
                key={i} />
            )
          })
        }
      </div>
    </>
  )
}
