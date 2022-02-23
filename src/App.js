import './App.css';
import NavBar from './components/navbar/navbar';
import AddToDo from './components/to-do/addToDo';
import ToDoList from './components/to-do/toDoList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AddToDo/>
      <ToDoList/>
    </div>
  );
}

export default App;
