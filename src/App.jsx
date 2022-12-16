import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';



function App() {

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "companyInfo");
  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getInfo()
  }, [])
  return (
    <React.Fragment>
      <div>
        {users.map((user) => {
          return (
            <div>
              <h1>Company Name : {user.cname}</h1>
              <h2>Experience : {user.cexp}</h2>
            </div>
          );
        })}
      </div>
      <Home />
    </React.Fragment>
  );
}

export default App;
