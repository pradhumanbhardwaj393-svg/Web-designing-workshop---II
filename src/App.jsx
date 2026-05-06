import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState([])
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = { name, email }
    setUsers([...users, newUser])

    setName("")
    setEmail("")
    setPassword("")
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000) 
  }

  const handleReset = () => {
    setName("")
    setEmail("")
    setPassword("")
    setSuccess(false)
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="buttons">
            <button type="submit">Register</button>
            <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
          </div>
        </form>

        {success && <p className="success fade-in">Registration Successful!</p>}

        {users.length > 0 && (
          <div className="user-list">
            <h3>Registered Users</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index} className="user-item">
                  <div className="user-avatar">👤</div>
                  <div className="user-details">
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App