import '../assets/css/ticketGroup.css'

import { useState, useEffect } from "react"
import { useTasks } from "context/TasksContext"
import { getTitleCase } from "../utils"
import { StatusIcons, PriorityIcons } from "../mappings"

import UserBubble from "./UserBubble"
import Ticket from "./Ticket"
import TicketGroupActions from './TicketGroup.Actions'

function getGroupHeader(groupingScheme, groupName, users) {
  if (groupingScheme === 'status') {
    return (
      <>
        {StatusIcons[groupName.toLowerCase().replace(' ', '')]}
        <h1>{getTitleCase(groupName)}</h1>
      </>
    )
  }
  else if (groupingScheme === 'userId') {
    const user = users.filter(x => x?.id === groupName)[0] || {}

    return (
      <>
        <UserBubble userData={user} />
        <h1>{getTitleCase(user?.name)}</h1>
      </>
    )
  }
  else if (groupingScheme === 'priority') {
    const priorityMap = {
      0: "No priority",
      1: "Low",
      2: "Medium",
      3: "High",
      4: "Urgent"
    }

    return (
      <>
        <span className={"priority-icon " + (groupName in [0,1,2,3] ? "small" : "")}>{PriorityIcons[groupName]}</span>
        <h1>{priorityMap[groupName]}</h1>
      </>
    )
  }
}

export default function TicketGroup({ groupingScheme, groupName, tickets }) {
  const [users, setUsers] = useState([])

  const tasks = useTasks()
  useEffect(() => {
    const newUsers = tasks?.users || []
    setUsers(newUsers)

  }, [tasks])

  return (
    <div className="ticket-group">
      <div className="group-header">
        <div className="left">
          { getGroupHeader(groupingScheme, groupName, users) }
          <span className="count">{ tickets.length }</span>
        </div>
        <div className="right">
          <TicketGroupActions />
        </div>
      </div>
      <div className="wrapper tickets">
        {
          tickets.map((ticket, i) => {
            return (
              <Ticket
                data={ ticket }
                userData={ users.filter(x => x?.id === ticket?.userId)[0] || {} }
                groupingScheme={ groupingScheme }
                key={i} />
            )
          })
        }
      </div>
    </div>
  )
}