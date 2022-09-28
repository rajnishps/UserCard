import "./UserCard.css"

export default function UserCard(props) {
  return (
    <div className="card">
      <img className="user-image" src={props.avatar} />
      <div className="all-texts">
        <h3 className="user-name">
          NAME : {props.first_name} {props.last_name}
        </h3>
        <p className="user-email"> EMAIL : {props.email}</p>
        <p className="user-id">ID : {props.user}</p>
      </div>
    </div>
  )
}
