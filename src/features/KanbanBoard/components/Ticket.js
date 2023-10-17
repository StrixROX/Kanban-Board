import '../assets/css/ticket.css'

export default function Ticket({ data, userData, groupingScheme }) {
  return (
    <>
      <div className="ticket">
        <div className="header">
          <span className="id">{ data.id }</span>
          {
            groupingScheme !== 'user'
            ? <span className={`user ${userData.available ? "available" : ""}`}>{ userData.name }</span>
            : null
          }
        </div>
        <div className="details">
          {
            groupingScheme !== 'status'
            ? <span className="status">{ data.status }</span>
            : null
          }
          <span className="title">{ data.title }</span>
        </div>
        <div className="footer">
          {
            groupingScheme !== 'priority'
            ? <span className="priority">{ data.priority }</span>
            : null
          }
          <div className="tags">
            {
              data.tag.map((el, i) => <span className="tag" key={i}>{el}</span>)
            }
          </div>
        </div>
      </div>
    </>
  )
}