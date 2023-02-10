import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';



const generateUsers = (names) => names.map((name, i) => ({
  id: i,
  name,
}));

const App = () => {
  const names = ['Giorgi', 'Nika', 'Demna', 'Lasha', 'Tornike', 'Tamo', 'Beqa', 'Luka', 'Mariami', 'Anna'];
  const [users, setUsers] = useState(generateUsers(names))

  useEffect(() => {
    document.title = `${users.length} Users Left`;
  }, [users]);

  const randomDeleteHandler = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setUsers(users.filter((_,i) => i!== randomIndex));
  }
  return (
    <div>
    <h1>Users List</h1>
    <ul>
      {users.map(user => 
       <li key={user.id}>
        სახელი - {user.name}
       </li> )}
    </ul>
    <button onClick={randomDeleteHandler}>Delete Random user</button>
    </div>

  )
}


export default App