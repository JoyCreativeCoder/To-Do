'use client'
import {useState} from 'react';

const AddTodo = ({onAdd}) => {
    const [task, setTask] = useState('');

    const handleChange = (e) => setTask(e.target.value);
    const handleSubmit  = (e) => {
        e.preventDefault()
        if(task.trim()) {
            onAdd(task);
            setTask('');
        }
    }

    return ( 
        <form className="flex items-center space-x-4 w-96" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a new task" 
                value = {task}
                onChange={handleChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  w-full"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md ">
                Add
            </button >
    </form>
     );
}
 
export default AddTodo;