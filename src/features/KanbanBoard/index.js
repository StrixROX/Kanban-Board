import { useEffect, useState } from "react"
import { useTasks } from "context/TasksContext"

import Ticket from "./components/Ticket"

function groupTicketsBy(grouping, sorting, tickets) {
  // separating tickets into groups by `grouping` field
  const newTicketGroups = tickets.reduce((accumulator, el) => {
    if (el[grouping] in accumulator) {
      accumulator[el[grouping]].push(el)
    }
    else {
      accumulator[el[grouping]] = [el]
    }

    return accumulator
  }, {})

  // sorting each group by `sorting` field
  for (let i in newTicketGroups) {
    newTicketGroups[i] = newTicketGroups[i].sort((a, b) => {
      const sortingParam_a = a[sorting]
      const sortingParam_b = b[sorting]

      if (typeof(sortingParam_a) != typeof(sortingParam_b)) {
        return 0
      }

      if (typeof(sortingParam_a) == 'number') { // descending order
        return sortingParam_b - sortingParam_a
      }
      else if (typeof(sortingParam_a) == 'string'){ // ascending order
        if (sortingParam_a > sortingParam_b) {
          return 1
        }
        else if (sortingParam_a < sortingParam_b) {
          return -1
        }
        else{
          return 0
        }
      }
    })
  }

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
    const newTicketGroups = groupTicketsBy(grouping, sorting, newTickets)

    setTickets(newTickets)
    setUsers(newUsers)
    setTicketGroups(newTicketGroups)
  }, [tasks])

  useEffect(() => {
    const newTicketGroups = groupTicketsBy(grouping, sorting, tickets)

    setTicketGroups(newTicketGroups)
  }, [grouping, sorting])

  return (
    <div className="wrapper kanban-board" style={{
      background: "var(--background-color)",
      width: "max-content",
    }}>
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
    </div>
  )
}
