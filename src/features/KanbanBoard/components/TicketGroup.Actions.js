import { faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TicketGroupActions() {
  return (
    <>
      <button>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button>
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </>
  )
}