import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  
  const [registeredUsers, setRegisteredUsers] = useState([]);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Loaded Successfully", data);
      })
      .catch((err) => console.log(err));
  }, []);

  const validate = () => {
    let error = {};

    if (!name) error.name = "Name is required";

    if (!email) {
      error.email = "Email is required";
    } else if (!email.includes("@")) {
      error.email = "Invalid Email";
    }

    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length === 0) {
      const newUser = {
        id: Date.now(),
        name,
        email,
      };

      
      setRegisteredUsers((prev) => [...prev, newUser]);

      setSuccess("Registration Successful!");
      setErrors({});

      setName("");
      setEmail("");
      setPassword("");
    } else {
      setErrors(validation);
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="error">{errors.name}</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errors.password}</p>

        <button type="submit">Register</button>
      </form>

      <h3 className="success">{success}</h3>

      <hr />

      <h2>(Registered Users)</h2>

      {registeredUsers.length === 0 ? (
        <p>No registered users.</p>
      ) : (
        registeredUsers.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        ))
      )}

    
      <footer
        style={{
          marginTop: "30px",
          backgroundColor: "#ed1010",
          color: "white",
          textAlign: "center",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>React Experiment 9</h2>

        <p>
          <strong>Name:</strong> Pradhuman Bhardwaj
        </p>

        <p>
          <strong>Admission No:</strong> 2025B15410060
        </p>

        <p>
          <strong>Roll No:</strong> 2503215400122
        </p>

        <p>
          <strong>Class:</strong> CSE-DS-3
        </p>

        
      </footer>
    </div>
  );
}

export default App;