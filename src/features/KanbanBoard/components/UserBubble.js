import '../assets/css/userBubble.css'

import { getTitleCase } from '../utils'

function getUserInitials(name) {
  const nameParts = name?.split(' ') || ['']
  let initials = nameParts[0].toUpperCase()[0]

  if (nameParts.length > 1) {
    initials += nameParts[nameParts.length - 1].toUpperCase()[0]
  }

  return initials
}

const bgColorList = ['#bf6c23', '#868700', '#2b963a', '#2b963a', '#f71cef', '#f78d1c']

export default function UserBubble({ userData }) {
  return (
    <div className="user-assigned">
      <span
        title={ getTitleCase(userData.name) + ( userData.available ? " (Available)" : "" ) }
        className={`user ${userData.available ? "available" : ""}`}
        style={{
          '--user-background-color': bgColorList[Math.floor(Math.random()*bgColorList.length)]
        }}
      >
        { getUserInitials(userData.name) }
      </span>
    </div>
  )
}