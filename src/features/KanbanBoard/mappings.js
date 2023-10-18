import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleHalfStroke, faCircleXmark, faSignal, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import priorityNone from 'assets/icons/priority-none.svg'
import priorityLow from 'assets/icons/priority-low.svg'
import priorityMedium from 'assets/icons/priority-medium.svg'
import priorityHigh from 'assets/icons/priority-high.svg'
import priorityUrgent from 'assets/icons/priority-urgent.svg'

export const StatusIcons = {
  'backlog': <span className="icon status" title="Backlog"><FontAwesomeIcon icon={faSpinner} fixedWidth color='#e5e5e5' /></span>,
  'todo': <span className="icon status" title="Todo"><FontAwesomeIcon icon={faCircle} fixedWidth color='#e1e1e1' /></span>,
  'inprogress': <span className="icon status" title="In Progress"><FontAwesomeIcon icon={faCircleHalfStroke} fixedWidth color='#f1ca48' /></span>,
  'done': <span className="icon status" title="Done"><FontAwesomeIcon icon={faCircleCheck} fixedWidth color='#5e6ad2' /></span>,
  'cancelled': <span className="icon status" title="Cancelled"><FontAwesomeIcon icon={faCircleXmark} fixedWidth color='#94a2b3' /></span>,
}

export const PriorityIcons = {
  0: <span className="icon priority" title="No Priority"><img src={priorityNone} alt="No-priority" /></span>,
  1: <span className="icon priority" title="Low Priority"><img src={priorityLow} alt="Low-priority" /></span>,
  2: <span className="icon priority" title="Medium Priority"><img src={priorityMedium} alt="Medium-priority" /></span>,
  3: <span className="icon priority" title="High Priority"><img src={priorityHigh} alt="High-priority" /></span>,
  4: <span className="icon priority" title="Urgent!"><img src={priorityUrgent} alt="Urgent" /></span>,
}

export const TagColors = {
  'featurerequest': '#8d8d8e'
}