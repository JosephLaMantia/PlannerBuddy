import logo from "./assets/images/Notepad_BOOP.png"
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="planner-buddy">
      <div className='title'>
        <img className="title-logo" src={logo} alt=""/>
        <h1 className='title-text'>PlannerBuddy</h1>
        </div>
      <TodoList/>
    </div>
  );
}

export default App;
