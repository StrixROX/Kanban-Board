import { useEffect, useState } from "react"
import { useTasks } from "context/TasksContext"

import TicketGroup from "./components/TicketGroup"
import { useGrouping } from "./context/GroupingContext"
import { useSorting } from "./context/SortingContext"

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

function sortTicketGroupKeys(groupKeys, grouping, users) {
  let sortingFunction = null
  if (grouping === 'status') {
    sortingFunction = (a, b) => {
      if (a < b) {
        return 1
      }
      else {
        return -1
      }
    }
  }
  else if (grouping === 'userId') {
    sortingFunction = (a, b) => {
      const userA = users.filter(x => x.id === a)[0]?.name || a
      const userB = users.filter(x => x.id === b)[0]?.name || b
      
      if (userA < userB) {
        return -1
      }
      else {
        return 1
      }
    }
  }
  else if (grouping === 'priority') {
    sortingFunction = (a, b) => {
      return b - a
    }
  }

  return groupKeys.sort(sortingFunction)
}

export default function KanbanBoard() {
  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])

  const [ticketGroups, setTicketGroups] = useState([])

  const tasks = useTasks()
  const grouping = useGrouping()
  const sorting = useSorting()

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
    <div className="wrapper kanban-board">
      <div className="ticket-groups" style={{ display: 'flex' }}>
        {
          sortTicketGroupKeys(Object.keys(ticketGroups), grouping, users)
          .map((group, i) => <TicketGroup groupingScheme={grouping} groupName={group} tickets={ticketGroups[group]} key={i} />)
        }
      </div>
    </div>
  )
}
