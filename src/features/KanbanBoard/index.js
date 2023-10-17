import { useEffect, useState } from "react"
import { useTasks } from "context/TasksContext"

import Ticket from "./components/Ticket"

function groupTicketsBy(grouping, tickets) {
  const newTicketGroups = tickets.reduce((accumulator, el) => {
    if (el[grouping] in accumulator) {
      accumulator[el[grouping]].push(el)
    }
    else {
      accumulator[el[grouping]] = [el]
    }

    return accumulator
  }, {})

  return newTicketGroups
}

export default function KanbanBoard() {
  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])

  const [grouping, setGrouping] = useState('status')
  const [sorting, setSorting] = useState('priority')

  const [ticketGroups, setTicketGroups] = useState([])

  const tasks = useTasks()

  useEffect(() => {
    const newTickets = tasks?.tickets || []
    const newUsers = tasks?.users || []
    const newTicketGroups = groupTicketsBy(grouping, newTickets)

    setTickets(newTickets)
    setUsers(newUsers)
    setTicketGroups(newTicketGroups)
  }, [tasks])

  useEffect(() => {
    const newTicketGroups = groupTicketsBy(grouping, tickets)

    setTicketGroups(newTicketGroups)
  }, [grouping, sorting])

  return (
    <>
      <div>
        Group by:
        <button onClick={() => setGrouping('status')}>Status</button>
        <button onClick={() => setGrouping('userId')}>User</button>
        <button onClick={() => setGrouping('priority')}>Priority</button>
      </div>
      <div>
        Sort by:
        <button onClick={() => setSorting('priority')}>priority</button>
        <button onClick={() => setSorting('title')}>Title</button>
      </div>
      <p>Grouping by: {grouping}</p>
      <p>Sorting by: {sorting}</p>
      <div className="wrapper kanban-board" style={{
        display: 'flex'
      }}>
        {
          Object.values(ticketGroups).map((group, i) => {
            return (
              <div className="ticket-group" key={i}>
                {
                  group.map((el, i) => {
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
            )
          })
        }
      </div>
    </>
  )
}
