import { useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => state);
	const { currentUser } = auth;

	const [task, setTask] = useState('');

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!task.trim()) return; // Prevent adding empty tasks

		const newTask = {
			_id: Date.now().toString(), // Generate a temporary unique ID
			task,
			status: 'backlog',
			userId: currentUser?.id || 'guest', // Ensure userId is present
		};

		dispatch(addTask({ task: state.task, userId: currentUser.id }));
 // Dispatching the object
		setTask(''); // Reset input after adding
	};

	return (
		<div className='addtask'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='task'
					placeholder='Add your task'
					onChange={handleChange}
					value={task}
				/>
				<button className='button' type='submit'>
					Add Task
				</button>
			</form>
		</div>
	);
};

export default AddTask;
