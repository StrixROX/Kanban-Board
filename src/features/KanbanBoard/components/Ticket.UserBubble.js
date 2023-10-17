import '../assets/css/ticket.userBubble.css'

function getUserInitials(name) {
  const nameParts = name.split(' ')
  let initials = nameParts[0].toUpperCase()[0]

  if (nameParts.length > 1) {
    initials += nameParts[nameParts.length - 1].toUpperCase()[0]
  }

  return initials
}

function getTitleCase(text) {
  const textParts = text.split(' ')
  for (let i in textParts) {
    textParts[i] = textParts[i][0].toUpperCase() + textParts[i].slice(1)
  }

  return textParts.join(' ')
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