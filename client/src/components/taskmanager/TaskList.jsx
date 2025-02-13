import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from './ListCard';
import './tasklist.scss';

const TaskList = () => {
	const dispatch = useDispatch();

	// Selecting auth state and task state
	const { currentUser } = useSelector((state) => state.auth);
	const { tasks } = useSelector((state) => state.task); // Ensure "tasks" is used instead of "AllTasks"

	useEffect(() => {
		if (currentUser?.token && currentUser?.id) {
			dispatch(getAllTasks(currentUser.token, currentUser.id));
		}
	}, [dispatch, currentUser?.token, currentUser?.id]); // Added optional chaining to prevent errors

	return (
		<div>
			<ul className='list-header'>
				<li>
					<h5>Id</h5>
				</li>
				<li>
					<h5>Issue Name</h5>
				</li>
				<li>
					<h5>Status</h5>
				</li>
				<li>
					<h5>Action</h5>
				</li>
			</ul>

			{tasks && tasks.length > 0 ? ( // Ensure tasks exist before mapping
				tasks.map((item) => <ListCard key={item._id} item={item} />)
			) : (
				<p>No tasks available</p> // Show message if no tasks exist
			)}
		</div>
	);
};

export default TaskList;
