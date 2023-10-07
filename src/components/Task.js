import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineCheck, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';

const Task = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className={`flex items-center rounded-md justify-between p-4 border-b ${task.completed ? 'bg-black' : ''}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 transform scale-150 "
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSaveClick();
              }
            }}
            className="text-lg w-[300px] rounded-lg h-[40px] p-4 "
          />
        ) : (
          <span className={`text-lg text-white ${task.completed ? 'line-through text-green-500' : ''}`}>{task.text}</span>
        )}
      </div>
      <div className="flex">
        {isEditing ? (
          <button
            className="text-white mx-2 hover:text-green-800"
            onClick={handleSaveClick}
          >
            <AiOutlineSave className='text-2xl' />
          </button>
        ) : (
          <>
            <button
              className="text-blue-600 mx-2 hover:text-blue-800"
              onClick={handleEditClick}
            >
              <AiOutlineEdit className='text-2xl' />
            </button>
            <button
              className="text-red-600 mx-2 hover:text-red-800"
              onClick={() => deleteTask(task.id)}
            >
              <AiOutlineDelete className='text-2xl' />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
