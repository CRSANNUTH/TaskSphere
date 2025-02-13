const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sannuth23:Sannuth%40037@cluster0.yau6f.mongodb.net/taskSphere?retryWrites=true&w=majority&appName=Cluster0';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
