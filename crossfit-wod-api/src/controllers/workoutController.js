const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
	const allWorkouts = workoutService.getAllWorkouts();
	res.send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
	const workout = workoutService.getOneWorkouts();
	res.send('Get an existing workouts');
};

const createNewWorkout = (req, res) => {
	const createdWorkout = workoutService.createNewWorkouts();
	res.send('Create a new workout');
};

const updateWorkout = (req, res) => {
	const updateWorkout = workoutService.updateOneWorkouts();
	res.send('Update an existing workout');
};

const deleteWorkout = (req, res) => {
	const deleteWorkout = workoutService.deteleOneWorkouts();
	res.send('Delete an existing workout');
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createNewWorkout,
	updateWorkout,
	deleteWorkout,
};
