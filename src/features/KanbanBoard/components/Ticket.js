import 'assets/css/colors.css'
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

const StatusIcons = {
  'backlog': <FontAwesomeIcon icon={faSpinner} fixedWidth color='#e5e5e5' />,
  'todo': <FontAwesomeIcon icon={faCircle} fixedWidth color='#e1e1e1' />,
  'inprogress': <FontAwesomeIcon icon={faCircleHalfStroke} fixedWidth color='#f1ca48' />,
  'done': <FontAwesomeIcon icon={faCircleCheck} fixedWidth color='#5e6ad2' />,
  'cancelled': <FontAwesomeIcon icon={faCircleXmark} fixedWidth color='#94a2b3' />,
}

const PriorityIcons = {
  0: <img src={priorityNone} alt="No-priority" />,
  1: <img src={priorityLow} alt="Low-priority" />,
  2: <img src={priorityMedium} alt="Medium-priority" />,
  3: <img src={priorityHigh} alt="High-priority" />,
  4: <img src={priorityUrgent} alt="Urgent" />,
}

const TagColors = {
  'featurerequest': '#8d8d8e'
}

export default function Ticket({ data, userData, groupingScheme }) {
  return (
    <>
      <div className="ticket">
        <div className="header">
          <span className="id">{ data.id }</span>
          {
            groupingScheme !== 'userId'
            ? <span className={`user ${userData.available ? "available" : ""}`}>{ userData.name }</span>
            : null
          }
        </div>
        <div className="details">
          {
            groupingScheme !== 'status'
            ? <span className="status">{StatusIcons[data.status.toLowerCase().replace(' ','')]}</span>
            : null
          }
          <span className="title">{ data.title }</span>
        </div>
        <div className="footer">
          {
            groupingScheme !== 'priority'
            ? <span className="priority">{PriorityIcons[data.priority]}</span>
            : null
          }
          <div className="tags">
            {
              data.tag.map((el, i) => <span className="tag" style={{ color: TagColors[el.toLowerCase().replace(' ','')] }} key={i}>{el}</span>)
            }
          </div>
        </div>
      </div>
    </>
  )
}