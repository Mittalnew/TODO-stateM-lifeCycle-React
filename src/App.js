// src/components/App.js
import React, { Component } from 'react';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  editTask = (taskId, newText) => {
    // Find the task with the taskId and update its text
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      ),
    }));
  };

  addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    this.setState((prevState) => ({ tasks: [...prevState.tasks, newTask] }));
  };

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  toggleComplete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  render() {
    return (
      <div className="container mx-auto p-4">
        <TaskList
          tasks={this.state.tasks}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          toggleComplete={this.toggleComplete}
            editTask={this.editTask} 
        />
      </div>
    );
  }
}

export default App;
