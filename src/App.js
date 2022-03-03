import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { BsPenFill } from "react-icons/bs";
import { FaSmileWink } from "react-icons/fa";
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp, orderBy } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [todos, settodos] = useState([]);
  const todosCollectionRef = collection(db, "todos");

  const createUser = async () => {
    await addDoc(todosCollectionRef, { todo: newName ,createdAt: serverTimestamp()});
   setNewName('')
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "todos", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(todosCollectionRef,orderBy('createdAt'));
      settodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       
    };

    getUsers();
  }, [todos]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Let's Make It Cool...<FaSmileWink color="yellow" size="25px" /></h2>

      </div>
      <div className="input">
        <BsPenFill size="20px" color="black" /><input value={newName} placeholder=" Add item..." onChange={(event) => { setNewName(event.target.value); }} />
        <i className="fas fa-plus" onClick={createUser}></i>

      </div>

      <div className="todos">

        {todos.map((todos) => {

          return (
            <div className="todo">
              <div className="left">
                <p><li>{todos.todo}</li></p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => { deleteUser(todos.id); }}></i>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;