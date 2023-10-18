import 'assets/css/forms.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function TicketGroupActions() {
  return (
    <>
      <button className="icon-button"><FontAwesomeIcon icon={faPlus} color='var(--text-color-light)' /></button>
      <button className="icon-button"><FontAwesomeIcon icon={faEllipsis} color='var(--text-color-light)' /></button>
    </>
  )
}