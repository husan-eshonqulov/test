import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function App() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState<any>([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: newAge });
  }

  const updateUser = async (id: string, age: number) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  }

  const deleteUser = async (id: string) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers();
  });

  return (
    <div className="App">
      <input type="text" placeholder='Name...' onChange={(e) => { setNewName(e.target.value) }} />
      <input type="number" placeholder='Age...' onChange={(e) => { setNewAge(parseInt(e.target.value)) }} />
      <button onClick={createUser}>Create User</button>

      {
        users.map((user: any) => {
          return (
            <div key={user.name}>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
              <button onClick={() => deleteUser(user.id)}>Delete User</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
