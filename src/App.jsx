import { useState } from "react"
import Navbar from "./components/Navbar"
import Loading from "./components/Loading"
import UserCard from "./components/UserCard"

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const getUsers = async () => {
    setLoading(true)
    const res = await fetch("https://reqres.in/api/users?page=1")
    const data = await res.json()
    setLoading(false)
    setUsers(data.data)
  }

  const oneUser = users.map((user) => {
    return (
      <UserCard
        key={user.id}
        user={user.id}
        avatar={user.avatar}
        email={user.email}
        first_name={user.first_name}
        last_name={user.last_name}
      />
    )
  })

  return loading ? (
    <>
      <Navbar />
      <Loading />
    </>
  ) : (
    <>
      <Navbar handleClick={() => getUsers()} />
      <div className="all-cards">{oneUser}</div>
    </>
  )
}
