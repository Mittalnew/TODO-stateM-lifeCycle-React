import React,{useState} from 'react';
import Task from './Task';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Search from './Search';

const TaskList = ({ tasks, addTask, deleteTask, toggleComplete, editTask }) => {
      const [searchTerm, setSearchTerm] = useState('');

      const filteredTasks = tasks.filter((task) => {
    // Filter tasks based on search term (text or id)
    return (
      task.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.id.toString().includes(searchTerm)
    );
  });

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg p-4 h-[500px] w-[500px]">
      <h1 className="text-3xl font-semibold text-white mb-4">Todo List</h1>
      <div className="mb-4">
        {/* Search component ka istemal karein */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task and press enter key"
          className="border rounded-md p-2 w-full text-black bg-white "
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
       {/* Scrollable container */}
      <div className="overflow-y-auto max-h-64"> {/* max-h-64 ka height aapke requirements ke hisab se adjust karein */}
        <TransitionGroup className="task-list">
          {filteredTasks.map((task) => (
            <CSSTransition key={task.id} timeout={300} classNames="fade">
              <Task
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                editTask={editTask}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>

    </div>
    </div>
  );
};

export default TaskList;
