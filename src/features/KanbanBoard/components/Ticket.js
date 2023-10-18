import '../assets/css/ticket.css'

import { StatusIcons, PriorityIcons, TagColors } from '../mappings'
import UserBubble from './UserBubble'

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