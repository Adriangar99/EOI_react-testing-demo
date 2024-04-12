import { useEffect, useState } from 'react'
import './App.css'
import { getUsers } from './services/userService'
import { User } from './domain/User'

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers()
      .then((response) => response.json())
      .then((users) => setUsers(users))
  }, [setUsers])

  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
