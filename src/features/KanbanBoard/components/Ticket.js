import '../assets/css/ticket.css'

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleHalfStroke, faCircleXmark, faSignal, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import priorityNone from 'assets/icons/priority-none.svg'
import priorityLow from 'assets/icons/priority-low.svg'
import priorityMedium from 'assets/icons/priority-medium.svg'
import priorityHigh from 'assets/icons/priority-high.svg'
import priorityUrgent from 'assets/icons/priority-urgent.svg'

import UserBubble from './Ticket.UserBubble'

const StatusIcons = {
  'backlog': <span className="status" title="Backlog"><FontAwesomeIcon icon={faSpinner} fixedWidth color='#e5e5e5' /></span>,
  'todo': <span className="status" title="Todo"><FontAwesomeIcon icon={faCircle} fixedWidth color='#e1e1e1' /></span>,
  'inprogress': <span className="status" title="In Progress"><FontAwesomeIcon icon={faCircleHalfStroke} fixedWidth color='#f1ca48' /></span>,
  'done': <span className="status" title="Done"><FontAwesomeIcon icon={faCircleCheck} fixedWidth color='#5e6ad2' /></span>,
  'cancelled': <span className="status" title="Cancelled"><FontAwesomeIcon icon={faCircleXmark} fixedWidth color='#94a2b3' /></span>,
}

const PriorityIcons = {
  0: <span className="priority" title="No Priority"><img src={priorityNone} alt="No-priority" /></span>,
  1: <span className="priority" title="Low Priority"><img src={priorityLow} alt="Low-priority" /></span>,
  2: <span className="priority" title="Medium Priority"><img src={priorityMedium} alt="Medium-priority" /></span>,
  3: <span className="priority" title="High Priority"><img src={priorityHigh} alt="High-priority" /></span>,
  4: <span className="priority" title="Urgent!"><img src={priorityUrgent} alt="Urgent" /></span>,
}

const TagColors = {
  'featurerequest': '#8d8d8e'
}

function clipText(text, limit=70) {
  if (text.length > 70) {
    return text.slice(0, limit).trim() + "..."
  }

  return text
}

export default function Ticket({ data, userData, groupingScheme }) {
  return (
    <>
      <div className="ticket">

        <div className="header">
          <span className="id">{ data.id }</span>
          { groupingScheme !== 'userId' ? <UserBubble userData={userData} /> : null }
        </div>

        <div className="details">
          { groupingScheme !== 'status' ? StatusIcons[data.status.toLowerCase().replace(' ','')] : null }
          <span className="title">{ clipText(data.title) }</span>
        </div>

        <div className="footer">
          { groupingScheme !== 'priority' ? PriorityIcons[data.priority] : null }
          <div className="tags">
            {
              data.tag.map((el, i) => {
                return (
                  <span className="tag" style={{ color: TagColors[el.toLowerCase().replace(' ','')] }} key={i}>{el}</span>
                )
              })
            }
          </div>
        </div>

      </div>
    </>
  )
}